
import { Link } from 'react-router-dom';
import './ResetPassword.css';

export default function ResetPassword() {
    return (
        <div className="reset-password-container">
            <div className="reset-password-card">
                <div className="reset-password-header">
                    <div className="hospital-logo">
                        <i className="bi bi-hospital"></i>
                    </div>
                    <h1>Create New Password</h1>
                    <p>Enter your new password below</p>
                </div>

                <form className="reset-password-form">
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">New Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter new password"
                            />
                            <button type="button" className="password-toggle">
                                <i className="bi bi-eye"></i>
                            </button>
                        </div>
                        <div className="password-requirements">
                            <p className="requirement-title">Password requirements:</p>
                            <ul className="requirements-list">
                                <li className="requirement-item">
                                    <i className="bi bi-check-circle"></i>
                                    At least 8 characters
                                </li>
                                <li className="requirement-item">
                                    <i className="bi bi-check-circle"></i>
                                    One uppercase letter
                                </li>
                                <li className="requirement-item">
                                    <i className="bi bi-check-circle"></i>
                                    One lowercase letter
                                </li>
                                <li className="requirement-item">
                                    <i className="bi bi-check-circle"></i>
                                    One number
                                </li>
                                <li className="requirement-item">
                                    <i className="bi bi-check-circle"></i>
                                    One special character
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type="password"
                                id="confirm-password"
                                className="form-control"
                                placeholder="Confirm new password"
                            />
                            <button type="button" className="password-toggle">
                                <i className="bi bi-eye"></i>
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        <i className="bi bi-lock-fill me-2"></i>
                        Reset Password
                    </button>
                </form>

                <div className="reset-password-divider">
                    <span>or</span>
                </div>

                <div className="reset-password-footer">
                    <p>Remember your password?</p>
                    <Link to="/" className="back-to-login">Back to Sign In</Link>
                </div>

                <div className="reset-password-security">
                    <i className="bi bi-shield-check"></i>
                    <p>Your password will be securely encrypted and stored.</p>
                </div>
            </div>

            <div className="reset-password-background"></div>
        </div>
    );
}