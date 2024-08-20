import axios from "axios";
import React, { useState } from "react";

const Login = ({ loggedIn , setActivePage, setActiveHome}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        //Login authentication logic

        // to do go backend post.
        axios.post("http://localhost:3000/api/login", {
            password: password,           // Ensure `password` is set correctly
            email: email,                 // Ensure `email` is set correctly
        })
            .then(res => {
                if (res.status === 200) {
                    loggedIn(true)
                    setActivePage(3)
                    setActiveHome(0)
                }
            })
            .catch((err) => {
                console.error("Error during POST request:", err);
            });

    };

    return (
        <div className="App">
            <h2> Login </h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;