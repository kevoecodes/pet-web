import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { paths } from '../extra-pages/data';
import { Grid, Paper } from '@mui/material';
import { Avatar, Divider, Tooltip, Segmented } from 'antd';
import MainCard from '../../components/MainCard';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { getPetsList, imageServe } from '../../functions/common';

const MapWithRoute = () => {
    const [map_loaded, setMapLoaded] = useState();
    const [selcted, setSelected] = useState('Population');
    const [pets, setPets] = useState([]);
    const [polyLines, setPolyLines] = useState([]);
    const [markers, setMarkers] = useState([]);
    const mapRef = useRef(null);
    const mapsRef = useRef(null);
    const clearPolys = () => {
        polyLines.forEach((polyLine) => polyLine.setMap(null));
    };

    const clearMarkers = () => {
        markers.forEach((marker) => marker.setMap(null));
    };

    const renderPoints = (google, map, maps) => {
        clearPolys();
        const points = paths.map(
            (path, idx) =>
                new google.maps.Marker({
                    position: path,
                    map: map,
                    title: 'Start',
                    icon: {
                        path: maps.SymbolPath.CIRCLE,
                        scale: 3,
                        fillColor: '#F00',
                        fillOpacity: 1,
                        strokeWeight: 0
                    }
                })
        );
        setMarkers(points);
    };

    const renderPolyLines = (google, map) => {
        clearMarkers();
        const polyline = new google.maps.Polyline({
            path: paths,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        polyline.setMap(map);
        setPolyLines([polyline]);
    };

    const mapConfig = (pets) => {
        console.log('Pets', pets);
        if (mapRef.current) {
            console.log(mapRef.current);
            console.log('Hello');
            // Initialize map and directions service
            const google = window.google;
            const map = mapRef.current;
            const maps = mapsRef.current;
            if (selcted === 'Population') renderPoints(google, map, maps);
            else renderPolyLines(google, map);
            // const polyline = new google.maps.Polyline({
            //     path: paths,
            //     geodesic: true,
            //     strokeColor: '#FF0000',
            //     strokeOpacity: 1.0,
            //     strokeWeight: 2
            // });
            // const polyline_2 = new google.maps.Polyline({
            //     path: paths,
            //     geodesic: true,
            //     strokeColor: '#71b1de',
            //     strokeOpacity: 1.0,
            //     strokeWeight: 2
            // });
            //
            // // Display the polyline on the map
            // polyline.setMap(map);
            // // polyline_2.setMap(map);
            //
            // const startMarker = new google.maps.Marker({
            //     position: paths[0],
            //     map: map,
            //     title: 'Start'
            // });
            //
            // // Add a marker at the end of the path
            // const endMarker = new google.maps.Marker({
            //     position: paths[paths.length - 1],
            //     map: map,
            //     title: 'End',
            //     icon: {
            //         url: imageServe(pets[0].icon),
            //         scaledSize: new google.maps.Size(32, 32)
            //     }
            // });
        }
    };

    useEffect(() => {
        getPetsList(setPets, (pets) => mapConfig(pets));
    }, [map_loaded, selcted]);

    const PetList = () => (
        <Avatar.Group>
            {pets.map((pet, idx) => {
                return (
                    <>
                        <Tooltip key={idx} title={pet.name} placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} src={imageServe(pet.icon)}>
                                {pet.name.charAt(0).toUpperCase()}
                            </Avatar>
                        </Tooltip>
                    </>
                );
            })}
        </Avatar.Group>
    );

    return (
        <MainCard
            title={
                <>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>Pet History</Grid>
                        <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                            <PetList />
                        </Grid>
                        <Grid>
                            <Segmented options={['Population', 'Route']} value={selcted} onChange={setSelected} />
                        </Grid>
                    </Grid>
                </>
            }
        >
            <Paper>
                <div style={{ height: '70vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDQz72mL0bI2Li-VJ2AAyFl78sB4UbQIMk' }}
                        defaultCenter={{ lat: -6.810583, lng: 39.257459 }}
                        defaultZoom={20}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => {
                            mapRef.current = map;
                            mapsRef.current = maps;
                            setMapLoaded(true);
                        }}
                    />
                </div>
            </Paper>
        </MainCard>
    );
};

export default MapWithRoute;
