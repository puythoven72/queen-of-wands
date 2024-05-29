
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Splash from '../assets/images/tarotSplash.jpg'
function AboutComponent() {
    return (
        <>
            <Container className="baseText">
                <Row className="d-flex align-items-center justify-content-center text-center">
                    <Col>

                        {/* <Image src={Splash} rounded fluid style={{ width: '50rem', height: '25rem' }} /> */}
                        <Image fluid src='https://imageplaceholder.net/800x200/eeeeee' rounded style={{ width: '50rem' }} />
                    </Col>

                </Row>
            </Container>

            < Container style={{backgroundColor:'#eec986'}} class="border border-primary">
                <Row className="mt-5 d-flex align-items-center justify-content-center text-center " >


                    <Col className="mt-2">
                        <h3 className="title">About Me</h3>
                    </Col>
                </Row>

                <Row className="mt-5 pb-5 d-flex align-items-center justify-content-center text-center ">
                    <Col>

                        <Image fluid  rounded src='https://imageplaceholder.net/400x600/#0a30d7' />


                    </Col>
                    <Col  className="d-flex align-items-center justify-content-center text-center ">
                        <p >Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Col>
                </Row>





            </Container>

        </>

    );
}

export default AboutComponent;