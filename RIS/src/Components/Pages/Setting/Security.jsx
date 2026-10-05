import './Security.css';
import { useState } from 'react';
import ChangePassword from './ChangePassword';

export default function Security() {
    const [change, setChange] = useState(false);
    const [buttonText, setButtonText] = useState('Change Password');
    function handleChangePassword() {
        setChange(!change);
        setButtonText(change ? 'Change Password' : 'Cancel');
    }

    return (

        <div className="security-page">

            {/* Header */}
            <div className="security-header">
                <h4>Security</h4>
                <p className="mb-0">
                    Manage your password, authentication, and account security.
                </p>
            </div>

            {/* Password */}
            <div className="card security-card shadow-sm mb-4">
                <div className="security-card-body">

                    <div className="security-title">
                        <div className="security-icon">
                            <i className="bi bi-lock"></i>
                        </div>

                        <h5>Password</h5>
                    </div>

                    <p className="security-description">
                        Keep your account secure by using a strong and unique password.
                    </p>

                    <button className="btn btn-primary change-password-btn" onClick={handleChangePassword}>
                        {buttonText}
                    </button>

                </div>

                {/*reset password*/}
                {change && <ChangePassword />}
            </div>



            {/* Two-Factor Authentication */}
            <div className="card security-card shadow-sm mb-4">
                <div className="security-card-body">

                    <div className="two-factor-card">

                        <div>
                            <div className="security-title">
                                <div className="security-icon">
                                    <i className="bi bi-shield-lock"></i>
                                </div>

                                <h5>Two-Factor Authentication</h5>
                            </div>

                            <p className="security-description mb-0">
                                Add an extra layer of security to your account when signing in.
                            </p>
                        </div>

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input security-switch"
                                type="checkbox"
                                role="switch"
                                id="twoFactorAuth"
                            />

                            <label
                                className="form-check-label ms-2"
                                htmlFor="twoFactorAuth"
                            >
                                Enable
                            </label>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );

}