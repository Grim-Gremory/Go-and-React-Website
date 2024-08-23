import React, { useState } from "react";
import "./HomeComponents/Home.css";

export default function Home() {
    const [imei, setImei] = useState("");
    return (
        <div class="Home">
            <form class="search">

                <img alt="decoration" src="/logo-dark.png" />

                <div class="searchbar">

                    <input
                        type="text"
                        placeholder="Enter The Device IMEI"
                        value={imei}
                        onChange={(e) => setImei(e.target.value)}
                        required
                    />
                    <button class="search-button">
                        <img alt="Search" src="/search.png" />
                    </button>

                </div>

            </form>


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
                            <a href="#"><img src="/facebook.png" alt="Facebook"/></a>
                            <a href="#"><img src="/twitter.png" alt="Twitter"/></a>
                            <a href="#"><img src="/instagram.png" alt="Instagram"/></a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>

            </div>


        </div>

    );
}
