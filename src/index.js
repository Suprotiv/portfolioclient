import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfoliopage';
import ScrollToTop from './components/ScrollToTop';
import Servicepage from './pages/Servicepage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <>
        <ScrollToTop />
        <Portfolio />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <ScrollToTop />
        <Servicepage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <AboutPage />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
