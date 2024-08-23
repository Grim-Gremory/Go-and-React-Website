import React, { useState } from "react";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./screens/Home/Home";
import Navbar from "./components/Navbar";
import LoggedInHandler from "./LoggedInHandler";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const [active, setActive] = useState(0);
  const [activeHome, setActiveHome] = useState(0);

  const GetCurrentPage = () => {
    if (loggedIn) {
      return <LoggedInHandler active={activeHome} />;
    } else {
      switch (active) {
        case 0:
          return <Login loggedIn={setLogin} />;
        case 1:
          return <Signup setActivePage={setActive} />;
        default:
          return <LoggedInHandler active={activeHome} />;
      }
    }
  };

  return (
    <div class="App">
      <Navbar setActive={setActive} loggedIn={loggedIn} setActiveHome={setActiveHome} />

        <GetCurrentPage />

    </>
  );
}

export default App;
