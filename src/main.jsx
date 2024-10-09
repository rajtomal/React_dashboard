import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import './assets/style/common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import About from './Pages/About/About.jsx';
import LayOut from './LayOut/LayOut.jsx';
import LogIn from './Pages/LogIn_Registration/LogIn_Registration.jsx';
import FactoryDetails from './Pages/FactoryDetails/FactoryDetails.jsx';
import Factory from './Pages/Factory/Factory.jsx';
import Country from './Pages/MasterData/Country/Country.jsx';
import Division from './Pages/MasterData/Division/Division.jsx';
import District from './Pages/MasterData/District/District.jsx';
import PoliceStation from './Pages/MasterData/PoliceStation/PoliceStation.jsx';
import BusinessType from './Pages/MasterData/BusinessType/BusinessType.jsx';
import Department from './Pages/MasterData/Department/Department.jsx';
import Designation from './Pages/MasterData/Designation/Designation.jsx';
import Role from './Pages/MasterData/Role/Role.jsx';

const router = createBrowserRouter([
  { path: '/Login', element: <LogIn /> },
  {
    path: '/',
    element: <LayOut />, // Use MainLayout as the main layout
    children: [
      { path: '/', element: <Dashboard />, },
      { path: '/about', element: <About /> },
      { path: '/factory-details', element: <FactoryDetails /> },
      { path: '/factory', element: <Factory /> },
      { path: '/country', element: <Country /> },
      { path: '/division', element: <Division /> },
      { path: '/district', element: <District /> },
      { path: '/police-station', element: <PoliceStation /> },
      { path: '/business-type', element: <BusinessType /> },
      { path: '/department', element: <Department /> },
      { path: '/designation', element: <Designation /> },
      { path: '/role', element: <Role /> },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
