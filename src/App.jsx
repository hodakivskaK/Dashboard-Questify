import { Route, Routes  } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useEffect, lazy  } from 'react'
import { useAuth } from './hook/useAuth';
import { refreshUser } from './redux/auth/authOperation'

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const RegisterFormPage = lazy(() => import('./pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('./pages/LoginFormPage/LoginFormPage'));




export const App = () => {
  const dispatch = useDispatch(); 
  const { isRefreshing } = useAuth();

  useEffect(() => {
  dispatch(refreshUser())
}, [dispatch])

  return (isRefreshing ? (
    <b>Refreshing user...</b>
  ) :
    <Routes>
    <Route path="/" element={<SharedLayout />}>
     <Route path="/" element={<LandingPage />} />
 
     <Route path="/registration" element={<RegisterFormPage /> } />
     <Route path="/login" element={<LoginFormPage /> } />

     <Route path="/dashboard" element={<DashboardPage /> } />

   
   </Route>
 </Routes>
  );
    
}