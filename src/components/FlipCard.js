import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardStyle.css";
import Image from 'react-bootstrap/Image';
import tarotback from "../assets/images/tarotBack.png"
import { Container, Row, Col } from 'react-bootstrap';
const FlipCard = ({ imageUrl, name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="car-card" >


      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"

      >
        {/* Front side */}
        <div
          className="card-front"
          onClick={handleClick}
          style={{
            cursor: "pointer"
          }}
        >
          <Image src={tarotback}  />
        </div>
        {/* Back side */}


        <div className="card-back " onClick={handleClick}>
          <div>
            <h2>{name}</h2>

            <p>{description}</p>

          </div>


        </div>
      </ReactCardFlip>


    </div>
  );
};

export default FlipCard;