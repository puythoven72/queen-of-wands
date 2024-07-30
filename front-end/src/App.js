import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import ServicesComponent from './components/ServicesComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import EventsComponent from './components/EventsComponent';
import HomeComponent from './components/HomeComponent';
import { useEffect, useState } from "react";
import backround from './assets/images/backround.gif'
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
function App() {

  return (
    <div >
      
      
        <Router>
        
        <HeaderComponent />
        <div >
          <Routes>

            {/* <Route path="/admin" element={<ListItemsComponent />} />
            <Route path="/admin/add-item" element={<CreateItemComponent />} />
            <Route path="/admin/edit-item/:id" element={<CreateItemComponent />} />
            <Route path="/admin/add-images/:id" element={<AddImagesComponent />} /> */}

            {/* <Route path="/" element={<DisplayItemsComponent />} /> */}
            <Route path="/" element={<HomeComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/services" element={<ServicesComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/events" element={<EventsComponent />} />
           
            
          </Routes>
          </div>
         
        </Router>
      <Footer/>



    </div>
  );
}

export default App;
