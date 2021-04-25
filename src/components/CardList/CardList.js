import React from 'react';

import {Card} from '../Card';
import icon_luxury from './icon-luxury.svg';
import icon_sedans from './icon-sedans.svg';
import icon_suvs from './icon-suvs.svg';
import './CardList.css';

const CardList = () => {
  return (
    <div className="CardList">
      <Card
        header="Sedans"
        cardColor="orange"
        cardParagraph={
          "Choose a sedan for its affordability and excellent fuel economy. "+
          "Ideal for cruising cruising in the city or on your next road trip."
        }
        imageSrc={icon_sedans}
      />
      <Card
        header="Suvs"
        cardColor="cyan"
        cardParagraph={
          "Take a SUV for its spacious interior, power, and versatility. "+
          "Perfect for your next family vacation and off-round adventures."
        }
        imageSrc={icon_suvs}
      />
      <Card
        header="Luxury"
        cardColor="darkCyan"
        cardParagraph={
          "Cruise in the best car brands without the bloated prices. "+
          "Enjoy the enhanced comfort of a luxury rental and arrive in style."
        }
        imageSrc={icon_luxury}
      />
    </div>
  )
}

export default CardList;