import './Card.css';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Card = () => {
  const height = 10;
  const expanded = height + 2.5;
  
  const [showMore, setShowMore] = useState(false);
  const [cardHeight, setCardHeight] = useState(`${height}rem`);

  useEffect(() => {
      if (showMore) {
        setCardHeight(`${expanded}rem`);
      } else {
        setCardHeight(`${height}rem`);
      }
  }, [showMore]);

  const showMoreBtn = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card" style={{ height: cardHeight}}>
      <div className="card-top"></div>
      {showMore ? (
        <div className="card-bottom expanded">
          <ArrowUpCircleIcon className="icon" onClick={showMoreBtn} />
        </div>
      ) : (
        <div className="card-bottom">
          <ArrowDownCircleIcon className="icon" onClick={showMoreBtn} />
        </div>   
      )}
    </div>
  )
};

export default Card;