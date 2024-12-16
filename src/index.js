import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Box from './components/boxes';
import Metaverse from './components/metaverse';
import Virtual from './components/virtual';
import Subscribe from './components/subscribe';
import Footer from './components/footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Box />
    <Metaverse />
    <Virtual />
    <Subscribe />
    <Footer />
  </React.StrictMode>
);



