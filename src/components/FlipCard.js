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
          className="card-front d-flex align-items-center justify-content-center text-center card-border"
          onClick={handleClick}
          style={{
            cursor: "pointer"
          }}
        >
          <div className="d-flex align-items-center justify-content-center text-center ">
            <h2>{name}</h2>
          </div>


          {/* <Image src={tarotback}  /> */}
        </div>

        {/* Back side */}
        <div className="card-back card-border" onClick={handleClick}>
          <div>
            <p>
              <h2 className="cardTitle d-flex align-items-center justify-content-center text-center">
                {name}
                
              </h2>
              <hr></hr>
            </p>
            <div className="p-1" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </ReactCardFlip>


    </div>
  );
};

export default FlipCard;