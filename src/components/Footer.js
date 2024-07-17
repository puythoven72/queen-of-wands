import '../App.css';
import { Container, Row, Col } from "react-bootstrap";
import instagram from '../assets/images/instagram.png'
import Image from 'react-bootstrap/Image';

function Footer() {

    return (
        <footer className="footer border p-2 mt-auto">
            <Container>
                <Row>
                    <Col className='d-flex align-items-center justify-content-center text-center'>
                    <Image  fluid  src={instagram} 
                    
                    />
                    </Col>

                </Row>
                <Row>
                   <Col className='d-flex align-items-center justify-content-center text-center'>
                   Find Me On Instagram
                    </Col>

                </Row>

            </Container>

        </footer>

    );


}

export default Footer;