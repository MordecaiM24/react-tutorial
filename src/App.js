import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';
import Personal from './Pages/Personal';
import Friends  from './Pages/Friends';
import FriendInfo from './Pages/FriendInfo';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("mordecai");
  const [friends, setFriends] = useState([]);


  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername, friends, setFriends }}>
        <Router>

          <Navbar />

          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/personal" element={<Personal/>} />
            <Route path="/friends" element={<Friends/>} />
            <Route path="/info" element={<FriendInfo/>} />
          </Routes>

        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
