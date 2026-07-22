
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import PageHeader from '../layout/PageHeader';
import './Studies.css';

export default function Studies() {
    return (
        <div className="studies-layout">

            <div className="studies-container">
                <div className="studies-filters">
                    <div className="filter-group">
                        <input
                            type="text"
                            className="form-control filter-input"
                            placeholder="Search by Study ID, Patient..."
                        />
                    </div>

                    <div className="filter-group">
                        <select className="form-select filter-select">
                            <option>All Modalities</option>
                            <option>CT</option>
                            <option>MRI</option>
                            <option>X-Ray</option>
                            <option>Ultrasound</option>
                            <option>PET</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <select className="form-select filter-select">
                            <option>All Status</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Reported</option>
                            <option>Completed</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <input
                            type="date"
                            className="form-control filter-input"
                        />
                    </div>

                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-funnel"></i>
                        Reset Filters
                    </button>
                </div>

                <div className="table-card">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Study ID</th>
                                    <th>Patient Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Modality</th>
                                    <th>Body Part</th>
                                    <th>Ordered Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>STD-10521</strong></td>
                                    <td>John Michael Doe</td>
                                    <td>45</td>
                                    <td>M</td>
                                    <td><span className="badge bg-light text-dark">CT</span></td>
                                    <td>Chest</td>
                                    <td>Today, 09:30 AM</td>
                                    <td><span className="badge bg-warning text-dark">Pending</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>STD-10520</strong></td>
                                    <td>Jane Elizabeth Smith</td>
                                    <td>38</td>
                                    <td>F</td>
                                    <td><span className="badge bg-light text-dark">MRI</span></td>
                                    <td>Brain</td>
                                    <td>Today, 08:15 AM</td>
                                    <td><span className="badge bg-info text-dark">In Progress</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="bi bi-eye"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>STD-10519</strong></td>
                                    <td>Robert James Wilson</td>
                                    <td>62</td>
                                    <td>M</td>
                                    <td><span className="badge bg-light text-dark">XR</span></td>
                                    <td>Abdomen</td>
                                    <td>Today, 07:45 AM</td>
                                    <td><span className="badge bg-success">Reported</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="bi bi-download"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>STD-10518</strong></td>
                                    <td>Maria Garcia Rodriguez</td>
                                    <td>52</td>
                                    <td>F</td>
                                    <td><span className="badge bg-light text-dark">US</span></td>
                                    <td>Pelvis</td>
                                    <td>Yesterday, 04:20 PM</td>
                                    <td><span className="badge bg-success">Reported</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="bi bi-download"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>STD-10517</strong></td>
                                    <td>David Christopher Brown</td>
                                    <td>55</td>
                                    <td>M</td>
                                    <td><span className="badge bg-light text-dark">CT</span></td>
                                    <td>Abdomen</td>
                                    <td>Yesterday, 02:10 PM</td>
                                    <td><span className="badge bg-success">Reported</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="bi bi-download"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>STD-10516</strong></td>
                                    <td>Lisa Anne Johnson</td>
                                    <td>41</td>
                                    <td>F</td>
                                    <td><span className="badge bg-light text-dark">MRI</span></td>
                                    <td>Knee</td>
                                    <td>Yesterday, 11:00 AM</td>
                                    <td><span className="badge bg-secondary">Completed</span></td>
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
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}