import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicesComponent from './components/ServicesComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import EventsComponent from './components/EventsComponent';
import HomeComponent from './components/HomeComponent';
import TermsOfService from './components/TermsOfService';
import EventComponent from './components/EventComponent';
import { useEffect } from "react";
import Footer from './components/Footer';

function App() {

  let currentUrl = window.location.href;
  const [activeLink, setActiveLink] = React.useState("/home");


  useEffect(() => {
    getAllItems();
  }, []);


  async function getAllItems() {
    await getCurrentUrl().then((data) => {
      setActiveLink(data)
    }).catch(error => { console.log(error) })
  }


  function getCurrentUrl() {

    //let isCurrentUrl = currentUrl.includes("events");
    if (currentUrl.includes("events")) {
      return new Promise((resolve) => {
        resolve('/events')
      });
    }
    if (currentUrl.includes("services")) {
      return new Promise((resolve) => {
        resolve('/services')
      });
    }
    if (currentUrl.includes("about")) {
      return new Promise((resolve) => {
        resolve('/about')
      });
    } if (currentUrl.includes("contact")) {
      console.log("FOUND CONTACT");
      return new Promise((resolve) => {
        resolve('/contact')
      });
    }


    return new Promise((resolve) => {
      resolve('/home')
    });

  }

  return (
    <div >
      <Router>

        <HeaderComponent activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className='footerPadding'>
          <Routes>
            <Route path="/" element={<HomeComponent activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/home" element={<HomeComponent activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/services" element={<ServicesComponent activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/contact" element={<ContactComponent navigation="topNav" />} />
            <Route path="/rsvp" element={<ContactComponent />} />
            <Route path="/events" element={<EventsComponent />} />
            <Route path="/displayEvent" element={<EventComponent />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
      </Router>




    </div>
  );
}

export default App;
