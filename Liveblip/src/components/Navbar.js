import React from 'react'
import "./Navbar.css"
export default function Navbar({ setActive, loggedIn, setActiveHome }) {
    const ActiveNav = () => {
        if (loggedIn) {
            return (
                <nav>
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
                </nav>
            )
        } else {
            return (
                <nav>
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
                </nav>
            )
        }
    }

    return (
        <ActiveNav />
    )
}
