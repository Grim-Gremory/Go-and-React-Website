import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./screens/Home/Home";
import Navbar from "./components/Navbar";
import LoggedInHandler from "./LoggedInHandler";

function App() {
  const [loggedIn, setLogin] = useState(true)
  const [active, setActive] = useState(0)
  const [activeHome, setActiveHome] = useState(0)


  const SetNotLoggedActive = () => {
    if (active === 0) {
      return <Login loggedIn={setLogin}/>
    } else if (active === 1) {
      return <Signup setActivePage={setActive} />
    }

     if(activeHome === 1) {
      return <Home/>
    }
  }

  const GetCurrentPage = () => {
    if (loggedIn) {
      return < LoggedInHandler active={activeHome} />
    } else {
      return <SetNotLoggedActive />
    }
  }
  return (
    <>
    <Navbar setActive={setActive} loggedIn={loggedIn} setActiveHome = {setActiveHome}/>
      {/* <div className="App"></div> */}
        {/* <Navbar setActive={setActive} loggedIn={loggedIn}/> */}

        <GetCurrentPage />

    </>
  );
}

export default App;
