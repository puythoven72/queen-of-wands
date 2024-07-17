import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import StringUtility from './utility/StringUtility';
import "./cardStyle.css";
import about from "../assets/images/about.jpg"
function AboutComponent() {


    return (


        <Container >

            <Row className="mt-5">
                <Col >
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                        Queen Of Wands Tarot Advising
                    </h1>
                </Col>
            </Row>
            <Row className="text-center">
                <Col className="mt-2" style={{ backgroundColor: '#eec986', borderRadius: '5px'}}>
                    <h3 className="title">About</h3>
                </Col>
            </Row>
            <Row >
                <Col className="text-center  p-3 "  sm={1} lg={6} style={{ backgroundColor: '#eec986' ,borderRadius: '5px'}}>
                    <Image src={about} roundedCircle
                        width="75%"
                        className="box"
                    />
                </Col>


                <Col className="text-center p-3 d-flex align-items-center aboutText" style={{ backgroundColor: '#eec986' }}>
                    <p >{StringUtility.ABOUT}</p>
                </Col>

            </Row>
        </Container>

    );
}

export default AboutComponent;