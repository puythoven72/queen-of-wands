import { Row, Col, Button, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import currentEvent from "../assets/images/currentEvent.png";
function EventsComponent() {


    return (
        <Container className="p-3">

            <Row className="mt-5">
                <Col className="">
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                        Queen Of Wands Tarot Events
                    </h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex align-items-center justify-content-center text-center">
                    <Image src={currentEvent} thumbnail />
                </Col>

            </Row>
        </Container>
    )

};
export default EventsComponent;