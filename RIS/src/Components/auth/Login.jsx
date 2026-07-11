import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

import { useState } from "react";

import './Login.css';

export default function Login() {


    const users = [
        {
            email: 'dan@gmail.com',
            password: 'Quantum'
        },
    ];
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    function updateMail(e) {
        setMail(e.target.value);
    };


    function updatePassword(e) {
        setPassword(e.target.value);
    };

    function handleLogin() {


        const user = users.find((user) => user.email === mail && user.password === password);
        if (user) {
            navigate("/dashboard");

        }
        else {
            setError(true);
        }

    }
    async function handleGoogleSuccess(credentialResponse) {

        try {
            const resonse = await axios.post("http://localhost:5000/auth/google",
                {
                    credential: credentialResponse.credential,
                }

            );

            localStorage.setItem('token', response.data.token);
            navigate('/dashboard')

        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                {error && (
                    <span className="error" style={{ display: (mail && password) ? 'none' : 'block' }}>
                        Incorrect E-mail or password, please try again!
                    </span>
                )}
                <div className="login-header">
                    <div className="hospital-logo">
                        <i className="bi bi-hospital"></i>
                    </div>
                    <h1>Hospital RIS</h1>
                    <p>Radiology Information System</p>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={mail}
                            onChange={updateMail}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={updatePassword}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                    </button>
                </form>
                <div>
                    <h2>Or</h2>

                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </div>

                <div className="login-footer">
                    <Link to="/reset-password" className="forgot-password">
                        Forgot Password?
                    </Link>
                </div>
            </div>

            <div className="login-background"></div>
        </div>
    );
}