import "./App.css";
import { useCount } from "./components/useCount.js"

function App() {
  const { count, increase, decrease, reset } = useCount(60);


  return (
    <div className="App"> 
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <h1>{count}</h1>
    </div>
  );
}

export default App;