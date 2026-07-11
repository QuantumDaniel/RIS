
import './Sidebar.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h5 className="mb-0">Menu</h5>
            </div>

            <nav className="sidebar-nav">
                <a href="#" className="sidebar-link active">
                    <i className="bi bi-speedometer2"></i>
                    <span>Dashboard</span>
                </a>

                <a href="#" className="sidebar-link">
                    <i className="bi bi-list-ul"></i>
                    <span>Worklist</span>
                </a>

                <a href="#" className="sidebar-link">
                    <i className="bi bi-files"></i>
                    <span>Studies</span>
                </a>

                <a href="#" className="sidebar-link">
                    <i className="bi bi-pencil-square"></i>
                    <span>Reports</span>
                </a>

                <a href="#" className="sidebar-link">
                    <i className="bi bi-person-plus"></i>
                    <span>Patient Registration</span>
                </a>

                <hr className="my-3" />

                <a href="#" className="sidebar-link">
                    <i className="bi bi-bar-chart"></i>
                    <span>Statistics</span>
                </a>

                <a href="#" className="sidebar-link">
                    <i className="bi bi-gear"></i>
                    <span>Settings</span>
                </a>

                <a href="#" className="sidebar-link">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                </a>
            </nav>
        </aside>
    );
}