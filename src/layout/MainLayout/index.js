import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

// types
import { openDrawer } from 'store/reducers/menu';
import { LoadScript } from '@react-google-maps/api';
import { system_tracker_socket } from '../../functions/system_tracker_socket';
import { PetOutsideFenceDialog } from '../../components/dialogs';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Tooltip } from 'antd';
import { imageServe } from '../../functions/common';
import { getGoogleApiKeyRequest } from '../../utils/API';

// ==============================|| MAIN LAYOUT ||============================== //
const libraries = ['drawing'];

const MainLayout = () => {
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
    const dispatch = useDispatch();

    const { drawerOpen } = useSelector((state) => state.menu);

    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);

    const [socket_open, setSocketOpen] = useState(false);
    const [dialog_open, setDialogOpen] = useState(false);
    const [content, setContent] = useState('');
    const [pets_outside_fence, setPetsOutsideFence] = useState([]);
    const [googleKey, setGoogleKey] = useState(null);

    const getApiKey = () => {
        getGoogleApiKeyRequest()
            .then((res) => {
                console.log('Key', res);
                setGoogleKey(res);
            })
            .catch((err) => {
                console.log(err);
                setGoogleKey('');
            });
    };

    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    };

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));

        if (!socket_open) system_tracker_socket(setSocketOpen, setDialogOpen, setPetsOutsideFence);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    useEffect(() => {
        getApiKey();
    }, []);

    const PetAlerts = () => {
        return pets_outside_fence.map((pet, idx) => (
            <Alert
                icon={
                    <Tooltip title={pet.name} placement="top">
                        <Avatar style={{ backgroundColor: '#dac660' }} src={imageServe(pet.icon)}>
                            {pet.name.charAt(0).toUpperCase()}
                        </Avatar>
                    </Tooltip>
                }
                severity="warning"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setPetsOutsideFence((prevState) => {
                                const updatedList = prevState.filter((item) => item.id !== pet.id);
                                return updatedList;
                            });
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                style={{
                    marginBottom: 5
                }}
            >
                <AlertTitle>Warning</AlertTitle>
                Pet <strong>{pet.name}</strong> is outside the geofence
            </Alert>
        ));
    };

    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Header open={open} handleDrawerToggle={handleDrawerToggle} />
                <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
                <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                    <Toolbar />
                    <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                    <PetAlerts />
                    {googleKey !== null && (
                        <LoadScript id={'script-loader'} googleMapsApiKey={googleKey} libraries={libraries} language="en" region="us">
                            <Outlet />
                        </LoadScript>
                    )}
                </Box>
            </Box>
            <PetOutsideFenceDialog open={dialog_open} setOpen={setDialogOpen} content={content} />
        </>
    );
};

export default MainLayout;
