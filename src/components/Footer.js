import '../App.css';
import { Container, Row, Col } from "react-bootstrap";
import instagram from '../assets/images/instagram.png'
import Image from 'react-bootstrap/Image';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer  mt-5  "  >
            <Container fluid className='pt-3'>
                <Row className='d-flex align-bottom  text-center'>
                    <Col >

                        <span class="align-center">Find Me On Instagram</span> <Image fluid src={instagram}

                        />
                    </Col>


                </Row>
                <Row className='p-2'>
                    <Col className='d-flex align-items-center justify-content-center text-center'>
                        <small> <small> {`Copyright © Queen Of Wands Tarot Advising, LTD  ${year}`}</small></small>
                    </Col>
                </Row>

            </Container>

        </footer>

    );


}

export default Footer;