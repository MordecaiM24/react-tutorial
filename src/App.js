import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';
import Personal from './Pages/Personal';
import Friends  from './Pages/Friends';
import FriendInfo from './Pages/FriendInfo';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("mordecai");
  const [friends, setFriends] = useState([]);
  const queryClient = new QueryClient({});


  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ username, setUsername, friends, setFriends }}>
          <Router>

            <Navbar />

            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/personal" element={<Personal/>} />
              <Route path="/friends" element={<Friends/>} />
              <Route path="/info" element={<FriendInfo/>} />
              <Route path="/*" element={<div>Error</div>} />
            </Routes>

          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
