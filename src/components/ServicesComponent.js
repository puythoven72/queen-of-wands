import Cards from './MultipleFlipCards';
import { Row, Col, Button, Container } from "react-bootstrap";
function ServicesComponent() {

   return (
      <Container className="">

         <Row className="mt-5">
            <Col className="">
               <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                  Queen Of Wands Tarot Services
               </h1>
            </Col>
         </Row>
         <Row>

            <Cards />
         </Row>
      </Container>

   );

}

export default ServicesComponent;