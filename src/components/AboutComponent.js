
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image';
import StringUtility from './utility/StringUtility';
import about from "../assets/images/about.jpg"
import "../App.css";



function AboutComponent() {

    return (


        <Container  >

            <Row className="mt-2">
                <Col >
                    <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center mb-3">
                        ABOUT QUEEN OF WANDS TAROT ADVISING
                    </h1>
                </Col>
            </Row>


            <div style={{ borderRadius: '15px', border: '1px solid black' }} className="aboutText mt-3 p-3">
                <Row>
                    <Col className="d-flex align-items-center justify-content-center text-center  " sm={1} md={6} lg={6} >
                        <Image src={about} roundedCircle
                            width="75%"
                            className="aboutImage"
                            alt="Image of the queen of wands"
                        />
                    </Col>


                    <Col className="text-center p-3  d-flex align-items-center">
                        <span className="p-1" dangerouslySetInnerHTML={{ __html: StringUtility.ABOUT }} />
                    </Col>
                </Row>
            </div>

        </Container>

    );
}

export default AboutComponent;