import React from 'react'
import "./MapComponents/Map.css"
import View from "./MapComponents/View";
import Devices from "./MapComponents/Devices";
import Dashboard from './MapComponents/Dashboard';

export default function Map() {
  return (
    <div class="App">

      <div class="Map-format">
        <div class="Devices"><Devices /></div>
        <div class="View"><View /></div>
      </div>

      <div>
        <div><Dashboard /></div>
      </div>
    </div>
  )
}
