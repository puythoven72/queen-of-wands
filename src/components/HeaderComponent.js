import { useNavigate, NavLink, BrowserRouter as Router, } from "react-router-dom";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/images/logo.gif'
import Image from 'react-bootstrap/Image';
import "../App.css";
function HeaderComponent(props) {

  const [activeLink, setActiveLink] = React.useState("/home");
  const navigate = useNavigate();

  console.log(activeLink + " IS LNINK");


  return (
    <Navbar expand="lg" style={{ backgroundColor: "#78c0de" }}>
      <Container fluid style={{ backgroundColor: "#eec986" }} >


        <Navbar.Brand href="/home" >

          <div className="navBarBrand navTitle">
            <Image src={logo} thumbnail />
            Queen Of Wands Tarot</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav defaultActiveKey={activeLink}
            className="me-auto mb-2 navTitle"
            // variant="underline"

            onSelect={(selectedKey, event) => {
              event.preventDefault();
              console.log("selected key is: ", selectedKey + " EVENT IS " + event.currentTarget);
              setActiveLink(selectedKey);
              navigate(selectedKey);
              document.getElementById("eventsLink").classList.remove('active'); 
        document.getElementById("contactLink").classList.remove('active');
        document.getElementById("serviceLink").classList.remove('active');

            }}
          >
            <Nav.Item>
              <Nav.Link
                href="/home" eventKey="/home"
                className={({ isActive }) => (isActive ? 'active' : null)}
                id="homeLink"
              >
                Home

              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services" eventKey="/services"
                className={({ isActive }) => (isActive ? 'active' : null)}
                id="serviceLink"
              >Services</Nav.Link>

            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" eventKey="/about"
                className={({ isActive }) => (isActive ? 'active' : null)}
                id="aboutLink"
              >About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" eventKey="/contact"
                className={({ isActive }) => (isActive ? 'active' : null)}
                id="contactLink"
              >Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/events" eventKey="/events"
                className={({ isActive }) => (isActive ? 'active' : null)}
                id="eventsLink"
              >Events</Nav.Link>
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
