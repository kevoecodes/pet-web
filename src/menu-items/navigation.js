// assets
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PetsIcon from '@mui/icons-material/Pets';

// icons
const icons = {
    LocationOnIcon,
    GpsFixedOutlinedIcon,
    PetsIcon
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
        },
        {
            id: 'pets',
            title: 'Pets',
            type: 'item',
            url: '/pets',
            icon: icons.PetsIcon,
            breadcrumbs: false
        }
    ]
};

export default navigation;
