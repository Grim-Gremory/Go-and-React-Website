import React from 'react';
import "./Navbar.css";

export default function Navbar({ setActive, loggedIn, setActiveHome }) {
    const ActiveNav = () => {
        if (loggedIn) {
            return (
                <div className='Nav'>
                    <span className="pointer" onClick={() => { setActiveHome(1); setActive(3) }}><img alt="decoration" src='/logo-dark.png' /></span>
                </div>
            )
        } else {
            return (
                <div className='Nav'>

                    <span className="pointer" onClick={() => { setActiveHome(1); setActive(3) }}><img alt="decoration" src='/logo-dark.png' /></span>

                    <div class="pages">
                        <span className="pointer" onClick={() => { setActive(0) }}> Login </span>
                        <span className="pointer" onClick={() => { setActive(1) }}> Signup </span>
                    </div>

                </div>
            )
        }
    }

    return (
        <ActiveNav />
    )
}
