import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

const Signup = ({ setActivePage }) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);  // Add loading state

    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading

        axios.post("http://localhost:3000/api/register", {
            first_name: FirstName,
            last_name: LastName,
            email: email,
            phone: Phone,
            password: password,
        })
        .then((res) => {
            console.log("Response received:", res);
            setLoading(false);  // Stop loading
            if (res.status === 200) {
                setActivePage(0);  // Redirect to a different page
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
                <h2>Signup</h2>
                <hr />
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Enter Your First Name"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        disabled={loading}  // Disable input during loading
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        disabled={loading}  // Disable input during loading
                    />
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}  // Disable input during loading
                    />
                    <input
                        type="tel"
                        placeholder="Enter Phone"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                    <input
                        type="password"
                        placeholder="Enter confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        disabled={loading}  // Disable input during loading
                    />
                    <hr />
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Signup"}
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

export default Signup;
