import React, { useState } from 'react'

import Home from './screens/Home/Home'
import Map from './screens/Map'

export default function LoggedInHandler({active}) {
    const GetActive = () => {
        if (active === 0) {
            return <Home/>
        } else if (active === 1) {
            return <Map/>
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
