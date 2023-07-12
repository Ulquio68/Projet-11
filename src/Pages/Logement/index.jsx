import { useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Error from "../../Components/Error"
import Loader from "../../Components/Loader"
import Collapse from '../../Components/Collapse';
import Rating from '../../Components/Rating';
import Carousel from '../../Components/Carousel';
import './index.css';


function Logement() {
  const [logement, setLogement] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const params = useParams();
  const { idPerso } = params;

  useEffect(() => {
    if (!idPerso) return
    
      setLoading(true)
      setError(false)
    
    async function fetchData() {
    
      try {     
        const url = '/logements.json'; 
        const response = await fetch(url)
        const data = await response.json()

        const found = data.find(logement => logement.id === idPerso);
        if(found) {
          setLogement(found)  
        } else {
          setError(true)
        }

      } catch (err) {      
        console.log(err)    
        setError(true)

      } finally {
        setLoading(false)    
      }     
    }    
      fetchData()
    
    }, [idPerso])
    
    let customHeaderStyle = {
        width: '100%'
    };
    let customArrowStyle = {
      width: '4%'
    };
    let customBoxStyle = {
      width: '40%'
    };

    if (window.innerWidth <= 375) {
      customHeaderStyle = {
        width: '100%'
      };
    
      customArrowStyle = {
        width: '8%'
      };
    
      customBoxStyle = {
        width: '90%'
      };
    }

    return (
      <div>
        {error && <Error code="402" message="Access forbidden"/>}
        {loading && <Loader />}
        {logement && 
        <div id= "bloc-page-logement">
          < Carousel logementData={logement}/>
          <div className="flex-top-page">
            <div className="descri-log">
              <h1 className='title-logement'>{logement.title}</h1>
              <h2 className='location-logement'>{logement.location}</h2>
              <div className="bloc-tags">
                {logement.tags.map((tag, index) => (
                <span key={index} className="tag-item">{tag}</span>
                ))}
              </div>
            </div>
            <div className="profil-logement">
              <div className='div-profil'>
                <h2 className='name-Propri'>{logement.host.name}</h2>
                <img src={logement.host.picture} className="pic-Propri" alt="profil pic"/>
              </div>
                < Rating logementData={logement}/>
            </div>
          </div>
          <div className="collapse-order">
            <Collapse 
              className="" 
              titre="Description" 
              texte={logement.description} 
              headerStyle = {{ ...customHeaderStyle }} 
              arrowStyle = {{ ...customArrowStyle}} 
              boxStyle = {{ ...customBoxStyle}}
              />
            <Collapse 
              className="" 
              titre="Équipements" 
              texte={logement.equipments.map((equipement, index) => <span key={index}>{equipement}<br /></span>)}
              // Les symboles <> </> sont utilisés dans React pour créer des fragments. Les fragments sont des éléments React qui vous permettent de regrouper une liste d'éléments sans ajouter d'élément supplémentaire à votre DOM.
              // Dans cet exemple, les fragments sont utilisés pour envelopper chaque équipement avec <>, ce qui permet de créer une liste d'éléments équipement sans créer de nouvel élément parent.

              headerStyle = {{ ...customHeaderStyle }} 
              arrowStyle = {{ ...customArrowStyle}} 
              boxStyle = {{ ...customBoxStyle}}/>
              {/* spread operator permet d'écraser les données des anciennes propri css */}
          </div>
        </div>
        }
      </div>
    );
}
  
  export default Logement;