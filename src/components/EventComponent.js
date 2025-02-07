import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import "../App.css";
import { useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function EventComponent() {

    const location = useLocation();
    const data = JSON.parse(location.state?.data);
    const navigate = useNavigate();

    function sendRsvp(data) {
        // console.log(data);
        navigate('/rsvp', { state: { data: data } });
    }


    return (

        <Container  >
            <Row className="splashTitle  d-flex align-items-center justify-content-center text-center">
                <Col >
                    <h1 className="">
                        {data.location}
                    </h1>
                </Col>
            </Row>

            <Row className='p-3 d-flex align-items-center justify-content-center text-center '>
                <Col className="mb-2" sm={1} md={1} lg={6} >
                    <Image src={process.env.PUBLIC_URL + 'assets/images/' + data.image}
                        width="100%"
                        className="aboutImage"
                        alt={data.location + data.description}
                    />
                </Col>

                <Col className="p-3 " >
                    <Card className=''>
                        <Card.Header className="queenFont" style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>QUEEN OF WANDS</Card.Header>
                        <Card.Body className='' style={{ background: "rgba(78, 87, 123, 0.7)" }}>
                            <Card.Title className='cardTitle'>
                                <Row>
                                    <Col>
                                        {data.location}
                                    </Col>
                                </Row>
                            </Card.Title>

                            <Card.Text >
                                <Row className='mb-2 '>
                                    <Col>
                                        <strong>Date:</strong>
                                    </Col>

                                    <Col >
                                        {data.date}
                                    </Col>
                                </Row>


                                <Row className='mb-2'>
                                    <Col>
                                        <strong>Time:</strong>
                                    </Col>
                                    <Col>
                                        {data.time}
                                    </Col>
                                </Row>

                                <Row className='mb-2'>
                                    <Col><strong>Address:</strong></Col>
                                    <Col>{data.address}</Col>
                                </Row>

                                <Row className=' p-3' >
                                    <Col><strong>Description:</strong></Col>
                                </Row>
                                <Row>
                                    <Col>{data.description}</Col>
                                </Row>
                            </Card.Text>

                            <Row className='mb-2'>

                                <Button onClick={event => sendRsvp(JSON.stringify(data))} variant="" type="submit" className="btn-custom " size="lg" >
                                    RSVP
                                </Button>

                            </Row>
                            <Row className="pt-3" >
                                <Col >
                                    <Link className=""  style={{  color: "#c8b568" }} to="/events" >
                                        Back To Events
                                    </Link>
                                </Col>

                            </Row>
                        </Card.Body>
                        <Card.Footer className="queenFont" style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>TAROT ADVISING</Card.Footer>
                    </Card>


                </Col>
            </Row>

        </Container>

    );
}

export default EventComponent;