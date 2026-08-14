import './About.css';
export default function AboutModal({ about, setAbout }) {
    return (
        <div className="modal-backdrop">
            <div className="about-modal">
                <div className="about-ris-content">

                    {/* RIS Identity */}
                    <div className="text-center mb-4">

                        <div className="ris-logo mb-3">
                            <i className="bi bi-heart-pulse"></i>
                        </div>

                        <h4 className="fw-bold mb-1">
                            Radiology Information System
                        </h4>

                        <p className="text-muted mb-0">
                            RIS
                        </p>

                    </div>


                    {/* Description */}
                    <div className="about-description mb-4">

                        <p className="text-muted mb-0">
                            The Radiology Information System (RIS) is a digital platform
                            designed to support the management of radiology examinations,
                            imaging workflows, and diagnostic reporting.
                        </p>

                    </div>


                    {/* Key Capabilities */}
                    <div className="mb-4">

                        <h6 className="fw-bold mb-3">
                            <i className="bi bi-grid me-2 text-primary"></i>
                            Key Capabilities
                        </h6>

                        <div className="row g-3">

                            <div className="col-6">
                                <div className="ris-feature">
                                    <i className="bi bi-list-task"></i>
                                    <span>Worklist Management</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="ris-feature">
                                    <i className="bi bi-file-earmark-medical"></i>
                                    <span>Radiology Reporting</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="ris-feature">
                                    <i className="bi bi-images"></i>
                                    <span>Image Access</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="ris-feature">
                                    <i className="bi bi-clock-history"></i>
                                    <span>Study History</span>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* System Information */}
                    <div className="system-info mb-4">

                        <h6 className="fw-bold mb-3">
                            <i className="bi bi-info-circle me-2 text-primary"></i>
                            System Information
                        </h6>

                        <div className="info-row">
                            <span>Version</span>
                            <strong>1.0.0</strong>
                        </div>

                        <div className="info-row">
                            <span>Environment</span>
                            <strong>Production</strong>
                        </div>

                        <div className="info-row">
                            <span>Platform</span>
                            <strong>Radiology Department</strong>
                        </div>

                    </div>


                    {/* Privacy Notice */}
                    <div className="alert alert-light border d-flex align-items-start gap-2 mb-0">

                        <i className="bi bi-shield-lock text-primary fs-5"></i>

                        <div className="small text-muted">

                            <strong>Patient Confidentiality</strong>

                            <p className="mb-0 mt-1">
                                This system contains confidential clinical information.
                                Access and use are restricted to authorized personnel.
                            </p>

                        </div>

                    </div>


                    {/* Footer */}
                    <div className="text-center mt-4">

                        <small className="text-muted">
                            © 2026 Radiology Information System
                        </small>

                    </div>

                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-secondary" onClick={() => { setAbout(false) }} >
                        <i className="bi bi-x-circle me-2"></i>
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
};
