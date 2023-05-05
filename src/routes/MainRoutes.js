import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';

// render
const HomePage = Loadable(lazy(() => import('pages/authentication/Home')));

const MainRoutes = {
    path: '/',
    element: <HomePage />,
    children: [
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <HomePage />
                }
            ]
        }
    ]
};

export default MainRoutes;
