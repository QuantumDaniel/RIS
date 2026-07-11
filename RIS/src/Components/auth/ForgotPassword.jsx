import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

export default function ForgotPassword() {
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState(false);
    const [success, setSuccess] = useState(false);


    return (
        <div className="forgot-password-container">
            <div className="forgot-password-card">
                <div className="forgot-password-header">
                    <div className="hospital-logo">
                        <i className="bi bi-hospital"></i>
                    </div>
                    <h1>Reset Password</h1>
                    {(!success && (
                        <p>Enter your email to receive password reset instructions</p>
                    ))}
                </div>

                <form className="forgot-password-form">
                    <div className="form-group">
                        {(!success && (
                            <div>
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your registered email"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                />
                            </div>

                        ))}
                        {(success && (
                            <div className="forgot-password-info">
                                <i className="bi bi-info-circle"></i>

                                <p>Check your email for a password reset link. The link will expire in 24 hours.</p>

                            </div>
                        ))}

                    </div>

                    {(!success && <button type="submit" className="btn btn-primary w-100" onClick={(e) => {
                        e.preventDefault();
                        // Simulate sending reset link
                        setSuccess(true);
                    }}>
                        <i className="bi bi-envelope me-2"></i>
                        Send Reset Link
                    </button>
                    )}
                </form>

                <div className="forgot-password-divider">
                    <span>or</span>
                </div>

                <div className="forgot-password-footer">
                    <p>Remember your password?</p>
                    <Link to="/" className="back-to-login">Back to Sign In</Link>
                </div>

            </div>

            <div className="forgot-password-background"></div>
        </div>
    );
}