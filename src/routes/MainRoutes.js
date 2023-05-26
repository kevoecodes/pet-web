import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const UsersList = Loadable(lazy(() => import('pages/users-management/UsersList')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

//  user management routes  //
const CreateUser = Loadable(lazy(() => import('pages/users-management/CreateUser')));
const EditUser = Loadable(lazy(() => import('pages/users-management/EditUser')));

const PetHistory = Loadable(lazy(() => import('pages/navigations-manager/PetHistory')));
const PetTracker = Loadable(lazy(() => import('pages/navigations-manager/PetTracker')));
const ListPets = Loadable(lazy(() => import('pages/navigations-manager/ListPets')));
const AddPet = Loadable(lazy(() => import('pages/navigations-manager/AddPet')));
const EditPet = Loadable(lazy(() => import('pages/navigations-manager/EditPet')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <PetTracker />
        },
        {
            path: 'history',
            element: <PetHistory />
        },
        {
            path: '/users',
            // element: <UsersList />,
            children: [
                {
                    path: '',
                    element: <UsersList />
                },
                {
                    path: 'create-user',
                    element: <CreateUser />
                },
                {
                    path: 'edit-user/:user_id',
                    element: <EditUser />
                }
            ]
        },
        {
            path: '/pets',
            // element: <UsersList />,
            children: [
                {
                    path: '',
                    element: <ListPets />
                },
                {
                    path: 'add-pet',
                    element: <AddPet />
                },
                {
                    path: 'edit-pet/:pet_id',
                    element: <EditPet />
                }
            ]
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
