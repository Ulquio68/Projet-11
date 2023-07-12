import Arrow from "../../Assets/arrow.svg";
import './index.css';
import { useState } from 'react';

function Collapse({ titre = '', texte = '', headerStyle = {}, arrowStyle = {}, boxStyle = {}}) {
  const [rotationCount, setRotationCount] = useState(0);
  const [displayText, setDisplayText] = useState(true);
  const [background, setBackground] = useState("#F6F6F6");
  const boxStyleWithBackground = { ...boxStyle, backgroundColor: background };
  
  function rotationSvg() {
    setRotationCount((rotationCount + 1) % 2); // Alterne entre 0 et 1
    setDisplayText(!displayText);
    if (background === "white") {
      setBackground("#F6F6F6")
    }
    else {
      setBackground("white")
    }
  }

  return (
    <div className="box" style={boxStyleWithBackground}>
      <h1 className="box-head" style={headerStyle}>
        {titre}
        <img
          src={Arrow}
          className={`arrow-collapse rotate-${rotationCount}`}
          style={arrowStyle}
          alt="Ouvrir/fermer un collapse"
          onClick={rotationSvg}
        />
      </h1>
      {displayText ? <p className="box-p">{texte}</p> : null}
    </div>
  );
}
  
  export default Collapse;