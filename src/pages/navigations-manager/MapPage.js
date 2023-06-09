import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid, Paper } from '@mui/material';
import { Segmented, Spin } from 'antd';
import MainCard from '../../components/MainCard';
import { getPetsList, imageServe, renderDateTime } from '../../functions/common';
import { getPetLocationsRequest } from '../../utils/API';
import PetList from './components/PetList';
import { Config } from '../../utils/Config';
import { DrawingManager } from '@react-google-maps/api';

const MapWithRoute = ({ real_time = false, title = 'Pet History' }) => {
    const [map_loaded, setMapLoaded] = useState();
    const [selected, setSelected] = useState('Population');
    const [pets, setPets] = useState([]);
    const [pet, setPet] = useState(null);
    const [polyLines, setPolyLines] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [page_loading, setPageLoading] = useState(true);
    const [opened_socket, setOpenedSocker] = useState(null);
    const mapRef = useRef(null);
    const mapsRef = useRef(null);
    const clearPolys = () => {
        console.log('Cleariing polys', polyLines);
        polyLines.forEach((polyLine) => polyLine.polyline.setMap(null));
    };

    const clearMarkers = () => {
        markers.forEach((marker) => marker.setMap(null));
    };
    async function getPetLocations(the_pet) {
        try {
            let res = await getPetLocationsRequest(the_pet.id);
            console.log(res);

            return res.results;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    const renderPetLocation = async (google, map, maps, pets_list) => {
        if (pet !== null) {
            let locations = await getPetLocations(pet);
            clearMarkers();
            clearPolys();
            if (selected === 'Population') {
                renderPoints(google, map, maps, locations, pet.color);
                setPageLoading(false);
            } else {
                if (locations.length > 0) {
                    renderPolyLines(
                        google,
                        map,
                        locations.map((path) => ({ lat: path.latitudes, lng: path.longitudes })),
                        pet.color,
                        pet.id
                    );
                }

                setPageLoading(false);
            }
        } else {
            console.log('Here at all');
            for (const the_pet of pets_list) {
                console.log('The Pet', the_pet);
                clearPolys();
                clearMarkers();
                let locations = await getPetLocations(the_pet);
                console.log('Pet iter', the_pet);
                if (selected === 'Population') {
                    renderPoints(google, map, maps, locations, the_pet.color);
                } else {
                    renderPolyLines(
                        google,
                        map,
                        locations.map((path) => ({ lat: path.latitudes, lng: path.longitudes })),
                        the_pet.color,
                        the_pet.id
                    );
                }
            }
            setPageLoading(false);
        }
    };

    const renderPoints = (google, map, maps, pet_path, color) => {
        const points = pet_path.map(
            (path, idx) =>
                new google.maps.Marker({
                    position: { lat: path.latitudes, lng: path.longitudes },
                    map: map,
                    title: `At ${renderDateTime(path.created_at)}`,
                    icon: {
                        path: maps.SymbolPath.CIRCLE,
                        scale: 3,
                        fillColor: color,
                        fillOpacity: 1,
                        strokeWeight: 0
                    }
                })
        );
        setMarkers((prevState) => [...prevState].concat(points));
    };

    const renderPolyLines = (google, map, path_res, color, pet_id) => {
        const polyline = new google.maps.Polyline({
            path: path_res,
            geodesic: true,
            strokeColor: color,
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        polyline.setMap(map);
        setPolyLines((prevState) => [...prevState, { pet_id: pet_id, polyline: polyline }]);
    };

    const mapConfig = (pets) => {
        setPageLoading(true);
        if (mapRef.current) {
            console.log(mapRef.current);
            // Initialize map and directions service
            const google = window.google;
            const map = mapRef.current;
            const maps = mapsRef.current;
            renderPetLocation(google, map, maps, pets).then((r) => {
                if (opened_socket === null && real_time) {
                    setOpenedSocker('Hello');
                    openPetSocket(google, map, maps, pets);
                }
            });
        }
    };
    const openPetSocket = (google, map, maps, pets) => {
        let socket = new WebSocket(Config.socketURL + 'ws/ws-pet-tracker');
        setOpenedSocker(socket);

        socket.onopen = function (e) {
            // console.log('Opened ' + id);
        };
        socket.onmessage = function (event) {
            let data = JSON.parse(event.data);
            console.log('Data:', data);
            if (data !== null) {
                let pet_location = data.pet_location;
                socketManager(pet_location, google, map, maps, pets);
            }
        };

        socket.onclose = function (event) {
            // console.log('Closed ' + id);
            if (event.wasClean) {
                // Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                openPetSocket(google, map, maps, pets);
            }
        };

        socket.onerror = function (error) {
            // console.log('Error ' + id);
            openPetSocket(google, map, maps, pets);
        };
    };

    const changeLastPetIconToDot = (maps, color) => {
        setMarkers((prevState) => {
            prevState[prevState.length - 1].setIcon({
                path: maps.SymbolPath.CIRCLE,
                scale: 3,
                fillColor: color,
                fillOpacity: 1,
                strokeWeight: 0
            });
            return prevState;
        });
    };

    const socketManager = (pet_location, google, map, maps, pets_list) => {
        console.log('Here at socketManager', polyLines);
        if (selected === 'Route') {
            setPolyLines((prevPolyLines) => {
                const updatedPolyLines = prevPolyLines.map((pol) => {
                    if (pol.pet_id === pet_location.pet.id) {
                        console.log(pol.polyline);
                        const newPath = pol.polyline.getPath();
                        console.log('New Path', newPath);
                        newPath.push({ lat: pet_location.latitudes, lng: pet_location.longitudes });
                        pol.polyline.setPath(newPath);
                    }
                    return pol;
                });
                return updatedPolyLines;
            });
        } else {
            console.log('Color', pets_list.find((item) => item.id === pet_location.pet.id).color);
            changeLastPetIconToDot(maps, pets_list.find((item) => item.id === pet_location.pet.id).color);
            const icon = {
                url: imageServe(pet_location.pet.icon, 'circle'),
                scaledSize: new google.maps.Size(30, 30),
                anchor: new google.maps.Point(10, 10),
                shape: {
                    coords: [10, 10, 10],
                    type: 'circle'
                }
            };
            const point = new google.maps.Marker({
                position: { lat: pet_location.latitudes, lng: pet_location.longitudes },
                map: map,
                title: `At ${renderDateTime(pet_location.created_at)}`,
                icon: icon
            });
            map.panTo(new google.maps.LatLng(pet_location.latitudes, pet_location.longitudes));
            setMarkers((prevState) => [...prevState, point]);
        }
    };

    useEffect(() => {
        getPetsList(setPets, (pets) => mapConfig(pets));
    }, [map_loaded, selected, pet]);

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>{title}</Grid>
                            <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                                <PetList pets={pets} setPet={setPet} current_pet={pet} />
                            </Grid>
                            <Grid>
                                <Segmented options={['Population', 'Route']} value={selected} onChange={setSelected} />
                            </Grid>
                        </Grid>
                    </>
                }
            >
                <Spin tip="Constructing data..." spinning={page_loading}>
                    <Paper>
                        <div style={{ height: '70vh', width: '100%' }}>
                            <GoogleMapReact
                                // bootstrapURLKeys={{ key: '', libraries: ['drawing'] }}
                                defaultCenter={{ lat: -6.804358, lng: 39.222483 }}
                                defaultZoom={17}
                                yesIWantToUseGoogleMapApiInternals
                                onGoogleApiLoaded={({ map, maps }) => {
                                    mapRef.current = map;
                                    mapsRef.current = maps;
                                    setMapLoaded(true);
                                }}
                            >
                                {map_loaded && (
                                    <DrawingManager
                                        // onReady={handleDrawingManagerReady}
                                        onLoad={(e) => {
                                            console.log('Ready', e);
                                        }}
                                        drawingMode={'polygon'}
                                        drawingControlOptions={{
                                            position: window.google.maps.ControlPosition.TOP_CENTER,
                                            drawingModes: [window.google.maps.drawing.OverlayType.POLYGON]
                                        }}
                                    />
                                )}
                            </GoogleMapReact>
                        </div>
                    </Paper>
                </Spin>
            </MainCard>
            {/*<FloatButton.Group trigger="click" type="primary" style={{ right: 24 }} icon={<CustomerServiceOutlined />}>*/}
            {/*    <FloatButton />*/}
            {/*    <FloatButton icon={<CommentOutlined />} />*/}
            {/*</FloatButton.Group>*/}
        </>
    );
};

export default MapWithRoute;
