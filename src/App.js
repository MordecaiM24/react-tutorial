import './App.css';

function App() {
  const age = 17;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over</h1> : <h1>Under</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}> THIS HAS COLOR </h1>
    
    {isGreen && <button></button>}
    </div>
  );
}



export default App;
