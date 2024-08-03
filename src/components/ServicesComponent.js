import Cards from './MultipleFlipCards';
import { Row, Col, Container } from "react-bootstrap";


function ServicesComponent(props) {

   return (
      <Container >

         <Row className="mt-5">
            <Col >
               <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                  Queen Of Wands Tarot Services
               </h1>
            </Col>
         </Row>
         <Row className="mt-3">

            <Cards activeLink={props.activeLink} setActiveLink={props.setActiveLink}/>
         </Row>
      </Container>

   );

}

export default ServicesComponent;