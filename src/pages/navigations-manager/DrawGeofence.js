import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleMap, DrawingManager, Polygon, LoadScript } from '@react-google-maps/api';
import { useNavigate, useParams } from 'react-router';
import { createPetGeofenceRequest, getPetByIdRequest } from '../../utils/API';
import snack from '../../functions/snack';
import { Button, Grid, Paper } from '@mui/material';
import { Spin } from 'antd';
import MainCard from '../../components/MainCard';
import SaveIcon from '@mui/icons-material/Save';

const DrawGeofence = () => {
    const [geofencePath, setGeofencePath] = useState([]);
    const [polygon, setPolyGon] = useState(null);
    const mapRef = useRef(null);
    const drawingManagerRef = useRef(null);
    const [show_btn, setShowSaveBtn] = useState(false);
    const navigate = useNavigate();

    const params = useParams();

    const [pet, setPet] = useState(null);
    const [points, setPoints] = useState([]);

    const getPetDetails = () => {
        if (params.pet_id !== undefined || params.pet_id !== null) {
            getPetByIdRequest(params.pet_id)
                .then((res) => {
                    console.log(res);
                    setPet(res);
                })
                .catch((err) => {
                    console.log(err);
                    snack.error('Failed to load pet details');
                    navigate('/pets', { replace: true });
                });
        } else {
            snack.error('Failed to load pet details');
            navigate('/pets', { replace: true });
        }
    };

    useEffect(() => {
        getPetDetails();
    }, [points]);

    const handleMapReady = (mapProps, map) => {
        mapRef.current = map;
    };

    const handleDrawingManagerReady = (ref) => {
        console.log('Ready');
        drawingManagerRef.current = ref;
    };

    const options = {
        drawingMode: show_btn ? '' : 'polygon',
        drawingControl: false,
        drawingControlOptions: {
            drawingMode: ['Polygon']
        },
        polygonOptions: {
            fillColor: '#2196F3',
            strokeColor: '#2196F3',
            fillOpacity: 0.5,
            strokeWeight: 2,
            clickable: true,
            editable: true,
            draggable: true,
            zindex: 100
        }
    };

    const handlePolygonComplete = useCallback(function handlePolygonComplete(poly) {
        setPolyGon(poly);
        setShowSaveBtn(true);
    });
    const handeSave = () => {
        const polyArray = polygon
            .getPath()
            .getArray()
            .map((item, idx) => {
                return {
                    longitudes: item.lng(),
                    latitudes: item.lat()
                };
            });
        createPetGeofenceRequest(params.pet_id, { points: polyArray })
            .then((res) => {
                console.log(res);
                snack.success('Successfully added pet geofence');
                navigate('/pets', { replace: true });
            })
            .catch((err) => {
                console.log(err);
                snack.error('Failed to save pet geofence');
            });
    };

    return (
        <>
            <MainCard
                title={
                    <>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>Adding geofence</Grid>
                        </Grid>
                        {show_btn && (
                            <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
                                <Button variant="contained" endIcon={<SaveIcon />} onClick={handeSave}>
                                    Save
                                </Button>
                            </Grid>
                        )}
                    </>
                }
            >
                <Spin tip="Constructing data..." spinning={false}>
                    <Paper>
                        <div style={{ height: '700px', width: '100%' }}>
                            <GoogleMap mapContainerClassName={'App-map'} zoom={20} center={{ lat: -6.804358, lng: 39.222483 }}>
                                <DrawingManager
                                    onReady={handleDrawingManagerReady}
                                    options={options}
                                    onPolygonComplete={handlePolygonComplete}
                                    onPolygonEdit={(e) => {
                                        console.log(e);
                                    }}
                                    onOverlayComplete={(e) => {
                                        console.log(e);
                                    }}
                                    // drawingMode={'polygon'}
                                    // drawingControlOptions={{
                                    //     position: window.google.maps.ControlPosition.TOP_CENTER,
                                    //     drawingModes: [window.google.maps.drawing.OverlayType.POLYGON]
                                    // }}
                                />
                            </GoogleMap>
                        </div>
                    </Paper>
                </Spin>
            </MainCard>
        </>
    );
};

export default DrawGeofence;
