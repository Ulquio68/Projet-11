import logo from '../../Assets/img-home.PNG';
import './index.css';
import Image from '../../Components/Image';
import Card from "../../Components/Card"

function App() {
  return (
    <div className="app">
      <div className="App-header">
        <Image src={logo} className="App-logo" alt="Image de Presentation"/>
        <h1 className="title-image">Chez vous, partout et ailleurs</h1>
      </div>
        <Card />
    </div>
  );
}

export default App;
