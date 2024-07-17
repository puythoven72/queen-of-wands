
import './cardStyle.css';
import FlipCard from "./FlipCard";
import tarotback from "../assets/images/tarotBack.png"
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

function MultipleFlipCards() {
  return (


    <Container>
      <Row className='mt-5 ' >
        {cards.map((cards, index) => (

          <Col className=' d-flex align-items-center justify-content-center'>
            <FlipCard
              key={index}
              imageUrl={cards.imageUrl}
              name={cards.name}
              description={cards.description}
            />

          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default MultipleFlipCards;