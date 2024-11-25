import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HelmetProvider, Helmet } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <StrictMode>
      <Helmet>
        <title>Techavis</title>
        <meta name="description" content="Techavis Services Pvt. Ltd. offers IT management solutions via ManageEngine to enhance efficiency, security, and control, simplifying IT for seamless productivity.." />
        <meta name="keywords" content="techavis, TechAvis,Techavis" />
        <link rel="canonical" href="https://www.techavis.com" />
      </Helmet>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </HelmetProvider>
);
