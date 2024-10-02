import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import About from './Pages/About/About.jsx';
import LayOut from './LayOut/LayOut.jsx';
import LogIn from './Pages/LogIn/LogIn.jsx';

const router = createBrowserRouter([
  { path: '/Login', element: <LogIn /> },
  {
    path: '/',
    element: <LayOut />, // Use MainLayout as the main layout
    children: [
      { path: '/', element: <Dashboard />, }, // Render Dashboard at the root path
      { path: 'about', element: <About /> }, // Render About under the main layout
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
