
import PageHeader from '../layout/PageHeader';
import './PatientRegistration.css';

export default function PatientRegistration() {
    return (
        <div className="patient-registration-layout">
            <PageHeader
                title="Patient Registration"
                subtitle="Add new patient to the system"
                icon="bi-person-plus"
            />

            <div className="patient-registration-container">
                <div className="registration-form-wrapper">
                    <div className="section-card">
                        <div className="section-header">
                            <h5>Personal Information</h5>
                        </div>

                        <form className="registration-form">
                            <div className="form-section">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fullName" className="form-label">Full Name *</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                className="form-control"
                                                placeholder="John Michael Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="mrn" className="form-label">MRN (Medical Record Number) *</label>
                                            <input
                                                type="text"
                                                id="mrn"
                                                className="form-control"
                                                placeholder="Auto-generated if empty"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="age" className="form-label">Age *</label>
                                            <input
                                                type="number"
                                                id="age"
                                                className="form-control"
                                                placeholder="45"
                                                min="0"
                                                max="150"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="gender" className="form-label">Gender *</label>
                                            <select id="gender" className="form-select">
                                                <option value="">Select gender</option>
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                                <option value="O">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input
                                                type="date"
                                                id="dob"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="form-control"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="john.doe@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control"
                                                placeholder="123 Main Street, Apt 4B"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="section-card mt-4">
                        <div className="section-header">
                            <h5>Clinical Information</h5>
                        </div>

                        <form className="registration-form">
                            <div className="form-section">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="referringPhysician" className="form-label">Referring Physician *</label>
                                            <input
                                                type="text"
                                                id="referringPhysician"
                                                className="form-control"
                                                placeholder="Dr. Michael Thompson"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="department" className="form-label">Department</label>
                                            <input
                                                type="text"
                                                id="department"
                                                className="form-control"
                                                placeholder="Cardiology"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="examination" className="form-label">Examination Type *</label>
                                            <select id="examination" className="form-select">
                                                <option value="">Select examination</option>
                                                <option value="Chest">Chest</option>
                                                <option value="Abdomen">Abdomen</option>
                                                <option value="Brain">Brain</option>
                                                <option value="Spine">Spine</option>
                                                <option value="Pelvis">Pelvis</option>
                                                <option value="Extremity">Extremity</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="modality" className="form-label">Modality *</label>
                                            <select id="modality" className="form-select">
                                                <option value="">Select modality</option>
                                                <option value="CT">CT (Computed Tomography)</option>
                                                <option value="MRI">MRI (Magnetic Resonance)</option>
                                                <option value="XR">X-Ray</option>
                                                <option value="US">Ultrasound</option>
                                                <option value="PET">PET (Positron Emission)</option>
                                                <option value="NM">Nuclear Medicine</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="clinicalHistory" className="form-label">Clinical History / Reason for Exam</label>
                                            <textarea
                                                id="clinicalHistory"
                                                className="form-control"
                                                placeholder="Enter clinical history..."
                                                rows="3"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    id="priority"
                                                    className="form-check-input"
                                                />
                                                <label htmlFor="priority" className="form-check-label">
                                                    Mark as Priority
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="registration-actions mt-4">
                        <button className="btn btn-primary btn-lg">
                            <i className="bi bi-check-circle me-2"></i>
                            Register Patient
                        </button>
                        <button className="btn btn-outline-secondary btn-lg">
                            <i className="bi bi-arrow-counterclockwise me-2"></i>
                            Reset Form
                        </button>
                        <button className="btn btn-outline-danger btn-lg">
                            <i className="bi bi-x-circle me-2"></i>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}