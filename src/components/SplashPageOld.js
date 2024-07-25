import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import '../App.css';
import {  Link } from "react-router-dom";


function SplashPageOld() {
    function updateNav(e,navItem) {
        document.getElementById("homeLink").classList.remove('active');
        

        document.getElementById(navItem).classList.add('active');

    };

    return (
        <Container className="">

            <Row className="mt-5">
                <Col className="">
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                        Queen Of Wands Tarot Advising
                    </h1>
                </Col>
            </Row>

            <Row className="     main    " >
                <Col className=" splashFontLocation" >

                    <Row className="">
                        <Col className="d-flex align-items-center justify-content-center text-center">
                            <Link to="/services" className="splashFont" onClick={event=>updateNav(event,"serviceLink")}>Services</Link>


                        </Col>
                    </Row  >
                    <Row className="d-flex align-items-center justify-content-center text-center">
                        <Col className="  ">
                            <Link to="/events" className="splashFont" onClick={event=>updateNav(event,"eventsLink")}>Events</Link>
                        </Col>
                    </Row>
                    <Row >
                        <Col className=" d-flex align-items-center justify-content-center text-center">
                            <Link to="/contact" className="splashFont" onClick={event=>updateNav(event,"contactLink")}>Contact</Link>
                        </Col>
                    </Row>
                    {/* <Row >
                        <Col className=" d-flex align-items-center justify-content-center text-center">
                            <Link to="/about" className="splashFont" onClick={event=>updateNav(event,"contactLink")}>About</Link>
                        </Col>
                    </Row>  */}

                </Col>

            </Row>



        </Container>

    );
}
export default SplashPageOld