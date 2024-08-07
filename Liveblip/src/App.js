import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/"> Login </Link>
            </li>

            <li>
              <Link to="/signup"> Signup </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact="true" path="/" element={<Login />}>
          </Route>
          <Route exact="true" path="/signup" element={<Signup />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
