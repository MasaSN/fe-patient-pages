import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import PatientDashboard from './portals/PatientDashboard';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Users from './pages/Users';
import NoPage from './pages/NoPage'
import Analytics from './pages/Analytics';
import PersonalInformation from './pages/PersionalInformation';
import Appointments from './pages/Appointments';
import LabResults from './pages/LabResults';
import Prescriptions from './pages/Prescriptions';
import Billing from './pages/Billing';
import Messages from './pages/Messages';
// import AdminPortal from './portals/AdminPortal';
// import Form from './components/Form';
// import LoginPage from './pages/LoginPage';
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <LoginPage/>
  // },
  {
    path: '/',
    element: <PersonalInformation/>
  },
  // {
  //   path:'/patient-dashboard',
  //   element: <PatientDashboard/>
  // },
  {
    path: '/admin-dashboard',
    element: <PersonalInformation/>
  },
  {
    path: '/appointments',
    element: <Appointments/>
  },
  {
    path: '/lab-results',
    element: <LabResults/>
  },
  {
    path: '/prescriptions',
    element: <Prescriptions/>
  },
  {
    path: '/settings',
    element: <Settings/>
  },
  {
    path: '/billing',
    element: <Billing/>
  },
  {
    path: '/messages',
    element: <Messages/>
  },
  {
    path: '*',
    element: <NoPage/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router = {router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();