import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import StringUtility from './utility/StringUtility';

import about from "../assets/images/about.jpg"
import background from "../assets/images/bkround_crown.png";
import "../App.css";



function AboutComponent() {

    return (


        <Container  >

            <Row className="mt-5">
                <Col >
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                        Queen Of Wands Tarot Advising
                    </h1>
                </Col>
            </Row>
           
                <Row className="text-center " >
                    <Col className="mt-3" >
                        <h3 className="splashTitle">About</h3>
                    </Col>
                </Row>
                <div style={{ borderRadius: '15px' ,border: '1px solid black'}} className="aboutText p-3">
                <Row>
                    <Col className="d-flex align-items-center justify-content-center text-center  " sm={1} md={6} lg={6} >
                        <Image src={about} roundedCircle
                            width="75%"
                            className="box"
                        />


                    </Col>


                    <Col className="text-center p-3 d-flex align-items-center">
                        <p>{StringUtility.ABOUT}</p>
                    </Col>

                </Row>
            </div>

        </Container>

    );
}

export default AboutComponent;