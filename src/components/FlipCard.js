import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardStyle.css";
import { Button, Card } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import logo from '../assets/images/logo.png'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from "react-bootstrap";

const FlipCard = ({ name, description, setActiveLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  function updateNav(e, navItem) {

    setActiveLink(navItem);
    navigate(navItem);

  };

  return (
    <div className="car-card text-center "    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        
      >
        {/* Front side*/}
        <Container
          className="card-front "
          onClick={handleClick}
          style={{
            cursor: "pointer"
        
          }}
        >
          <Row className="pt-3">
            <Col >
              <Image fluid src={logo} className=""></Image>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col >
              <h2>{name}</h2>
            </Col>
          </Row>
          <Row  >
            <Col className="pt-2">
              <span>(CLICK CARD FOR DETAILS)</span>
            </Col>
          </Row>
        </Container>

        {/* Back side */}

        <Card onClick={handleClick}>
          <Card.Header className="queenFont" style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>QUEEN OF WANDS</Card.Header>
          <Card.Body style={{ background: "rgba(78, 87, 123, 0.7)" }}>
            <Card.Title className=" cardTitle">{name}</Card.Title>
            <Card.Text >
              <span  dangerouslySetInnerHTML={{ __html: description }} />
            </Card.Text>
            <Button variant="primary" className="btn-custom" onClick={event => updateNav(event, "/contact")}>MAKE AN APPOINTMENT</Button>
          </Card.Body>
          <Card.Footer className="queenFont" style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>TAROT ADVISING</Card.Footer>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;