

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div className="container-fluid px-4">
                <a className="navbar-brand fw-bold text-primary" href="#" style={{ fontSize: '20px' }}>
                    <i className="bi bi-hospital me-2"></i>
                    Hospital RIS
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-bell me-2"></i>
                                Notifications
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-question-circle me-2"></i>
                                Help
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-person-circle me-2"></i>
                                Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}