import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { paths } from '../extra-pages/data';
import { Button, Grid, Paper } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MainCard from '../../components/MainCard';

const MapWithRoute = () => {
    const [map_loaded, setMapLoaded] = useState();
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            console.log(mapRef.current);
            console.log('Hello');
            // Initialize map and directions service
            const google = window.google;
            const map = mapRef.current;
            const polyline = new google.maps.Polyline({
                path: paths,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            const polyline_2 = new google.maps.Polyline({
                path: paths,
                geodesic: true,
                strokeColor: '#71b1de',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            // Display the polyline on the map
            polyline.setMap(map);
            polyline_2.setMap(map);
        }
    }, [map_loaded]);

    return (
        <MainCard
            title={
                <>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>Pet History path</Grid>
                    </Grid>
                </>
            }
        >
            <Paper>
                <div style={{ height: '70vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDQz72mL0bI2Li-VJ2AAyFl78sB4UbQIMk' }}
                        defaultCenter={{ lat: -6.810583, lng: 39.257459 }}
                        defaultZoom={19}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map }) => {
                            mapRef.current = map;
                            setMapLoaded(true);
                        }}
                    />
                </div>
            </Paper>
        </MainCard>
    );
};

export default MapWithRoute;
