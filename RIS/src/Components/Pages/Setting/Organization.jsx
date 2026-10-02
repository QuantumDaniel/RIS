import './Organization.css';

export default function Organization() {
    return (
        <div className="organization-page">

            {/* Header */}
            <div className="organization-header">
                <h4>Organization</h4>
                <p>
                    Manage your hospital or healthcare organization's information and
                    system preferences.
                </p>
            </div>

            {/* Organization Information */}
            <div className="card organization-card shadow-sm mb-4">
                <div className="organization-card-body">

                    <div className="organization-title">
                        <div className="organization-icon">
                            <i className="bi bi-building"></i>
                        </div>

                        <div>
                            <h5>Organization Information</h5>
                            <p>
                                Basic information about your healthcare organization.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">

                        {/* Organization Name */}
                        <div className="col-md-6">
                            <label
                                htmlFor="organizationName"
                                className="form-label fw-semibold"
                            >
                                Organization Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="organizationName"
                                placeholder="Enter organization name"
                            />
                        </div>

                        {/* Organization Type */}
                        <div className="col-md-6">
                            <label
                                htmlFor="organizationType"
                                className="form-label fw-semibold"
                            >
                                Organization Type
                            </label>

                            <select
                                id="organizationType"
                                className="form-select"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select organization type
                                </option>

                                <option value="hospital">
                                    Hospital
                                </option>

                                <option value="clinic">
                                    Clinic
                                </option>

                                <option value="diagnostic-center">
                                    Diagnostic Center
                                </option>

                                <option value="imaging-center">
                                    Imaging Center
                                </option>
                            </select>
                        </div>

                        {/* Registration Number */}
                        <div className="col-md-6">
                            <label
                                htmlFor="registrationNumber"
                                className="form-label fw-semibold"
                            >
                                Registration Number
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="registrationNumber"
                                placeholder="Enter registration number"
                            />
                        </div>

                        {/* Email */}
                        <div className="col-md-6">
                            <label
                                htmlFor="organizationEmail"
                                className="form-label fw-semibold"
                            >
                                Official Email
                            </label>

                            <input
                                type="email"
                                className="form-control"
                                id="organizationEmail"
                                placeholder="example@hospital.com"
                            />
                        </div>

                    </div>

                </div>
            </div>

            {/* Contact Information */}
            <div className="card organization-card shadow-sm mb-4">
                <div className="organization-card-body">

                    <div className="organization-title">
                        <div className="organization-icon">
                            <i className="bi bi-telephone"></i>
                        </div>

                        <div>
                            <h5>Contact Information</h5>
                            <p>
                                Contact details used by the organization.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">

                        {/* Phone */}
                        <div className="col-md-6">
                            <label
                                htmlFor="organizationPhone"
                                className="form-label fw-semibold"
                            >
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                className="form-control"
                                id="organizationPhone"
                                placeholder="+234 800 000 0000"
                            />
                        </div>

                        {/* Website */}
                        <div className="col-md-6">
                            <label
                                htmlFor="organizationWebsite"
                                className="form-label fw-semibold"
                            >
                                Website
                            </label>

                            <input
                                type="url"
                                className="form-control"
                                id="organizationWebsite"
                                placeholder="https://www.example.com"
                            />
                        </div>

                        {/* Address */}
                        <div className="col-12">
                            <label
                                htmlFor="organizationAddress"
                                className="form-label fw-semibold"
                            >
                                Address
                            </label>

                            <textarea
                                className="form-control"
                                id="organizationAddress"
                                rows="3"
                                placeholder="Enter organization address"
                            ></textarea>
                        </div>

                        {/* City */}
                        <div className="col-md-4">
                            <label
                                htmlFor="city"
                                className="form-label fw-semibold"
                            >
                                City
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="Enter city"
                            />
                        </div>

                        {/* State */}
                        <div className="col-md-4">
                            <label
                                htmlFor="state"
                                className="form-label fw-semibold"
                            >
                                State
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="Enter state"
                            />
                        </div>

                        {/* Country */}
                        <div className="col-md-4">
                            <label
                                htmlFor="country"
                                className="form-label fw-semibold"
                            >
                                Country
                            </label>

                            <select
                                id="country"
                                className="form-select"
                                defaultValue="Nigeria"
                            >
                                <option value="Nigeria">Nigeria</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Egypt">Egypt</option>
                                <option value="South Africa">South Africa</option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>

            {/* Radiology Department */}
            <div className="card organization-card shadow-sm mb-4">
                <div className="organization-card-body">

                    <div className="organization-title">
                        <div className="organization-icon">
                            <i className="bi bi-hospital"></i>
                        </div>

                        <div>
                            <h5>Radiology Department</h5>
                            <p>
                                Configure information specific to the radiology department.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">

                        {/* Department Name */}
                        <div className="col-md-6">
                            <label
                                htmlFor="departmentName"
                                className="form-label fw-semibold"
                            >
                                Department Name
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="departmentName"
                                defaultValue="Radiology Department"
                            />
                        </div>

                        {/* Department Code */}
                        <div className="col-md-6">
                            <label
                                htmlFor="departmentCode"
                                className="form-label fw-semibold"
                            >
                                Department Code
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="departmentCode"
                                placeholder="e.g. RAD-001"
                            />
                        </div>

                        {/* Modalities */}
                        <div className="col-12">
                            <label className="form-label fw-semibold">
                                Available Modalities
                            </label>

                            <div className="row g-3">

                                <div className="col-md-3 col-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="xray"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="xray"
                                        >
                                            X-Ray
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-3 col-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="ultrasound"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ultrasound"
                                        >
                                            Ultrasound
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-3 col-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="ct"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="ct"
                                        >
                                            CT Scan
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-3 col-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="mri"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="mri"
                                        >
                                            MRI
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* System Settings */}
            <div className="card organization-card shadow-sm mb-4">
                <div className="organization-card-body">

                    <div className="organization-title">
                        <div className="organization-icon">
                            <i className="bi bi-gear"></i>
                        </div>

                        <div>
                            <h5>System Settings</h5>
                            <p>
                                Configure organization-wide system preferences.
                            </p>
                        </div>
                    </div>

                    {/* Auto Assignment */}
                    <div className="organization-setting d-flex justify-content-between align-items-center py-3 border-bottom">
                        <div>
                            <h6>Automatic Study Assignment</h6>
                            <p>
                                Automatically assign new imaging studies to available
                                radiologists.
                            </p>
                        </div>

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input organization-switch"
                                type="checkbox"
                                role="switch"
                                id="autoAssignment"
                            />
                        </div>
                    </div>

                    {/* Email Notifications */}
                    <div className="organization-setting d-flex justify-content-between align-items-center py-3">
                        <div>
                            <h6>Email Notifications</h6>
                            <p>
                                Send organization notifications through email.
                            </p>
                        </div>

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input organization-switch"
                                type="checkbox"
                                role="switch"
                                id="emailNotifications"
                                defaultChecked
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Save Button */}
            <div className="d-flex justify-content-end gap-2 mt-4 mb-4">
                <button className="btn btn-light">
                    Cancel
                </button>

                <button className="btn btn-primary px-4">
                    <i className="bi bi-check2 me-2"></i>
                    Save Changes
                </button>
            </div>

        </div>

    );
}       