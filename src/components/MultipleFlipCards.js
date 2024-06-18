
import './cardStyle.css';
import FlipCard from "./FlipCard";
import tarotback from "../assets/images/tarotBack.png"
import { Container, Row, Col } from 'react-bootstrap';


const cars = [
  {
    imageUrl: "../assets/images/tarotBack.png",
    name: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .",
  },
  {
    imageUrl: "../assets/images/tarotBack.png",
    name: "Service 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    imageUrl: "../assets/images/tarotBack.png",
    name: "Service 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function MultipleFlipCards() {
  return (


    <Container >
      <Row className='mt-5 ' >
        {cars.map((car, index) => (

          <Col className=' d-flex align-items-center justify-content-center text-center'>
            <FlipCard
              key={index}
              imageUrl={car.imageUrl}
              name={car.name}
              description={car.description}
            />

          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default MultipleFlipCards;