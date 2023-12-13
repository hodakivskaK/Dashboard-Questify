import { Route, Routes  } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { lazy  } from 'react'
// import { refreshUser } from './redux/auth/authOperation'

import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
// import { useAuth } from './hook/useAuth';

import { Layout } from "./components/Layout";


const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const RegisterFormPage = lazy(() => import('./pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('./pages/LoginFormPage/LoginFormPage'));



export const App = () => {
//   const dispatch = useDispatch(); 
//   const { isRefreshing } = useAuth();

//   useEffect(() => {

//     dispatch(refreshUser())
  
// }, [dispatch])


  return (false ? (
    <b>...</b>
  ) :
    <Routes>

        <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={<RegisterFormPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={<LoginFormPage />} />
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
        <Route
          path="dashboard/complete"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
      </Route>
 </Routes>
  );
    
}