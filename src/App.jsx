import { Route, Routes  } from "react-router-dom";
import { lazy  } from 'react'
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const RegisterFormPage = lazy(() => import('./pages/RegisterFormPage/RegisterFormPage'));
const LoginFormPage = lazy(() => import('./pages/LoginFormPage/LoginFormPage'));


export const App = () => {
  return (
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