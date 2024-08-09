import React, { useState } from "react";
import './HomeComponents/Home.css';
import logo from'./HomeComponents/liveblip-temp.png';

export default function Home() {
  const [imei, setImei] = useState("");
  return (
    <>
    <div class = "Home">
      
      <form class = "search">
      <img alt="decoration" src ={logo} />
        <input class = "searchbar"
          type="FirstName"
          placeholder="Enter The Device IMEI"
          value={imei}
          onChange={(e) => setImei(e.target.value)}
          required 
          />
          <button class = "search-button">Go</button>
      </form>
      </div>
      </>
  )
}
