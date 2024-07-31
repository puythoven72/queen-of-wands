import { useNavigate, NavLink, BrowserRouter as Router, } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/images/logo.gif'
import Image from 'react-bootstrap/Image';
import "../App.css";


function HeaderComponent(props) {


  const navigate = useNavigate();

  useEffect(() => {

    //remove active class for all nav links
    document.getElementById("/home").classList.remove('active');
    document.getElementById("/services").classList.remove('active');
    document.getElementById("/about").classList.remove('active');
    document.getElementById("/contact").classList.remove('active');
    document.getElementById("/events").classList.remove('active');

    //navigate to the selected link
    navigate(props.activeLink);

    //mark selected link as active
    document.getElementById(props.activeLink).classList.add('active');
  }, [props.activeLink]);



  const toggleMobileMenu = () => {
    let element = document.getElementById('basic-navbar-nav');
    if (element.classList.contains("show")) {
      element.classList.remove("show");
    } else {
      element.classList.add("show");
    }



  };


  //78c0de
  //eec986
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#78c0de" }}>
      <Container fluid style={{ backgroundColor: "#000" }} >

        <Navbar.Brand href="/" >

          <div className="navBarBrand ">
            <Image src={logo} thumbnail />
           <span className="navTitleBorder m-2">Queen Of Wands Tarot</span> 
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >


          <Nav defaultActiveKey={props.activeLink}
            className="me-auto mb-2 navLink"
            variant="underline"

            onSelect={(selectedKey, event) => {
              event.preventDefault();
              props.setActiveLink(selectedKey);
         
            }}
          >
            <Nav.Item className="navTitle">
              <Nav.Link
                href="/home" eventKey="/home"

                id="/home"
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/services" eventKey="/services"

                id="/services"
              >Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/about" eventKey="/about"

                id="/about"
              >About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/events" eventKey="/events"

                id="/events"
              >Events</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/contact" eventKey="/contact"

                id="/contact"
              >Contact</Nav.Link>
            </Nav.Item>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>




        </Navbar.Collapse>


      </Container>
    </Navbar>




  );
}

export default HeaderComponent;
