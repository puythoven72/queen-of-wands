
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

  return (

    <Container >
      {/* <Row  >
        <h5 className='d-flex align-items-center justify-content-center cardDirections'>(CLICK CARD FOR DETAILS)</h5>
      </Row> */}
      <Row className='text-center ' >
        {cards.map((cards, index) => (
          <Col key={index} className='text-center d-flex align-items-center justify-content-center py-1' >
            <FlipCard
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