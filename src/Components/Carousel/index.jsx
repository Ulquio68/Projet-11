import React, { useState } from 'react';
import './index.css';
import logo from '../../Assets/arrow.svg';

const Carousel = ({logementData}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // if (!logementData) {
  //   return <div>Loading...</div>;
  // }
  // // obligé de if (!logement) sinon le temps de charger les données, ca donne une erreur

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === logementData.pictures.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? logementData.pictures.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <img className="slide" src={logementData.pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <img onClick={prevSlide} className="previous" src={logo} alt= "previous" />
      <img onClick={nextSlide} className="next" src={logo} alt= "next" />
    </div>
  );
};

export default Carousel;