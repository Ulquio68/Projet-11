import { useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom'

function Card() {
  const params = useParams();
  const { idPerso } = params;
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = '/logements.json'; 
      const response = await fetch(url);
      const data = await response.json();
      setLogements(data);
    }    
    fetchData();
  }, [idPerso]);
// idPerso en fin de useEffect = si idPerso (donc le logement au final) 
// ca recharge fetchData pour recup le bon logement
  return (
    <div className='containerCard'>
      {logements.map((logement) => (
        <Link to={`/logements/${logement.id}`} key={logement.id} className="card">
            <img
                src={logement.cover}
                className= "imgCard"
                alt="Ouvrir/fermer un collapse"
              />
            <h2 className="titreCard">{logement.title}</h2>
        </Link>
      ))}
    </div>
  );
}
    
export default Card;