
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Splash from '../assets/images/tarotSplash.jpg'
import StringUtility from './utility/StringUtility';
import "./cardStyle.css";
import about from "../assets/images/about.jpg"
function AboutComponent() {
    return (
        <>
            {/* <Container className="baseText">
               
            </Container> */}

            < Container >

                <Row className="mt-5">
                    <Col className="">
                        <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                            Queen Of Wands Tarot Advising
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex align-items-center justify-content-center text-center " style={{backgroundColor:'#eec986'}} >


                    <Col className="mt-2">
                        <h3 className="title">About</h3>
                    </Col>
                </Row>

                <Row className="p-4 d-flex align-items-center justify-content-center text-center " style={{backgroundColor:'#eec986'}}  >
                    <Col className="">

                        <Image  fluid rounded src={about} />


                    </Col>
                    <Col className="d-flex align-items-center justify-content-center text-center ">
                        <p >{StringUtility.ABOUT}
                        </p>
                    </Col>
                </Row>





            </Container>

        </>

    );
}

export default AboutComponent;