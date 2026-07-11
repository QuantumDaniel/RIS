

import { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../layout/PageHeader';
import './Dashboard.css';

export default function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem("token");
            const response = axios.get("http://localhost:500/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setUser(response.data)


        }
        getUser();

    }, [])


    return (
        <div className="dashboard-layout">
            <PageHeader
                title="Dashboard"
                subtitle="Welcome back, Dr. Smith"
                icon="bi-speedometer2"
            />

            <div className="dashboard-container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon pending">
                                <i className="bi bi-hourglass-split"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Pending Studies</p>
                                <p className="stat-value">24</p>
                                <span className="stat-change">+3 today</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon in-progress">
                                <i className="bi bi-play-circle"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">In Progress</p>
                                <p className="stat-value">12</p>
                                <span className="stat-change">-2 since yesterday</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon reported">
                                <i className="bi bi-check-circle"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Reported</p>
                                <p className="stat-value">156</p>
                                <span className="stat-change">Today</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon total">
                                <i className="bi bi-file-earmark-image"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Total Studies</p>
                                <p className="stat-value">4,281</p>
                                <span className="stat-change">This month</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-lg-8">
                        <div className="card dashboard-card">
                            <div className="card-header">
                                <h5 className="mb-0">Recent Studies</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Study ID</th>
                                            <th>Patient</th>
                                            <th>Modality</th>
                                            <th>Body Part</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-row-hover">
                                            <td><strong>STD-001</strong></td>
                                            <td>John Doe</td>
                                            <td><span className="badge bg-light text-dark">CT</span></td>
                                            <td>Chest</td>
                                            <td><span className="badge bg-success">Reported</span></td>
                                            <td>Today, 10:30 AM</td>
                                        </tr>
                                        <tr className="table-row-hover">
                                            <td><strong>STD-002</strong></td>
                                            <td>Jane Smith</td>
                                            <td><span className="badge bg-light text-dark">MRI</span></td>
                                            <td>Brain</td>
                                            <td><span className="badge bg-warning">In Progress</span></td>
                                            <td>Today, 09:15 AM</td>
                                        </tr>
                                        <tr className="table-row-hover">
                                            <td><strong>STD-003</strong></td>
                                            <td>Michael Brown</td>
                                            <td><span className="badge bg-light text-dark">XR</span></td>
                                            <td>Abdomen</td>
                                            <td><span className="badge bg-info">Pending</span></td>
                                            <td>Today, 08:45 AM</td>
                                        </tr>
                                        <tr className="table-row-hover">
                                            <td><strong>STD-004</strong></td>
                                            <td>Sarah Johnson</td>
                                            <td><span className="badge bg-light text-dark">US</span></td>
                                            <td>Pelvis</td>
                                            <td><span className="badge bg-success">Reported</span></td>
                                            <td>Yesterday, 04:20 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card dashboard-card">
                            <div className="card-header">
                                <h5 className="mb-0">Notifications</h5>
                            </div>
                            <div className="notifications-list">
                                <div className="notification-item notification-urgent">
                                    <i className="bi bi-exclamation-circle"></i>
                                    <div className="notification-content">
                                        <p className="notification-title">Critical Finding</p>
                                        <p className="notification-time">2 minutes ago</p>
                                    </div>
                                </div>

                                <div className="notification-item notification-info">
                                    <i className="bi bi-info-circle"></i>
                                    <div className="notification-content">
                                        <p className="notification-title">Study Completed</p>
                                        <p className="notification-time">15 minutes ago</p>
                                    </div>
                                </div>

                                <div className="notification-item notification-success">
                                    <i className="bi bi-check-circle"></i>
                                    <div className="notification-content">
                                        <p className="notification-title">Report Approved</p>
                                        <p className="notification-time">1 hour ago</p>
                                    </div>
                                </div>

                                <div className="notification-item notification-info">
                                    <i className="bi bi-info-circle"></i>
                                    <div className="notification-content">
                                        <p className="notification-title">New Study Added</p>
                                        <p className="notification-time">3 hours ago</p>
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