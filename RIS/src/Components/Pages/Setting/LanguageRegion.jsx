import './LanguageRegion.css';

export default function LanguageRegion() {
    return (

        <div className="language-region-page">

            {/* Header */}
            <div className="language-region-header">
                <h4>Language & Region</h4>
                <p>
                    Manage your language, date, time, and regional preferences.
                </p>
            </div>

            {/* Language */}
            <div className="card language-region-card shadow-sm mb-4">
                <div className="language-region-card-body">

                    <div className="language-region-title">
                        <div className="language-region-icon">
                            <i className="bi bi-translate"></i>
                        </div>

                        <div>
                            <h5>Language</h5>
                            <p className="mb-0">
                                Choose the language used throughout the system.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="language"
                            className="form-label fw-semibold"
                        >
                            System Language
                        </label>

                        <select
                            id="language"
                            className="form-select language-select"
                            defaultValue="english"
                        >
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="arabic">Arabic</option>
                            <option value="spanish">Spanish</option>
                        </select>

                        <small className="text-muted">
                            This language will be used for menus, buttons, and system messages.
                        </small>
                    </div>

                </div>
            </div>

            {/* Region */}
            <div className="card language-region-card shadow-sm mb-4">
                <div className="language-region-card-body">

                    <div className="language-region-title">
                        <div className="language-region-icon">
                            <i className="bi bi-globe2"></i>
                        </div>

                        <div>
                            <h5>Region</h5>
                            <p className="mb-0">
                                Set your location and regional formatting preferences.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">

                        {/* Country */}
                        <div className="col-md-6">
                            <label
                                htmlFor="country"
                                className="form-label fw-semibold"
                            >
                                Country
                            </label>

                            <select
                                id="country"
                                className="form-select"
                                defaultValue="nigeria"
                            >
                                <option value="nigeria">Nigeria</option>
                                <option value="egypt">Egypt</option>
                                <option value="ghana">Ghana</option>
                                <option value="kenya">Kenya</option>
                                <option value="south-africa">South Africa</option>
                            </select>
                        </div>

                        {/* Time Zone */}
                        <div className="col-md-6">
                            <label
                                htmlFor="timezone"
                                className="form-label fw-semibold"
                            >
                                Time Zone
                            </label>

                            <select
                                id="timezone"
                                className="form-select"
                                defaultValue="africa-lagos"
                            >
                                <option value="africa-lagos">
                                    (GMT+01:00) West Africa Time
                                </option>

                                <option value="africa-cairo">
                                    (GMT+02:00) Cairo
                                </option>

                                <option value="africa-johannesburg">
                                    (GMT+02:00) Johannesburg
                                </option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>

            {/* Date & Time */}
            <div className="card language-region-card shadow-sm mb-4">
                <div className="language-region-card-body">

                    <div className="language-region-title">
                        <div className="language-region-icon">
                            <i className="bi bi-calendar3"></i>
                        </div>

                        <div>
                            <h5>Date & Time</h5>
                            <p className="mb-0">
                                Choose how dates and times are displayed.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 mt-2">

                        {/* Date Format */}
                        <div className="col-md-6">
                            <label
                                htmlFor="dateFormat"
                                className="form-label fw-semibold"
                            >
                                Date Format
                            </label>

                            <select
                                id="dateFormat"
                                className="form-select"
                                defaultValue="dd-mm-yyyy"
                            >
                                <option value="dd-mm-yyyy">
                                    DD/MM/YYYY — 27/08/2026
                                </option>

                                <option value="mm-dd-yyyy">
                                    MM/DD/YYYY — 08/27/2026
                                </option>

                                <option value="yyyy-mm-dd">
                                    YYYY-MM-DD — 2026-08-27
                                </option>
                            </select>
                        </div>

                        {/* Time Format */}
                        <div className="col-md-6">
                            <label
                                htmlFor="timeFormat"
                                className="form-label fw-semibold"
                            >
                                Time Format
                            </label>

                            <select
                                id="timeFormat"
                                className="form-select"
                                defaultValue="12-hour"
                            >
                                <option value="12-hour">
                                    12-hour — 09:30 PM
                                </option>

                                <option value="24-hour">
                                    24-hour — 21:30
                                </option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>

            {/* First Day of Week */}
            <div className="card language-region-card shadow-sm">
                <div className="language-region-card-body">

                    <div className="language-region-title">
                        <div className="language-region-icon">
                            <i className="bi bi-calendar-week"></i>
                        </div>

                        <div>
                            <h5>Calendar</h5>
                            <p className="mb-0">
                                Configure your calendar preferences.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4">

                        <label
                            htmlFor="firstDay"
                            className="form-label fw-semibold"
                        >
                            First Day of the Week
                        </label>

                        <select
                            id="firstDay"
                            className="form-select language-select"
                            defaultValue="monday"
                        >
                            <option value="monday">Monday</option>
                            <option value="sunday">Sunday</option>
                            <option value="saturday">Saturday</option>
                        </select>

                    </div>

                </div>
            </div>

        </div>
    );
};
