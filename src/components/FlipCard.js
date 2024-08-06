import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardStyle.css";
import { Button, Card } from "react-bootstrap";
import { useNavigate, BrowserRouter as Router, } from "react-router-dom";


const FlipCard = ({ imageUrl, name, description, setActiveLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  function updateNav(e, navItem) {
    console.log("in the thing");
    setActiveLink(navItem);
    navigate(navItem);

  };

  return (
    <div className="car-card d-flex m-1" >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"

      >
        {/* Front side*/}
        <div
          className="card-front d-flex align-items-center justify-content-center text-center card-border"
          onClick={handleClick}
          style={{
            cursor: "pointer"
          }}
        >
          <div >
            <h2>{name}</h2>
          </div>

        </div>


        {/* Back side */}

        <Card className="text-center cardHeader " onClick={handleClick}>
          <Card.Header className="queenFont" style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>QUEEN OF WANDS</Card.Header>
          <Card.Body className="" style={{ background: "rgba(78, 87, 123, 0.7)" }}>
            <Card.Title className="cardTitle ">{name}</Card.Title>
            <Card.Text className="card-text ">
              <div className="" dangerouslySetInnerHTML={{ __html: description }} />
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