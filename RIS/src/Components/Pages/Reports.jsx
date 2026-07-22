
import './Reports.css';

export default function Reports() {
    return (
        <div className="reports-layout">


            <div className="reports-container">
                <div className="reports-filters">


                    <div className="filter-group">
                        <select className="form-select filter-select">
                            <option>All Status</option>
                            <option>Draft</option>
                            <option>Review</option>
                            <option>Approved</option>
                            <option>Signed</option>
                        </select>
                    </div>



                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-funnel"></i>
                        Reset
                    </button>
                </div>

                <div className="table-card">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Report ID</th>
                                    <th>Patient</th>
                                    <th>Study ID</th>
                                    <th>Modality</th>
                                    <th>Radiologist</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>RPT-2401</strong></td>
                                    <td>James Mitchell</td>
                                    <td>STD-2401</td>
                                    <td><span className="badge bg-light text-dark">CT</span></td>
                                    <td>Dr. Sarah Johnson</td>
                                    <td>Today, 10:30 AM</td>
                                    <td><span className="badge bg-info">Review</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>RPT-2400</strong></td>
                                    <td>Emma Wilson</td>
                                    <td>STD-2400</td>
                                    <td><span className="badge bg-light text-dark">MRI</span></td>
                                    <td>Dr. Michael Brown</td>
                                    <td>Today, 09:15 AM</td>
                                    <td><span className="badge bg-success">Signed</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>RPT-2399</strong></td>
                                    <td>Michael Brown</td>
                                    <td>STD-2399</td>
                                    <td><span className="badge bg-light text-dark">XR</span></td>
                                    <td>Dr. Lisa Anderson</td>
                                    <td>Yesterday, 04:20 PM</td>
                                    <td><span className="badge bg-success">Signed</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="bi bi-download"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>RPT-2398</strong></td>
                                    <td>Sarah Johnson</td>
                                    <td>STD-2398</td>
                                    <td><span className="badge bg-light text-dark">US</span></td>
                                    <td>Dr. Robert Chen</td>
                                    <td>Yesterday, 02:10 PM</td>
                                    <td><span className="badge bg-warning text-dark">Draft</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>RPT-2397</strong></td>
                                    <td>Robert Garcia</td>
                                    <td>STD-2397</td>
                                    <td><span className="badge bg-light text-dark">CT</span></td>
                                    <td>Dr. Jennifer Lee</td>
                                    <td>2 days ago</td>
                                    <td><span className="badge bg-success">Signed</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="bi bi-download"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <nav className="pagination-nav">
                        <ul className="pagination mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    );
}