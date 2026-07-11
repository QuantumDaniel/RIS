
import PageHeader from '../layout/PageHeader';
import './StudyDetail.css';

export default function StudyDetail() {
    return (
        <div className="study-detail-layout">
            <PageHeader
                title="Study Details"
                subtitle="Study ID: STD-10521"
                icon="bi-file-earmark-image"
            />

            <div className="study-detail-container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="section-card">
                            <div className="section-header">
                                <h5>Patient Information</h5>
                            </div>
                            <div className="info-grid">
                                <div className="info-item">
                                    <label>Full Name</label>
                                    <p>John Michael Doe</p>
                                </div>
                                <div className="info-item">
                                    <label>Age</label>
                                    <p>45 years</p>
                                </div>
                                <div className="info-item">
                                    <label>Gender</label>
                                    <p>Male</p>
                                </div>
                                <div className="info-item">
                                    <label>MRN</label>
                                    <p>12345678</p>
                                </div>
                                <div className="info-item">
                                    <label>Phone</label>
                                    <p>(555) 123-4567</p>
                                </div>
                                <div className="info-item">
                                    <label>Email</label>
                                    <p>john.doe@email.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="section-card">
                            <div className="section-header">
                                <h5>Study Information</h5>
                            </div>
                            <div className="info-grid">
                                <div className="info-item">
                                    <label>Study ID</label>
                                    <p className="text-primary fw-bold">STD-10521</p>
                                </div>
                                <div className="info-item">
                                    <label>Modality</label>
                                    <p><span className="badge bg-light text-dark">CT</span></p>
                                </div>
                                <div className="info-item">
                                    <label>Body Part</label>
                                    <p>Chest</p>
                                </div>
                                <div className="info-item">
                                    <label>Ordered Date</label>
                                    <p>Today, 09:30 AM</p>
                                </div>
                                <div className="info-item">
                                    <label>Status</label>
                                    <p><span className="badge bg-warning text-dark">Pending</span></p>
                                </div>
                                <div className="info-item">
                                    <label>Referring Physician</label>
                                    <p>Dr. Michael Thompson</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-lg-8">
                        <div className="section-card">
                            <div className="section-header">
                                <h5>Exposure Parameters</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-sm mb-0">
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Value</th>
                                            <th>Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>mA</strong></td>
                                            <td>250</td>
                                            <td>mA</td>
                                        </tr>
                                        <tr>
                                            <td><strong>kVp</strong></td>
                                            <td>120</td>
                                            <td>kVp</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Exposure Time</strong></td>
                                            <td>0.5</td>
                                            <td>sec</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Distance</strong></td>
                                            <td>100</td>
                                            <td>cm</td>
                                        </tr>
                                        <tr>
                                            <td><strong>CTDI</strong></td>
                                            <td>8.5</td>
                                            <td>mGy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="section-card">
                            <div className="section-header">
                                <h5>Study Status</h5>
                            </div>
                            <div className="status-timeline">
                                <div className="timeline-item completed">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <p className="timeline-title">Study Ordered</p>
                                        <p className="timeline-time">Today, 09:30 AM</p>
                                    </div>
                                </div>

                                <div className="timeline-item completed">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <p className="timeline-title">Patient Registered</p>
                                        <p className="timeline-time">Today, 09:35 AM</p>
                                    </div>
                                </div>

                                <div className="timeline-item active">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <p className="timeline-title">In Progress</p>
                                        <p className="timeline-time">Today, 09:40 AM</p>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <p className="timeline-title">Report Review</p>
                                        <p className="timeline-time">Pending</p>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <p className="timeline-title">Completed</p>
                                        <p className="timeline-time">Pending</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-12">
                        <div className="section-card">
                            <div className="section-header">
                                <h5>Image Preview</h5>
                            </div>
                            <div className="image-preview-placeholder">
                                <i className="bi bi-image"></i>
                                <p>No images available</p>
                                <small>Images will be displayed here when available</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-12">
                        <div className="study-actions">
                            <button className="btn btn-primary btn-lg">
                                <i className="bi bi-pencil-square me-2"></i>
                                Write Report
                            </button>
                            <button className="btn btn-secondary btn-lg">
                                <i className="bi bi-eye me-2"></i>
                                View Images
                            </button>
                            <button className="btn btn-outline-secondary btn-lg">
                                <i className="bi bi-arrow-counterclockwise me-2"></i>
                                Back to Worklist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}