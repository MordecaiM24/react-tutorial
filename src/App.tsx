import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Navbar } from "./Pages/Navbar";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
