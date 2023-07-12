import React from 'react';
import './index.css';
import logoFilled from '../../Assets/star-full.svg';
import logoEmpty from '../../Assets/star-empty.svg';

function Rating({logementData}) {

  return (
    <div className='containerStar'>
      <img
        src={logementData.rating >= 1 ? logoFilled : logoEmpty}
        className="stars-Propri"
        alt="stars rate 1"
      />
      <img
        src={logementData.rating >= 2 ? logoFilled : logoEmpty}
        className="stars-Propri"
        alt="stars rate 2"
      />
      <img
        src={logementData.rating >= 3 ? logoFilled : logoEmpty}
        className="stars-Propri"
        alt="stars rate 3"
      />
      <img
        src={logementData.rating >= 4 ? logoFilled : logoEmpty}
        className="stars-Propri"
        alt="stars rate 4"
      />
      <img
        src={logementData.rating >= 5 ? logoFilled : logoEmpty}
        className="stars-Propri"
        alt="stars rate 5"
      />
    </div>
  );
}

export default Rating;