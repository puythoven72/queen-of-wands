import { Container } from "react-bootstrap";
import SplashPage from "./SplashPage";
import { Row, Col, Button, Card } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
import Image from 'react-bootstrap/Image';
import tarotAnimated from '../assets/images/tarotAnimated.gif'

function HomeComponent() {
    return (
        <div>
            <Container className="mt-3 baseText d-flexalign-items-center justify-content-center text-center">
                <Row className="mb-5">
                    <Col>
                        <h2 className="title">
                            Queen Of Wands Tarot
                        </h2>
                    </Col>
                </Row>


            </Container>
            <SplashPage />

        </div>
    );
}
export default HomeComponent;