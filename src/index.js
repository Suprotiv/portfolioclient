import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfoliopage';
import ScrollToTop from './components/ScrollToTop';
import Servicepage from './pages/Servicepage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer/>
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "services", element: <Servicepage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
