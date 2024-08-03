
import './cardStyle.css';
import FlipCard from "./FlipCard";
import { Container, Row, Col } from 'react-bootstrap';
import StringUtility from './utility/StringUtility';





const cards = [
  
  {
    imageUrl: "../assets/images/tarotBack.png",
    name: StringUtility.SERVICE1,
    description: StringUtility.SERVICE1_DESCRIPTION,
  },
  {
    imageUrl: "../assets/images/tarotBack.png",
    name: StringUtility.SERVICE2,
    description: StringUtility.SERVICE2_DESCRIPTION,
  },
  {
    imageUrl: "../assets/images/tarotBack.png",
    name: StringUtility.SERVICE3,
    description: StringUtility.SERVICE3_DESCRIPTION,
  },
];

function MultipleFlipCards(props) {
  const contactLink = props.activeLink;
  console.log("active link is " + contactLink);
  return (


    <Container>

      <Row className='mt-2 ' >
        <h5 className='d-flex align-items-center justify-content-center cardDirection'>(Click Card For More Information)</h5>
      </Row>
      <Row className='mt-2' >
        {cards.map((cards, index) => (

          <Col className=' d-flex align-items-center justify-content-center'>
            <FlipCard
              key={index}
              imageUrl={cards.imageUrl}
              name={cards.name}
              description={cards.description}
              setActiveLink={props.setActiveLink}
           
            />

          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default MultipleFlipCards;