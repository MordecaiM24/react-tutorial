import './App.css';
import {Planet} from './Planet.js';


function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];

  return (
    <div className="App">
      {
        planets.map((planet) => {
          return <Planet isGasPlanet={planet.isGasPlanet} name={planet.name}/>
        })
      }
    </div>
  );
}


export default App;
