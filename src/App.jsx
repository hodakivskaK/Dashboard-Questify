import { Route, Routes  } from "react-router-dom";
import { lazy  } from 'react'

import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';


import { Layout } from "./components/Layout";


const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const RegisterFormPage = lazy(() => import('./pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('./pages/LoginFormPage/LoginFormPage'));
const CompletedTaskPage = lazy(()=> import('./pages/CompletedTask/CompletedTask'))



export const App = () => {

  return (false ? (
    <b>...</b>
  ) :
    <Routes>

        <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegisterFormPage />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={<LoginFormPage />} />
          }
        />
        <Route
          path="/completed"
          element={
            <PrivateRoute redirectTo="/login" component={<CompletedTaskPage />} />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
      </Route>
 </Routes>
  );
    
}