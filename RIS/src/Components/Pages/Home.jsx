
import './Home.css';

export default function Home() {
    return (
        <section className="statistics-section">
            <div className="row g-4">
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="stat-card">
                        <div className="stat-icon bg-primary align-items-center justify-content-center d-flex">
                            <i className="bi bi-clipboard2-pulse "></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total Studies</p>
                            <p className="stat-value">245</p>
                            <small className="stat-description">Today's examinations</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="stat-card">
                        <div className="stat-icon bg-warning">
                            <i className="bi bi-hourglass-split"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Pending Studies</p>
                            <p className="stat-value">42</p>
                            <small className="stat-badge"><span className="badge bg-danger">High Priority</span></small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="stat-card">
                        <div className="stat-icon bg-success">
                            <i className="bi bi-file-earmark-check"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Reports Completed</p>
                            <p className="stat-value">183</p>
                            <small className="stat-description">This week</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="stat-card">
                        <div className="stat-icon bg-info">
                            <i className="bi bi-hdd-stack"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">CT Examinations</p>
                            <p className="stat-value">58</p>
                            <small className="stat-description">Today</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="stat-card">
                        <div className="stat-icon bg-danger">
                            <i className="bi bi-cpu"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">MRI Examinations</p>
                            <p className="stat-value">31</p>
                            <small className="stat-description">Today</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="stat-card">
                        <div className="stat-icon bg-success">
                            <i className="bi bi-heart-pulse"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Ultrasound</p>
                            <p className="stat-value">74</p>
                            <small className="stat-description">Scheduled</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}