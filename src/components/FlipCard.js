import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardStyle.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate, NavLink, BrowserRouter as Router, } from "react-router-dom";


const FlipCard = ({ imageUrl, name, description,setActiveLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  function updateNav(e, navItem) {
    console.log("in the thing");
   // props.setActiveLink(navItem);
    setActiveLink(navItem);
    navigate(navItem);

  };

  return (
    <div className="car-card d-flex m-1" >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"

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

        {/* <Container
          className="card-front  card-border  text-center d-flex align-items-center"
          onClick={handleClick}
          style={{
            cursor: "pointer"
          }}
        >
          <Row>
            <Col className="">
              <h2>{name}</h2>

            </Col>
          </Row>
          <Row>

            <Col className="d-flex align-items-center justify-content-center text-center ">
              Click
            </Col>
          </Row>
          background: rgba(78, 87, 123, 0.7);
        </Container> */}

        {/* Back side */}

        <Card className="text-center cardHeader " onClick={handleClick}>
          <Card.Header className="" style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>Queen Of Wands</Card.Header>
          <Card.Body className="" style={{background :"rgba(78, 87, 123, 0.7)"}}>
            <Card.Title className="cardTitle ">{name}</Card.Title>
            <Card.Text className="card-text ">
              <div className="p-1" dangerouslySetInnerHTML={{ __html: description }} />
            </Card.Text>
            <Button variant="primary" className="btn-custom" onClick={event => updateNav(event, "/contact")}>Make An Apppointment</Button>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "#3a415c", color: "#c8b568" }}>Tarot Advising</Card.Footer>
        </Card>

        {/* <div className="card-back card-border text-center" onClick={handleClick}>
          <div>
            <p>
              <h2 className="cardTitle d-flex align-items-center justify-content-center text-center ">
                {name}
              </h2>
              <hr></hr>
            </p>
            <div className="p-1" dangerouslySetInnerHTML={{ __html: description }} />

          </div>
        </div> */}
      </ReactCardFlip>

     
    </div>
  );
};

export default FlipCard;