
import './Navbar.css';

export default function Navbar({ list, search, setSearch, filtered }) {

    function getValue(e) {
        setSearch(e.target.value);
        console.log(search);

    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <a href="#" className="navbar-brand">
                        <i className="bi bi-hospital"></i>
                        <span className="brand-text">Hospital RIS</span>
                    </a>
                </div>

                <div className="navbar-center">
                    <div className="search-box">
                        <i className="bi bi-search" ></i>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search patients, studies..."
                            onChange={getValue}
                        />
                    </div>
                </div>

                <div className="navbar-right">
                    <div className="navbar-item">
                        <button className="navbar-icon-btn notifications-btn">
                            <i className="bi bi-bell"></i>
                            <span className="notification-badge">3</span>
                        </button>
                        <div className="notifications-dropdown">
                            <div className="dropdown-header">
                                <h6>Notifications</h6>
                                <a href="#" className="mark-all">Mark all as read</a>
                            </div>
                            <div className="notifications-content">
                                <div className="notification-item unread">
                                    <i className="bi bi-exclamation-circle"></i>
                                    <div className="notification-text">
                                        <p className="notification-title">Emergency trauma patient arriving</p>
                                        <small>2 minutes ago</small>
                                    </div>
                                </div>
                                <div className="notification-item unread">
                                    <i className="bi bi-info-circle"></i>
                                    <div className="notification-text">
                                        <p className="notification-title">CT machine maintenance scheduled</p>
                                        <small>1 hour ago</small>
                                    </div>
                                </div>
                                <div className="notification-item">
                                    <i className="bi bi-check-circle"></i>
                                    <div className="notification-text">
                                        <p className="notification-title">Report approved by Dr. Smith</p>
                                        <small>3 hours ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-footer">
                                <a href="#">View All Notifications</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <button className="navbar-icon-btn help-btn">
                            <i className="bi bi-question-circle"></i>
                        </button>
                        <div className="help-dropdown">
                            <div className="dropdown-header">
                                <h6>Help & Support</h6>
                            </div>
                            <div className="help-content">
                                <a href="#" className="help-item">
                                    <i className="bi bi-book"></i>
                                    <div className="help-text">
                                        <p className="help-title">User Guide</p>
                                        <small>Learn how to use RIS</small>
                                    </div>
                                </a>
                                <a href="#" className="help-item">
                                    <i className="bi bi-chat-dots"></i>
                                    <div className="help-text">
                                        <p className="help-title">Contact Support</p>
                                        <small>Get help from our team</small>
                                    </div>
                                </a>
                                <a href="#" className="help-item">
                                    <i className="bi bi-bug"></i>
                                    <div className="help-text">
                                        <p className="help-title">Report Issue</p>
                                        <small>Report a bug or problem</small>
                                    </div>
                                </a>
                                <a href="#" className="help-item">
                                    <i className="bi bi-info-circle"></i>
                                    <div className="help-text">
                                        <p className="help-title">About RIS</p>
                                        <small>Version information</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-divider"></div>

                    <div className="navbar-item dropdown">
                        <button className="navbar-profile-btn">
                            <div className="profile-avatar">
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <span className="profile-name">Dr. Sarah Johnson</span>
                            <i className="bi bi-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu">
                            <div className="profile-header">
                                <div className="profile-avatar-large">
                                    <i className="bi bi-person-circle"></i>
                                </div>
                                <div className="profile-info">
                                    <p className="profile-username">Dr. Sarah Johnson</p>
                                    <small className="profile-role">Radiologist</small>
                                </div>
                            </div>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-person"></i>
                                My Profile
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-gear"></i>
                                Settings
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-shield-check"></i>
                                Security
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-clock-history"></i>
                                Activity Log
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}