import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
//import currentEvent from "../assets/images/currentEvent.png";

import { useEffect, useState } from "react";
function EventsComponent() {

    const [messageDisplay, setMessageDisplay] = useState(null);
    const [eventImgSrc, setEventImgSrc] = useState("");

    useEffect(() => {
        setImgSource()

    }, [])

    function setImgSource() {
        const eventImage = '/assets/currentEvent.png';
       
            axios
            .get(eventImage)
            .then(() => {
                setEventImgSrc(eventImage);
            })
            .catch(() => {
              
                 setEventImgSrc(require('../assets/images/stayTuned.png'));
               
            });

    }



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
                <Col className="d-flex align-items-center justify-content-center text-center" id="imageCol">
                    <Image src={eventImgSrc} thumbnail
                        style={{ borderRadius: '15px', border: '1px solid black' }}
                        alt="Current Event"
                    />
                </Col>
            </Row>
            {messageDisplay != null ? (<Row><Col className="splashTitle d-flex align-items-center justify-content-center text-center">{messageDisplay}</Col></Row>):("")}


        </Container>
    )

};
export default EventsComponent;