import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/images/logo.png'
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

    if (props.activeLink !== "/TermsOfService") {
      //navigate to the selected link
      navigate(props.activeLink);

      //mark selected link as active
      document.getElementById(props.activeLink).classList.add('active');

    }

  }, [props.activeLink]);



  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#c8b568" }}>
      <Container fluid style={{ backgroundColor: "#3A415C" }} >

        <Navbar.Brand href="/Event" >

          <div className="navBarBrand ">
            <Image src={logo} />

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
            <Nav.Item >
              <Nav.Link
                href="/home" eventKey="/home"

                id="/home"
              >
                HOME
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/services" eventKey="/services"

                id="/services"
              >SERVICES
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/about" eventKey="/about"

                id="/about"
              >ABOUT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/events" eventKey="/events"

                id="/events"
              >EVENTS</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/contact" eventKey="/contact"

                id="/contact"
              >CONTACT</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default HeaderComponent;
