import './App.css';
import {User} from './User.js';

function App() {
  const users = [
    {name: "Mordecai", age: 17},
    {name: "John", age:21},
    {name: "Jane", age:30}
  ]

  return (
    <div className="App">
      {users.map((user) => {
        return <User name={user.name} age={user.age}/>
      })}
    </div>
  );
}




export default App;
