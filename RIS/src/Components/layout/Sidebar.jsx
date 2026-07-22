import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ isActive, setIsActive, handleClick }) {



    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h5 className="mb-0">Menu</h5>
            </div>

            <nav className="sidebar-nav">
                <Link to="" className={`sidebar-link ${isActive === 'Dashboard' ? 'active' : ''}`} onClick={() => handleClick('Dashboard')}>
                    <i className="bi bi-speedometer2"></i>
                    <span>Dashboard</span>
                </Link>

                <Link to="worklist" className={`sidebar-link ${isActive === 'Worklist' ? 'active' : ''}`} onClick={() => handleClick('Worklist')}>
                    <i className="bi bi-list-ul"></i>
                    <span>Worklist</span>
                </Link>

                <Link to="studies" className={`sidebar-link ${isActive === 'Studies' ? 'active' : ''}`} onClick={() => handleClick('Studies')}>
                    <i className="bi bi-files"></i>
                    <span>Studies</span>
                </Link>

                <Link to="reports" className={`sidebar-link ${isActive === 'Reports' ? 'active' : ''}`} onClick={() => handleClick('Reports')}>
                    <i className="bi bi-pencil-square"></i>
                    <span>Reports</span>
                </Link>

                <Link to="patient-registration" className={`sidebar-link ${isActive === 'Patient Registration' ? 'active' : ''}`} onClick={() => handleClick('Patient Registration')}>
                    <i className="bi bi-person-plus"></i>
                    <span>Patient Registration</span>
                </Link>

                <hr className="my-3" />

                <Link to="statistics" className={`sidebar-link ${isActive === 'Statistics' ? 'active' : ''}`} onClick={() => handleClick('Statistics')}>
                    <i className="bi bi-bar-chart"></i>
                    <span>Statistics</span>
                </Link>

                <Link to="settings" className={`sidebar-link ${isActive === 'Settings' ? 'active' : ''}`} onClick={() => handleClick('Settings')}>
                    <i className="bi bi-gear"></i>
                    <span>Settings</span>
                </Link>

                <Link to="notification" className={`sidebar-link ${isActive === 'Notification' ? 'active' : ''}`} onClick={() => handleClick('Notification')}>
                    <i className="bi bi-bell"></i>
                    <span>Notification</span>
                </Link>

                <Link to="logout-modal" className={`sidebar-link ${isActive === 'Logout' ? 'active' : ''}`} onClick={() => handleClick('Logout')}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                </Link>
            </nav>
        </aside>
    );
}