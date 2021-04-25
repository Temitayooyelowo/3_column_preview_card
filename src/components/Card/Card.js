import React from 'react';

import './Card.css';

const Card = (props) => {
  const {header, cardColor, cardParagraph, imageSrc} = {...props};

  return (
    <div className={`Card ${cardColor}`}>
      <div className="cardInfo">
        <img src={imageSrc} alt={header} />
        <h1>{header}</h1>
        <p>{cardParagraph}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default Card;