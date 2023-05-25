import "./App.css";
import { Person } from "./Components/Person";

function App() {

  return (
    <div className="App"> 
      <Person 
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={false}
        friends={["jessica", "jake", "jerry", "jasmine"]}
      />
    </div> 
  );
}

export default App;