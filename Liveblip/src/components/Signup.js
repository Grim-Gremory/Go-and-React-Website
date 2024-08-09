import React, { useState } from "react";
import axios from "axios"

const Signup = ({setActivePage}) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup email:", email, "password:", password);
    };

    function btnCLick() {
        console.log("Attempting to send POST request...");

        axios.post("http://localhost:3000/api/register", {
            first_name: FirstName,
            last_name: LastName,
            password: password,           // Ensure `password` is set correctly
            email: email,                 // Ensure `email` is set correctly
            phone: Phone
        })
            .then((res) => {
                console.log("Response received:", res);
                if (res.status === 200) {
                    setActivePage(0)
                }
            })
            .catch((err) => {
                console.error("Error during POST request:", err);
            });
    }

    return (
        <div className="App">
            <h2> Signup </h2>
            <form>
                <input
                    type="FirstName"
                    placeholder="Enter Your First Name"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <input
                    type="LastName"
                    placeholder="Enter Your Last Name"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="Phone"
                    placeholder="Enter Phone"
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="button" onClick={btnCLick}>Signup</button>
            </form>
        </div>
    );
};

export default Signup;