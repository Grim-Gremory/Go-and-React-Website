import axios from "axios";
import React, { useState } from "react";
import "./auth.css";

const Login = ({ loggedIn, setActivePage, setActiveHome }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);  // Add loading state

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading

        axios.post("http://localhost:3000/api/login", {
            email: email,
            password: password,
        })
        .then(res => {
            setLoading(false);  // Stop loading
            if (res.status === 200) {
                loggedIn(true);
                setActivePage(3);
                setActiveHome(0);
            }
        })
        .catch((err) => {
            setLoading(false);  // Stop loading on error
            console.error("Error during POST request:", err);
        });
    };

    return (
        <div className="App">
            <div className="Card">
                <h2>Login</h2>
                <hr />
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}  // Disable input during loading
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}  // Disable input during loading
                    />
                    <hr />
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
                {loading && <div className="loading-icon"></div>} 
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>We provide the best services to our customers, ensuring satisfaction and value.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                            <a href="#"><img src="/twitter.png" alt="Twitter" /></a>
                            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
