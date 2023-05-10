// assets
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// icons
const icons = {
    LocationOnIcon,
    GpsFixedOutlinedIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const navigation = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'track',
            title: 'Track',
            type: 'item',
            url: '/',
            icon: icons.GpsFixedOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'history',
            title: 'History',
            type: 'item',
            url: '/history',
            icon: icons.LocationOnIcon,
            breadcrumbs: false
        }
    ]
};

export default navigation;
