import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import HomeLayout from 'layout/HomeLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const HomePage = Loadable(lazy(() => import('pages/authentication/Home')));
const ResetPassword = Loadable(lazy(() => import('pages/authentication/ResetPassword')));
const CheckCv = Loadable(lazy(() => import('pages/authentication/CheckCv')));

const LoginRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'reset-password',
            element: <ResetPassword />
        },
        {
            path: 'check-cv',
            element: <CheckCv />
        }
    ]
};

export default LoginRoutes;
