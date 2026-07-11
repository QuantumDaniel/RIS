
import PageHeader from '../layout/PageHeader';
import './ReportEditor.css';

export default function ReportEditor() {
    return (
        <div className="report-editor-layout">
            <PageHeader
                title="Report Editor"
                subtitle="Study ID: STD-10521 - John Michael Doe"
                icon="bi-pencil-square"
            />

            <div className="report-editor-container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="section-card sticky-card">
                            <div className="section-header">
                                <h5>Patient Summary</h5>
                            </div>
                            <div className="summary-content">
                                <div className="summary-item">
                                    <label>Name</label>
                                    <p>John Michael Doe</p>
                                </div>
                                <div className="summary-item">
                                    <label>Age / Gender</label>
                                    <p>45 / Male</p>
                                </div>
                                <div className="summary-item">
                                    <label>MRN</label>
                                    <p>12345678</p>
                                </div>
                                <div className="summary-item">
                                    <label>Examination</label>
                                    <p>Chest CT</p>
                                </div>
                                <div className="summary-item">
                                    <label>Ordered By</label>
                                    <p>Dr. Michael Thompson</p>
                                </div>
                                <div className="summary-item">
                                    <label>Clinical History</label>
                                    <p>Shortness of breath and cough</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="section-card">
                            <div className="section-header">
                                <h5>Study Summary</h5>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="modality" className="form-label">Modality</label>
                                    <input
                                        type="text"
                                        id="modality"
                                        className="form-control"
                                        value="CT - Chest"
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bodypart" className="form-label">Body Part</label>
                                    <input
                                        type="text"
                                        id="bodypart"
                                        className="form-control"
                                        value="Thorax"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="section-card mt-4">
                            <div className="section-header">
                                <h5>Findings</h5>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="findings" className="form-label">Clinical Findings</label>
                                    <textarea
                                        id="findings"
                                        className="form-control findings-textarea"
                                        placeholder="Enter findings here..."
                                        rows="6"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="section-card mt-4">
                            <div className="section-header">
                                <h5>Impression</h5>
                            </div>
                            <div className="form-section">
                                <div className="form-group">
                                    <label htmlFor="impression" className="form-label">Clinical Impression</label>
                                    <textarea
                                        id="impression"
                                        className="form-control impression-textarea"
                                        placeholder="Enter impression here..."
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="report-actions mt-4">
                            <button className="btn btn-primary btn-lg">
                                <i className="bi bi-cloud-check me-2"></i>
                                Save Draft
                            </button>
                            <button className="btn btn-success btn-lg">
                                <i className="bi bi-check-circle me-2"></i>
                                Finalize Report
                            </button>
                            <button className="btn btn-outline-secondary btn-lg">
                                <i className="bi bi-x-circle me-2"></i>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}