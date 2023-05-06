import "./App.css";
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFat = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  useEffect(() => {
    fetchCatFat();
  }, [])

  return (
    <div className="App">
      <button onClick={fetchCatFat}> Generate Cat Fact </button>
      <p> {catFact} </p>
    </div>
  );
}

export default App;