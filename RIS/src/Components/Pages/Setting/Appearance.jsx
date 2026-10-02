import './Appearance.css';

export default function Appearance() {
    return (
        <div className="container-fluid py-4">

            {/* Header */}
            <div className="mb-4">
                <h4 className="fw-bold mb-1">Appearance</h4>
                <p className="text-muted mb-0">
                    Customize how the Radiology Information System looks and feels.
                </p>
            </div>

            {/* Theme */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">

                    <h5 className="fw-semibold mb-2">
                        <i className="bi bi-palette me-2"></i>
                        Theme
                    </h5>

                    <p className="text-muted small mb-4">
                        Choose your preferred appearance for the system.
                    </p>

                    <div className="row g-3">

                        {/* Light */}
                        <div className="col-md-4">
                            <div className="border rounded p-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="theme"
                                        id="lightTheme"
                                        defaultChecked
                                    />

                                    <label
                                        className="form-check-label fw-semibold"
                                        htmlFor="lightTheme"
                                    >
                                        Light
                                    </label>
                                </div>

                                <small className="text-muted d-block mt-2">
                                    Use the light interface.
                                </small>
                            </div>
                        </div>

                        {/* Dark */}
                        <div className="col-md-4">
                            <div className="border rounded p-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="theme"
                                        id="darkTheme"
                                    />

                                    <label
                                        className="form-check-label fw-semibold"
                                        htmlFor="darkTheme"
                                    >
                                        Dark
                                    </label>
                                </div>

                                <small className="text-muted d-block mt-2">
                                    Use the dark interface.
                                </small>
                            </div>
                        </div>

                        {/* System */}
                        <div className="col-md-4">
                            <div className="border rounded p-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="theme"
                                        id="systemTheme"
                                    />

                                    <label
                                        className="form-check-label fw-semibold"
                                        htmlFor="systemTheme"
                                    >
                                        System Default
                                    </label>
                                </div>

                                <small className="text-muted d-block mt-2">
                                    Follow your device's appearance settings.
                                </small>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Interface Preferences */}
            <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">

                    <h5 className="fw-semibold mb-2">
                        <i className="bi bi-layout-sidebar me-2"></i>
                        Interface Preferences
                    </h5>

                    <p className="text-muted small mb-4">
                        Adjust the way information is displayed across the system.
                    </p>

                    {/* Compact Mode */}
                    <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                        <div>
                            <h6 className="mb-1">Compact Mode</h6>

                            <p className="text-muted small mb-0">
                                Display more information by reducing spacing between elements.
                            </p>
                        </div>

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="compactMode"
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <div>
                            <h6 className="mb-1">Remember Sidebar State</h6>

                            <p className="text-muted small mb-0">
                                Remember whether the sidebar was expanded or collapsed.
                            </p>
                        </div>

                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="sidebarState"
                                defaultChecked
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Display Density */}
            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                    <h5 className="fw-semibold mb-2">
                        <i className="bi bi-grid-3x3-gap me-2"></i>
                        Display Density
                    </h5>

                    <p className="text-muted small mb-4">
                        Choose how much information is displayed on the screen.
                    </p>

                    <div className="row g-3">

                        <div className="col-md-4">
                            <div className="border rounded p-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="density"
                                        id="comfortableDensity"
                                        defaultChecked
                                    />

                                    <label
                                        className="form-check-label fw-semibold"
                                        htmlFor="comfortableDensity"
                                    >
                                        Comfortable
                                    </label>
                                </div>

                                <small className="text-muted d-block mt-2">
                                    More spacing and easier reading.
                                </small>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="border rounded p-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="density"
                                        id="compactDensity"
                                    />

                                    <label
                                        className="form-check-label fw-semibold"
                                        htmlFor="compactDensity"
                                    >
                                        Compact
                                    </label>
                                </div>

                                <small className="text-muted d-block mt-2">
                                    More information with less spacing.
                                </small>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

