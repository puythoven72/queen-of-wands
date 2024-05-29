import Container from "react-bootstrap/Container";
import Splash from '../assets/images/tarotSplash.jpg'
import tarotAnimated from '../assets/images/tarotAnimated.gif'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Button, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';



function SplashPage() {


    return (
        <Container >
             <Row  className="d-flex align-items-center justify-content-center text-center">
            <Carousel>
               
                    
                <Carousel.Item>

                    <Image src={Splash} thumbnail style={{ width: '50rem' }} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                
                <Carousel.Item>

                <Image src={Splash} thumbnail style={{ width: '50rem' }} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Image src={Splash} thumbnail style={{ width: '50rem' }} />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Row>
        </Container>

    );
}
export default SplashPage