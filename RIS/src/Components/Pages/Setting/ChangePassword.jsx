import { useState } from 'react';
import './ChangePassword.css';

export default function ChangePassword() {
    const [viewPassword, setViewPassword] = useState('password');
    const [viewPassword2, setViewPassword2] = useState('password');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState('');
    // function to toggle the visibility of the current password field
    function toggleViewPassword() {
        setViewPassword(viewPassword === 'password' ? 'text' : 'password');
        setTimeout(() => {
            setViewPassword('password');
        }, 800);
    }
    // function to toggle the visibility of the new password and confirm password fields
    function toggleViewPassword2() {
        setViewPassword2(viewPassword2 === 'password' ? 'text' : 'password');
        setTimeout(() => {
            setViewPassword2('password');
        }, 800);
    }

    function handlePasswordChange(event) {
        setPasswordValue(event.target.value);
    }
    function handleConfirmPasswordChange(event) {
        setConfirmPasswordValue(event.target.value);
    }

    function validatePassword() {
        if (passwordValue !== confirmPasswordValue) {
            setIsPasswordValid('Passwords do not match');
        } else {
            setIsPasswordValid('');
        }
    }

    return (
        <div className="container">
            <form className="reset-password-form w-100" noValidate>
                {/* Current password */}
                <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label fw-medium">
                        Current Password
                    </label>
                    <div className="input-group">
                        <input
                            type={viewPassword}
                            className="form-control"
                            id="currentPassword"
                            placeholder="Enter current password"
                            autoComplete="current-password"
                        />
                        <button className="btn btn-outline-secondary" type="button" aria-label="Show password" onClick={() => toggleViewPassword()}>
                            <i className="bi bi-eye"></i>
                        </button>
                    </div>
                </div>

                {/* New password */}
                <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label fw-medium">
                        New Password
                    </label>
                    <div className="input-group">
                        <input
                            type={viewPassword2}
                            className="form-control"
                            id="newPassword"
                            placeholder="Enter new password"
                            autoComplete="new-password"
                            value={passwordValue}
                            onChange={handlePasswordChange}
                        />
                        <button className="btn btn-outline-secondary" type="button" aria-label="Show password" onClick={() => toggleViewPassword2()}>
                            <i className="bi bi-eye"></i>
                        </button>
                    </div>
                    <div className="form-text">
                        At least 8 characters, with uppercase, lowercase, a number and a symbol.
                    </div>
                </div>

                {/* Re-enter new password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label fw-medium">
                        Re-enter New Password
                    </label>
                    <div className="input-group">
                        <input
                            type={viewPassword2}
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Re-enter new password"
                            autoComplete="new-password"
                            value={confirmPasswordValue}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <div className="invalid-feedback">{isPasswordValid}</div>
                </div>

                {/* Actions */}
                <div className="d-flex justify-content-end gap-2 form-actions">
                    <button type="submit" className="btn p-4 btn-primary px-4" onClick={(e) => {
                        e.preventDefault();
                        validatePassword();
                    }}>
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
}       