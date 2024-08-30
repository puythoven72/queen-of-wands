import Cards from './MultipleFlipCards';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function ServicesComponent(props) {

   return (
      <Container >

         <Row className="mt-2">
            <Col >
               <h1 className="splashTitle  d-flex align-items-center justify-content-center text-center">
                  QUEEN OF WANDS TAROT SERVICES
               </h1>
            </Col>
         </Row>
         <Row className="mt-2 ">

            <Cards activeLink={props.activeLink} setActiveLink={props.setActiveLink}/>
         </Row>
      </Container>

   );

}

export default ServicesComponent;