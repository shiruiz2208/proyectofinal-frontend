import PrivateRoute from '@/HOC/PrivateRoute';
import { LayoutContainer } from '@/components';
import { Contact, Home, Login, Products, Register, Services } from '@/pages';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import {
  CONTACT_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  PRODUCTS_PAGE,
  REGISTER_PAGE,
  SERVICES_PAGE,
} from './path';

const router = createBrowserRouter([
  // ############################################
  // ##### RUTAS PUBLICAS
  // ############################################
  {
    element: (
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    ),
    children: [
      { path: HOME_PAGE, element: <Home /> },
      { path: LOGIN_PAGE, element: <Login /> },
      { path: REGISTER_PAGE, element: <Register /> },
      { path: SERVICES_PAGE, element: <Services /> },
      { path: CONTACT_PAGE, element: <Contact /> },
    ],
  },
  // ############################################
  // ##### RUTAS PRIVADAS
  // ############################################
  {
    element: (
      <PrivateRoute>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </PrivateRoute>
    ),
    children: [{ path: PRODUCTS_PAGE, element: <Products /> }],
  },
]);

export default router;
