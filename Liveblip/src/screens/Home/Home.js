import React, { useState } from "react";
import "./HomeComponents/Home.css";

export default function Home() {
    const [imei, setImei] = useState("");
    return (
        <div class="Home">
            <form class="search">
                <img alt="decoration" src="/logo-dark.png" />

                <input
                    class="searchbar"
                    type="text"
                    placeholder="Enter The Device IMEI"
                    value={imei}
                    onChange={(e) => setImei(e.target.value)}
                    required
                />
                <button class="search-button">
                    <img alt="Search" src="/search.png" />
                </button>
            </form>
        </div>
    );
}
