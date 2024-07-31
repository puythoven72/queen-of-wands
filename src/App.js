import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicesComponent from './components/ServicesComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import EventsComponent from './components/EventsComponent';
import HomeComponent from './components/HomeComponent';
import Footer from './components/Footer';
function App() {
  const [activeLink, setActiveLink] = React.useState("/home");
 
  return (
    <div >
      
      
        <Router>
        
        <HeaderComponent  activeLink={activeLink} setActiveLink={setActiveLink}/>
        <div >
          <Routes>
            <Route path="/" element={<HomeComponent activeLink={activeLink} setActiveLink={setActiveLink}/>} />
            <Route path="/home" element={<HomeComponent activeLink={activeLink} setActiveLink={setActiveLink}/>} />
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
