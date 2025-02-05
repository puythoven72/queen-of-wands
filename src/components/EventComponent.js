import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import "../App.css";
import { useLocation } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EventComponent() {

    const location = useLocation();
    const data = JSON.parse(location.state?.data);
     const navigate = useNavigate();

    function sendRsvp(data) {
        console.log(data);
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
                <Col className="mb-2" sm={1} md={6} lg={6} >
                    <Image src={process.env.PUBLIC_URL + 'assets/images/' + data.image}
                        width="100%"
                        className="aboutImage"
                        alt= {data.location + data.description} 
                    />
                </Col>

                <Col className="aboutText  " style={{ borderRadius: '15px', border: '2px solid #c8b568' }} >
                    <Row className=' p-2'>
                        <Col>
                            <strong>Date:</strong>
                        </Col>

                        <Col >
                            {data.date}
                        </Col>
                    </Row>


                    <Row className='p-2'>
                        <Col>
                            <strong>Time:</strong>
                        </Col>
                        <Col>
                            {data.time}
                        </Col>
                    </Row>

                    <Row className='p-2'>
                        <Col><strong>Address:</strong></Col>
                        <Col>{data.address}</Col>
                    </Row>

                    <Row className='p-2' >
                        <Col><strong>Description:</strong></Col>

                        <Col>{data.description}</Col>
                    </Row>

                    <Row className='p-2'>
                        
                            <Button  onClick={event => sendRsvp(JSON.stringify(data)) } variant="" type="submit" className="btn-custom " size="lg" >
                                RSVP
                            </Button>
                        
                    </Row>
                    <Row className="p-3">
                        <Col>
                            <Link className="aboutText" to="/events" >
                                Back To Events
                            </Link>
                        </Col>

                    </Row>
                </Col>
            </Row>







        </Container>

    );
}

export default EventComponent;