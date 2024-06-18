import { Container } from "react-bootstrap";
import SplashPage from "./SplashPage";
import { Row, Col, Button, Card } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
import Image from 'react-bootstrap/Image';
import tarotAnimated from '../assets/images/tarotAnimated.gif'
import '../App.css';

function HomeComponent() {
    return (
        <div>
            {/* <Container className="mt-3 splashTitle d-flex align-items-center justify-content-center text-center">
                <Row className="mb-5">
                    <Col className="d-flex align-items-center justify-content-center text-center">
                        <h1 className="test ">
                            Queen Of Wands Tarot Advising
                        </h1>
                    </Col>
                </Row>


            </Container> */}
            <SplashPage />

        </div>
    );
}
export default HomeComponent;