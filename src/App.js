import "./App.css";
import Axios from 'axios';
import { useState, useEffect } from 'react';



function App() {
  const [excuse, setExcuse] = useState("");
  
  const fetchData = (occasion) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${occasion}`).then((res) => {
      setExcuse(res.data[0].excuse);
    })
  }

  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchData("party")}> Party </button>
      <button onClick={() => fetchData("family")}> Family </button>
      <button onClick={() => fetchData("office")}> Office </button>

      <p>{excuse}</p>

    </div>
  );
}

export default App;