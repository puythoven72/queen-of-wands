import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
//import currentEvent from "asset";
import { useEffect, useState } from "react";

function EventsComponent() {

    const [messageDisplay, setMessageDisplay] = useState(null);
    const [eventImgSrc, setEventImgSrc] = useState("");
    const [allEvents, setAllEvents] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        //   setImgSource()
        getAllEvents();
    }, []);


    const getAllEvents = () => {
        axios.get("/assets/json/events.json").then((res) => {
            setAllEvents(res.data.events);
        })
    };


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


    function sendRsvp(data) {
        navigate('/rsvp', { state: { data: data } });
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

            <Row className='d-flex align-items-center justify-content-center text-center'>

                {allEvents.map((ev, index) => (

                    <Card key={index} className='m-2' style={{ width: '35rem', backgroundColor: "#3a415c", color: "#c8b568", borderRadius: '15px' }}>
                        <Card.Title className="queenFont" >{ev.location} - {ev.date}</Card.Title >

                        <Link className="" to="/displayEvent" state={{ data: JSON.stringify(ev) }} >
                            <Card.Img className="  " variant="" src={process.env.PUBLIC_URL + 'assets/images/' + ev.image} alt={ev.description} />
                        </Link>
                        <Card.Footer style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>
                            <Row>
                                <Button onClick={event => sendRsvp(JSON.stringify(ev))} variant="" type="submit" className="btn-custom " size="lg" >
                                    RSVP
                                </Button>
                            </Row>
                        </Card.Footer>
                    </Card>

                ))}


            </Row>

        </Container>
    )

}
export default EventsComponent;