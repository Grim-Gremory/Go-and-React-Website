import React, { useState } from 'react'

import Home from './screens/Home/Home'
import Map from './screens/Map/Map'

export default function LoggedInHandler({active}) {
    const GetActive = () => {
        if (active === 0) {
            return  <Map/>
        } else if (active === 1) {
            return <Home/>
        }
    }
  return (
    <div>
        <nav>
            {/* Add Nav Component pass setActivePage as Prop */}
            
        </nav>
        <GetActive />
    </div>
  )
}
