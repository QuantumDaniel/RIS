
import './Logout.css';

export default function Logout() {
    return (
        <div className="logout-container">
            <div className="logout-card">
                <div className="logout-icon">
                    <i className="bi bi-box-arrow-right"></i>
                </div>

                <h1 className="logout-title">You have been logged out</h1>
                <p className="logout-message">Your session has ended successfully</p>

                <div className="logout-info">
                    <p>Thank you for using Hospital RIS. For security purposes, your session has been terminated.</p>
                </div>

                <div className="logout-actions">
                    <a href="/" className="btn btn-primary btn-lg">
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In Again
                    </a>

                </div>

                <div className="logout-footer">
                    <p>If you did not intend to logout, <a href="#">contact support</a></p>
                </div>
            </div>

            <div className="logout-background"></div>
        </div>
    );
}