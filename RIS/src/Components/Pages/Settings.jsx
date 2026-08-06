
import './Settings.css';
import { Link } from 'react-router-dom';

export default function Settings() {
    return (
        <div className="settings-layout">
            <div className="settings-container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="settings-menu">
                            <a href="#" className="settings-menu-item active">
                                <i className="bi bi-person"></i>
                                Profile Settings
                            </a>
                            <a href="#" className="settings-menu-item">
                                <i className="bi bi-lock"></i>
                                Security
                            </a>

                            <a href="#" className="settings-menu-item">
                                <i className="bi bi-palette"></i>
                                Appearance
                            </a>
                            <a href="#" className="settings-menu-item">
                                <i className="bi bi-globe"></i>
                                Language & Region
                            </a>
                            <a href="#" className="settings-menu-item">
                                <i className="bi bi-building"></i>
                                Organization
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="settings-panel">
                            <div className="settings-section">
                                <h5 className="settings-title">Profile Settings</h5>
                                <p className="settings-description">Update your personal information</p>

                                <div className="profile-settings">
                                    <div className="profile-avatar-section">
                                        <div className="profile-avatar-large">
                                            <i className="bi bi-person-circle"></i>
                                        </div>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="bi bi-camera"></i>
                                            Change Avatar
                                        </button>
                                    </div>

                                    <form className="settings-form">
                                        <div className="form-group">
                                            <label className="form-label">Full Name</label>
                                            <input type="text" className="form-control" value="Dr. Sarah Johnson" />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Email Address</label>
                                            <input type="email" className="form-control" value="sarah.johnson@hospital.com" />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input type="tel" className="form-control" value="+1 (555) 123-4567" />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Specialization</label>
                                            <input type="text" className="form-control" value="Radiologist" />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Department</label>
                                            <select className="form-select">
                                                <option>Radiology</option>
                                                <option>Cardiology</option>
                                                <option>Orthopedics</option>
                                            </select>
                                        </div>

                                        <button type="submit" className="btn btn-primary">
                                            <i className="bi bi-check-circle me-2"></i>
                                            Save Changes
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <hr className="settings-divider" />

                            <div className="settings-section">
                                <h5 className="settings-title">Default Preferences</h5>
                                <p className="settings-description">Set your default system preferences</p>

                                <div className="preferences-list">
                                    <div className="preference-item">
                                        <div className="preference-info">
                                            <p className="preference-label">Default Modality</p>
                                            <small>Set your preferred imaging modality</small>
                                        </div>
                                        <select className="form-select preference-select">
                                            <option>CT</option>
                                            <option>MRI</option>
                                            <option>X-Ray</option>
                                            <option>Ultrasound</option>
                                        </select>
                                    </div>

                                    <div className="preference-item">
                                        <div className="preference-info">
                                            <p className="preference-label">Items Per Page</p>
                                            <small>Number of records displayed in tables</small>
                                        </div>
                                        <select className="form-select preference-select">
                                            <option>10</option>
                                            <option>25</option>
                                            <option>50</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                    <div className="preference-item">
                                        <div className="preference-info">
                                            <p className="preference-label">Date Format</p>
                                            <small>Choose your preferred date format</small>
                                        </div>
                                        <select className="form-select preference-select">
                                            <option>MM/DD/YYYY</option>
                                            <option>DD/MM/YYYY</option>
                                            <option>YYYY-MM-DD</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <hr className="settings-divider" />

                            <div className="settings-section">
                                <h5 className="settings-title">System Information</h5>
                                <p className="settings-description">View system and version details</p>

                                <div className="system-info">
                                    <div className="info-item">
                                        <span className="info-label">Application Version:</span>
                                        <span className="info-value">1.0.0</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">System Build:</span>
                                        <span className="info-value">Build 2026.07.12</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Last Updated:</span>
                                        <span className="info-value">July 12, 2026</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Support Email:</span>
                                        <span className="info-value">support@hospital.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}