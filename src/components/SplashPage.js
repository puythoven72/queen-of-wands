import Container from "react-bootstrap/Container";
import Splash from '../assets/images/tarotSplash.jpg'
import tarotAnimated from '../assets/images/tarotAnimated.gif'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Button, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import mediumCrown from "../assets/images/bkround_crown.png";
import '../App.css';
import { NavLink, Link } from "react-router-dom";


function SplashPage() {


    return (
        <Container className="">

            <Row className="mt-5">
                <Col className="">
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                        Queen Of Wands Tarot Advising
                    </h1>
                </Col>
            </Row>

            <Row className="     main    " >
                <Col className=" splashFontLocation" >

                    <Row  className="">
                        <Col className="d-flex align-items-center justify-content-center text-center">
                            <Link to="/services" className="splashFont">Services</Link>


                        </Col>
                    </Row  >
                    <Row  className="d-flex align-items-center justify-content-center text-center">
                        <Col className="  ">
                            <Link to="/events" className="splashFont">Events</Link>
                        </Col>
                    </Row>
                    <Row >
                        <Col className=" d-flex align-items-center justify-content-center text-center">
                            <Link to="/contact" className="splashFont">Contact</Link>
                        </Col>
                    </Row>

                </Col>

            </Row>



        </Container>

    );
}
export default SplashPage