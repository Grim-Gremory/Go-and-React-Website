import React from 'react'
import "./Navbar.css"

export default function Navbar({ setActive, loggedIn, setActiveHome }) {
    const ActiveNav = () => {
        if (loggedIn) {
            return (
                <div className='Nav'>
                <img alt="decoration" src='/logo-light.png' />
                <ul>
                    <li>
                        <span className="pointer" onClick={() => { setActiveHome(1); setActive(3) }}> Home </span>
                    </li>
                    <li>
                        <span className="pointer" onClick={() => { setActive(0) }}> Login </span>
                    </li>
                    <li>
                        <span className="pointer" onClick={() => { setActive(1) }}> Signup </span>
                    </li>
                </ul>
            </div>
            )
        } else {
            return (
                <div className='Nav'>
                <img alt="decoration" src='/logo-light.png' />
                <ul>
                    <li>
                        <span className="pointer" onClick={() => { setActiveHome(1); setActive(3) }}> Home </span>
                    </li>
                    <li>
                        <span className="pointer" onClick={() => { setActive(0) }}> Login </span>
                    </li>
                    <li>
                        <span className="pointer" onClick={() => { setActive(1) }}> Signup </span>
                    </li>
                </ul>
            </div>


            )
        }
    }

    return (
        <ActiveNav />
    )
}
