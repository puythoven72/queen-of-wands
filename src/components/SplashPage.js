import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import '../App.css';

function SplashPage(props) {
    function updateNav(e, navItem) {
        props.setActiveLink(navItem);

    };
    return (
        <Container className="splashContainer ">
            <Row className="d-flex align-items-center justify-content-center text-center pt-2">
                <Col>
                    <h1 className="splashTitle  d-flex justify-content-center text-center" >
                        QUEEN OF WANDS TAROT ADVISING
                    </h1>
                </Col>
            </Row>


            <Row >
                <Col className="splashTextLoc">
                    <Row className="text-center">
                        <Col>
                            <Link to="/services" className="splashFont" onClick={event => updateNav(event, "/services")}>SERVICES</Link>
                        </Col>

                    </Row>
                    <Row className=" text-center">
                        <Col>
                            <Link to="/about" className="splashFont" onClick={event => updateNav(event, "/about")}>ABOUT</Link>
                        </Col>

                    </Row>
                    <Row className="  text-center">
                        <Col>
                            <Link to="/events" className="splashFont" onClick={event => updateNav(event, "/events")}>EVENTS</Link>
                        </Col>

                    </Row>
                    <Row className="text-center pb-2">
                        <Col >

                            <Link to="/contact" className="splashFont" onClick={event => updateNav(event, "/contact")}>CONTACT</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

}
export default SplashPage;
