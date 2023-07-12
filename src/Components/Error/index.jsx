import './index.css';
import { Link } from 'react-router-dom';

function Error({code="404", message="Oups! La page que vous demandez n'existe pas."}) {

    return (
        <div className="error">
            <h1 className="h1-Title">{code}</h1>
            <h2 className="h2-Title">{message}</h2>
            <Link to="/" className='linkError'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error
