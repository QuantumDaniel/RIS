import './ContactModal.css';
export default function ContactModal({ help, setHelp }) {
    return (
        <div className="modal-backdrop">
            <div className="contact-modal">

                {/* Header */}
                <div className="text-center mb-4">
                    <div className="support-icon mb-3">
                        <i className="bi bi-headset"></i>
                    </div>

                    <h5 className="fw-bold mb-2">Contact Support</h5>

                    <p className="text-muted mb-0">
                        Need help with the Radiology Information System?
                        Our support team is available to assist you with technical
                        issues and system-related questions.
                    </p>
                </div>

                {/* Support Options */}
                <div className="row g-3 mb-4">

                    {/* Technical Support */}
                    <div className="col-md-6">
                        <div className="support-option h-100">
                            <div className="support-option-icon">
                                <i className="bi bi-tools"></i>
                            </div>

                            <div>
                                <h6 className="fw-semibold mb-1">
                                    Technical Support
                                </h6>

                                <a
                                    href="mailto:support@hospital.com"
                                    className="text-decoration-none"
                                >
                                    support@hospital.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <button className="btn btn-outline-secondary" onClick={() => { setHelp(false) }} >
                        <i className="bi bi-x-circle me-2"></i>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
