
import './Statistics.css';

export default function Statistics() {
    return (
        <div className="statistics-layout">


            <div className="statistics-container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon primary">
                                <i className="bi bi-file-earmark-image"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Total Studies</p>
                                <p className="stat-value">12,847</p>
                                <p className="stat-change">+8.5% this month</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon success">
                                <i className="bi bi-check-circle"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Completed</p>
                                <p className="stat-value">11,248</p>
                                <p className="stat-change">87.5% completion rate</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon warning">
                                <i className="bi bi-hourglass-split"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Pending</p>
                                <p className="stat-value">1,599</p>
                                <p className="stat-change">-2.3% from yesterday</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="stat-card">
                            <div className="stat-icon info">
                                <i className="bi bi-clock-history"></i>
                            </div>
                            <div className="stat-content">
                                <p className="stat-label">Avg. TAT</p>
                                <p className="stat-value">2h 15m</p>
                                <p className="stat-change">Target: 2h 30m</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-lg-6">
                        <div className="chart-card">
                            <div className="chart-header">
                                <h5>Studies by Modality</h5>
                            </div>
                            <div className="chart-content">
                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">CT</span>
                                        <span className="chart-percent">35%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '35%', backgroundColor: '#0d6efd' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">MRI</span>
                                        <span className="chart-percent">28%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '28%', backgroundColor: '#198754' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">X-Ray</span>
                                        <span className="chart-percent">22%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '22%', backgroundColor: '#ffc107' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">Ultrasound</span>
                                        <span className="chart-percent">15%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '15%', backgroundColor: '#0dcaf0' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="chart-card">
                            <div className="chart-header">
                                <h5>Studies by Status</h5>
                            </div>
                            <div className="chart-content">
                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">Reported</span>
                                        <span className="chart-percent">87.5%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '87.5%', backgroundColor: '#198754' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">In Progress</span>
                                        <span className="chart-percent">8.2%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '8.2%', backgroundColor: '#0dcaf0' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="chart-item">
                                    <div className="chart-label">
                                        <span className="chart-name">Pending</span>
                                        <span className="chart-percent">4.3%</span>
                                    </div>
                                    <div className="progress" style={{ height: '24px' }}>
                                        <div
                                            className="progress-bar"
                                            style={{ width: '4.3%', backgroundColor: '#ffc107' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-lg-6">
                        <div className="summary-card">
                            <div className="summary-header">
                                <h5>Modality Summary</h5>
                            </div>
                            <div className="summary-table">
                                <div className="summary-row">
                                    <span className="summary-label">CT</span>
                                    <span className="summary-stat">4,496</span>
                                </div>
                                <div className="summary-row">
                                    <span className="summary-label">MRI</span>
                                    <span className="summary-stat">3,597</span>
                                </div>
                                <div className="summary-row">
                                    <span className="summary-label">X-Ray</span>
                                    <span className="summary-stat">2,826</span>
                                </div>
                                <div className="summary-row">
                                    <span className="summary-label">Ultrasound</span>
                                    <span className="summary-stat">1,928</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="summary-card">
                            <div className="summary-header">
                                <h5>Top Referring Physicians</h5>
                            </div>
                            <div className="summary-table">
                                <div className="summary-row">
                                    <span className="summary-label">Dr. Michael Thompson</span>
                                    <span className="summary-stat">324</span>
                                </div>
                                <div className="summary-row">
                                    <span className="summary-label">Dr. Sarah Williams</span>
                                    <span className="summary-stat">298</span>
                                </div>
                                <div className="summary-row">
                                    <span className="summary-label">Dr. James Anderson</span>
                                    <span className="summary-stat">276</span>
                                </div>
                                <div className="summary-row">
                                    <span className="summary-label">Dr. Maria Garcia</span>
                                    <span className="summary-stat">245</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}