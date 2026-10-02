
import './Settings.css';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';


export default function Settings() {
    const [activeMenu, setActiveMenu] = useState(() => {
        return localStorage.getItem('activeMenu')

            || 'profile-settings';
    });

    function handleMenuClick(menu) {
        setActiveMenu(menu);
        localStorage.setItem('activeMenu', menu);
    }


    return (
        <div className="settings-layout">
            <div className="settings-container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div className="settings-menu">
                            <Link onClick={() => handleMenuClick('profile-settings')} to="profile-settings" className={`settings-menu-item ${activeMenu === 'profile-settings' ? 'active' : ''}`}>
                                <i className="bi bi-person"></i>
                                Profile Settings
                            </Link>
                            <Link onClick={() => handleMenuClick('security')} to="security" className={`settings-menu-item ${activeMenu === 'security' ? 'active' : ''}`}>
                                <i className="bi bi-lock"></i>
                                Security
                            </Link>

                            <Link onClick={() => handleMenuClick('appearance')} to="appearance" className={`settings-menu-item ${activeMenu === 'appearance' ? 'active' : ''}`}>
                                <i className="bi bi-palette"></i>
                                Appearance
                            </Link>
                            <Link onClick={() => handleMenuClick('language-region')} to="language-region" className={`settings-menu-item ${activeMenu === 'language-region' ? 'active' : ''}`}>
                                <i className="bi bi-globe"></i>
                                Language & Region
                            </Link>
                            <Link onClick={() => handleMenuClick('organization')} to="organization" className={`settings-menu-item ${activeMenu === 'organization' ? 'active' : ''}`}>
                                <i className="bi bi-building"></i>
                                Organization
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <Outlet />

                    </div>
                </div>
            </div>
        </div>


    );
}