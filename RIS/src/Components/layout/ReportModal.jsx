import './ReportModal.css';
export default function ReportModal({ report, setReport }) {
    return (
        <div className="modal-backdrop">
            <div className="report-modal">
                {/* Header */}
                <div className="text-center mb-4">
                    <div className="issue-icon mb-3">
                        <i className="bi bi-exclamation-triangle"></i>
                    </div>

                    <h5 className="fw-bold mb-2">
                        Report an Issue
                    </h5>

                    <p className="text-muted mb-0">
                        Help us improve the RIS by reporting a technical
                        problem or unexpected system behavior.
                    </p>
                </div>


                {/* Issue Category */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Issue Category
                    </label>

                    <select className="form-select">
                        <option value="">
                            Select an issue category
                        </option>

                        <option value="worklist">
                            Worklist Problem
                        </option>

                        <option value="image-viewer">
                            Image Viewer / PACS
                        </option>

                        <option value="reporting">
                            Reporting Problem
                        </option>

                        <option value="patient">
                            Patient Information
                        </option>

                        <option value="login">
                            Login / Authentication
                        </option>

                        <option value="performance">
                            System Performance
                        </option>

                        <option value="other">
                            Other
                        </option>
                    </select>
                </div>


                {/* Severity */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Severity
                    </label>

                    <select className="form-select">
                        <option value="">
                            Select severity
                        </option>

                        <option value="low">
                            Low — Minor inconvenience
                        </option>

                        <option value="medium">
                            Medium — Affecting my workflow
                        </option>

                        <option value="high">
                            High — Preventing normal work
                        </option>

                        <option value="critical">
                            Critical — Urgent clinical impact
                        </option>
                    </select>
                </div>


                {/* Study Reference */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Study / Accession Number
                        <span className="text-muted fw-normal ms-1">
                            (Optional)
                        </span>
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. ACC-2026-001245"
                    />

                    <div className="form-text">
                        Provide the study reference if the issue is related
                        to a specific examination.
                    </div>
                </div>


                {/* Description */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Describe the Issue
                    </label>

                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Describe what happened, what you expected to happen, and any error message displayed..."
                    ></textarea>
                </div>


                {/* Attachment */}
                <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Attachment
                        <span className="text-muted fw-normal ms-1">
                            (Optional)
                        </span>
                    </label>

                    <input
                        type="file"
                        className="form-control"
                        accept="image/*,.pdf"
                    />

                    <div className="form-text">
                        You may attach a screenshot or relevant document.
                    </div>
                </div>


                {/* Privacy Notice */}
                <div className="alert alert-light border d-flex gap-2 align-items-start mb-4">

                    <i className="bi bi-shield-check text-primary fs-5"></i>

                    <div className="small text-muted">
                        <strong>Patient privacy:</strong>{" "}
                        Do not include unnecessary patient-identifiable information
                        in the description or attachments.
                    </div>

                </div>


                {/* Buttons */}
                <div className="d-flex justify-content-end gap-2 submit-buttons">

                    <button
                        type="button"
                        className="btn btn-light me-2"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="btn btn-primary me-2"
                    >
                        <i className="bi bi-send me-2 ms-2"></i>
                        Submit Report
                    </button>

                </div>

                <div className="modal-footer">
                    <button className="btn btn-outline-secondary" onClick={() => { setReport(false) }} >
                        <i className="bi bi-x-circle me-2"></i>
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
};
