
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';
import { useState } from 'react';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const [type, setType] = useState('password');
    const [confirmType, setConfirmType] = useState('password');
    const [message, setMessage] = useState('Your password will be securely encrypted and stored.');
    const [filledRequirements, setFilledRequirements] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });


    function onChange(e) {
        if (e.target.value.length >= 8) {
            setFilledRequirements((prev) => ({ ...prev, length: true }));

        } else {
            setFilledRequirements((prev) => ({ ...prev, length: false }));
        }
        if (e.target.value.match(/[A-Z]/)) {
            setFilledRequirements((prev) => ({ ...prev, uppercase: true }));
        } else {
            setFilledRequirements((prev) => ({ ...prev, uppercase: false }));
        }
        if (e.target.value.match(/[a-z]/)) {
            setFilledRequirements((prev) => ({ ...prev, lowercase: true }));
        } else {
            setFilledRequirements((prev) => ({ ...prev, lowercase: false }));
        }
        if (e.target.value.match(/[0-9]/)) {
            setFilledRequirements((prev) => ({ ...prev, number: true }));
        } else {
            setFilledRequirements((prev) => ({ ...prev, number: false }));
        }
        if (e.target.value.match(/[^A-Za-z0-9]/)) {
            setFilledRequirements((prev) => ({ ...prev, specialChar: true }));
        } else {
            setFilledRequirements((prev) => ({ ...prev, specialChar: false }));
        }
        setPassword(e.target.value);
        console.log(password);
    }

    function onChangeConfirm(e) {
        setConfirmPassword(e.target.value);
    }
    function submit() {
        if (password !== confirmPassword) {
            setMessage("Passwords do not match. Please ensure both fields are identical.");
            return;
        }
        if (!(filledRequirements.length && filledRequirements.uppercase && filledRequirements.lowercase && filledRequirements.number && filledRequirements.specialChar)) {
            setMessage("Password does not meet the required criteria. Please ensure it meets all the requirements.");
        }

        if (password === confirmPassword && filledRequirements.length && filledRequirements.uppercase && filledRequirements.lowercase && filledRequirements.number && filledRequirements.specialChar) {

            setMessage("Password reset successful! Redirecting to login page...");
            setTimeout(() => {
                navigate('/');

            }, 3000);
        }
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
        if (!showPassword) {
            setType('text');

        } else {
            setType('password');
        }
        setTimeout(() => {
            setShowPassword(false);
            setType('password');
        }, 1000);
    }

    function toggleShowConfirmPassword() {
        setShowConfirmPassword(!showConfirmPassword);
        if (!showConfirmPassword) {
            setConfirmType('text');
        } else {
            setConfirmType('password');
        }
        setTimeout(() => {
            setShowConfirmPassword(false);
            setConfirmType('password');
        }, 1000);
    }

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
                                type={type}
                                id="password"
                                className="form-control"
                                placeholder="Enter new password"
                                onChange={onChange}
                            />
                            <button type="button" className="password-toggle" onClick={toggleShowPassword}>
                                {!showPassword && <i className="bi bi-eye"></i>}
                                {showPassword && <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>
                        <div className="password-requirements">
                            <p className="requirement-title">Password requirements:</p>
                            <ul className="requirements-list">
                                <li className="requirement-item">


                                    At least 8 characters
                                    {filledRequirements.length && <i className="bi bi-check-circle-fill"></i>}
                                </li>

                                <li className="requirement-item">

                                    One uppercase letter
                                    {filledRequirements.uppercase && <i className="bi bi-check-circle-fill"></i>}
                                </li>
                                <li className="requirement-item">

                                    One lowercase letter
                                    {filledRequirements.lowercase && <i className="bi bi-check-circle-fill"></i>}
                                </li>
                                <li className="requirement-item">

                                    One number
                                    {filledRequirements.number && <i className="bi bi-check-circle-fill"></i>}
                                </li>
                                <li className="requirement-item">

                                    One special character
                                    {filledRequirements.specialChar && <i className="bi bi-check-circle-fill"></i>}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={confirmType}
                                id="confirm-password"
                                className="form-control"
                                placeholder="Confirm new password"
                                onChange={onChangeConfirm}
                            />
                            <button type="button" className="password-toggle" onClick={toggleShowConfirmPassword}>
                                {!showConfirmPassword && <i className="bi bi-eye"></i>}
                                {showConfirmPassword && <i className="bi bi-eye-slash"></i>}
                            </button>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary w-100" onClick={submit}>
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
                    <p>{message}</p>
                </div>
            </div>

            <div className="reset-password-background"></div>
        </div>
    );
}