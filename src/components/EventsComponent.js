import { Row, Col, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import currentEvent from "../assets/images/currentEvent.png";
function EventsComponent() {


    return (
        <Container className="p-3">

            <Row className="mt-2">
                <Col className="">
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                        QUEEN OF WANDS TAROT EVENTS
                    </h1>
                </Col>
            </Row>
            <Row className="mt-2 " >
                <Col className="d-flex align-items-center justify-content-center text-center ">
                    <Image src={currentEvent} thumbnail 
                    style={{ borderRadius: '15px' ,border: '1px solid black'}}
                    />
                </Col>

            </Row>
        </Container>
    )

};
export default EventsComponent;