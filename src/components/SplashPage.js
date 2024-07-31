import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

function SplashPage(props) {
    function updateNav(e, navItem) {
        props.setActiveLink(navItem);

    };
    return (
        <Container className="splashContainer mt-5">
            <Row className="d-flex align-items-center justify-content-center text-center">
                <Col>
                    <h1 className="splashTitle  d-flex justify-content-center text-center" >
                        Queen Of Wands Tarot Advising
                    </h1>
                </Col>
            </Row>


            <Row >
                <Col className="splashTextLoc  ">
                    <Row className="text-center">
                        <Col>
                            <Link to="/services" className="splashFont" onClick={event => updateNav(event, "/services")}>Services</Link>
                        </Col>

                    </Row>
                    <Row className=" text-center">
                        <Col>
                            <Link to="/about" className="splashFont" onClick={event => updateNav(event, "/about")}>About</Link>
                        </Col>

                    </Row>
                    <Row className="  text-center">
                        <Col>
                            <Link to="/events" className="splashFont" onClick={event => updateNav(event, "/events")}>Events</Link>
                        </Col>

                    </Row>
                    <Row className="text-center pb-2">
                        <Col >

                            <Link to="/contact" className="splashFont" onClick={event => updateNav(event, "/contact")}>Contact</Link>
                        </Col>

                    </Row>

                </Col>

            </Row>






        </Container>

    );

}
export default SplashPage;
