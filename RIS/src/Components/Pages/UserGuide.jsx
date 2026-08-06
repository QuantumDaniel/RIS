
import "./UserGuide.css";

const features = [
    {
        icon: "bi-list-task",
        title: "Worklist",
        description:
            "View assigned imaging studies awaiting interpretation. Open a study directly from the worklist to begin reporting.",
    },
    {
        icon: "bi-file-earmark-medical",
        title: "Reporting",
        description:
            "Document radiological findings, write impressions, save drafts, and finalize reports.",
    },
    {
        icon: "bi-image",
        title: "Image Viewer",
        description:
            "Launch the PACS/Image Viewer to review radiographic images before reporting.",
    },
    {
        icon: "bi-clock-history",
        title: "Previous Studies",
        description:
            "Compare the current examination with prior imaging when available.",
    },
    {
        icon: "bi-bell",
        title: "Notifications",
        description:
            "Receive alerts for urgent examinations, report updates, and system messages.",
    },
    {
        icon: "bi-person-circle",
        title: "Profile",
        description:
            "Manage your account information and personal preferences.",
    },
];

const UserGuide = () => {
    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="guide-header mb-4">
                <h2 className="fw-bold mb-2">
                    <i className="bi bi-question-circle me-2"></i>
                    Radiologist User Guide
                </h2>

                <p className="mb-0 text-muted">
                    This guide explains how to navigate the Radiology Information System
                    (RIS) and efficiently review, interpret, and report imaging studies.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="row g-4 mb-5">
                {features.map((feature, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card feature-card h-100 shadow-sm border-0">
                            <div className="card-body">

                                <div className="feature-icon">
                                    <i className={`bi ${feature.icon}`}></i>
                                </div>

                                <h5 className="mt-3">{feature.title}</h5>

                                <p className="text-muted mb-0">
                                    {feature.description}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Workflow */}
            <div className="card shadow-sm border-0 mb-5">

                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">
                        <i className="bi bi-diagram-3 me-2"></i>
                        Typical Reporting Workflow
                    </h5>
                </div>

                <div className="card-body">

                    <div className="workflow">

                        {[
                            "Open Worklist",
                            "Select Assigned Examination",
                            "Review Patient Information",
                            "Open Images in PACS",
                            "Interpret Images",
                            "Enter Findings",
                            "Write Impression",
                            "Save Draft or Finalize Report",
                        ].map((step, index) => (
                            <div className="workflow-step" key={index}>
                                <div className="step-number">{index + 1}</div>
                                <div>{step}</div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

            {/* Best Practices */}
            <div className="alert alert-success shadow-sm mb-5">

                <h5>
                    <i className="bi bi-lightbulb me-2"></i>
                    Best Practices
                </h5>

                <ul className="mb-0">

                    <li>Verify patient identity before reviewing images.</li>

                    <li>Compare with previous examinations whenever available.</li>

                    <li>Describe findings clearly before writing the impression.</li>

                    <li>Report urgent or unexpected findings immediately.</li>

                    <li>Review all images before finalizing the report.</li>

                    <li>Maintain patient confidentiality at all times.</li>

                </ul>

            </div>

            {/* FAQ */}
            <div className="card border-0 shadow-sm">

                <div className="card-header bg-light">
                    <h5 className="mb-0">
                        <i className="bi bi-patch-question me-2"></i>
                        Frequently Asked Questions
                    </h5>
                </div>

                <div className="card-body">

                    <div className="accordion" id="guideFAQ">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1"
                                >
                                    How do I begin interpreting a study?
                                </button>
                            </h2>

                            <div
                                id="faq1"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#guideFAQ"
                            >
                                <div className="accordion-body">
                                    Open the Worklist, select the assigned examination, and launch
                                    the associated images in the PACS/Image Viewer.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                >
                                    Can I save a report before completing it?
                                </button>
                            </h2>

                            <div
                                id="faq2"
                                className="accordion-collapse collapse"
                                data-bs-parent="#guideFAQ"
                            >
                                <div className="accordion-body">
                                    Yes. Reports can be saved as drafts and completed later before
                                    final submission.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3"
                                >
                                    What should I do if images fail to load?
                                </button>
                            </h2>

                            <div
                                id="faq3"
                                className="accordion-collapse collapse"
                                data-bs-parent="#guideFAQ"
                            >
                                <div className="accordion-body">
                                    Refresh the study, verify network connectivity, or contact the
                                    system administrator if the issue persists.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default UserGuide;