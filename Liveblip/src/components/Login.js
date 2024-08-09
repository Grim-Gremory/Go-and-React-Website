import axios from "axios";
import React, { useState } from "react";

const Login = ({ loggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        //Login authentication logic

        // to do go backend post.
        axios.get("url")//post
            .then(res => {
                if (res.status === 200) {
                    loggedIn(true)
                }
            })
            .catch(err => console.log(err));

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