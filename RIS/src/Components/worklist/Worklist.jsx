

import { useState } from 'react';
import './Worklist.css';

export default function Worklist() {
    const [modality, setModality] = useState('');

    const worklist = [
        {

            name: 'Abur Daniel',
            age: 27,
            Gender: 'M',
            Modality: 'CT',
            bodyPart: 'Chest',
            physician: 'Dr. Robert Chen',
            time: '09:30 AM	',
            priority: 'Routine',
            status: 'Pending',
            id: 'STD-2401'
        },

        {

            name: 'Emma Wilson',
            age: 45,
            Gender: 'F',
            Modality: 'MRI',
            bodyPart: 'Brain',
            physician: 'Dr. Lisa Anderson',
            time: '10:30 AM	',
            priority: 'Urgent',
            status: 'In Progress',
            id: 'STD-2402',
        },

        {

            name: 'Michael Brown',
            age: 58,
            Gender: 'M',
            Modality: 'XR',
            bodyPart: 'Abdomen',
            physician: 'Dr. David Martinez	',
            time: '10:30 AM	',
            priority: 'Routine',
            status: 'Reported',
            id: 'STD-2403',
        },


        {

            name: 'Sarah Johnson',
            age: 52,
            Gender: 'F',
            Modality: 'US',
            bodyPart: 'Pelvis',
            physician: 'Dr. Jennifer Lee	',
            time: '11:00 AM	',
            priority: 'Routine',
            status: 'Pending',
            id: 'STD-2404',
        },

        {

            name: 'Robert Garcia',
            age: 70,
            Gender: 'M',
            Modality: 'CT',
            bodyPart: 'Abdomen',
            physician: 'Dr. Michael Thompson',
            time: '11:30 AM	',
            priority: 'Urgent',
            status: 'Pending',
            id: 'STD-2405',
        },

        {

            name: 'Lisa Rodriguez',
            age: 38,
            Gender: 'F',
            Modality: 'MRI',
            bodyPart: 'Knee',
            physician: 'Dr. Patricia White',
            time: '12:00 PM	',
            priority: 'Routine',
            status: 'Reported',
            id: 'STD-2406',
        },
    ];



    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Urgent MRI Request",
            message: "Emma Wilson has been scheduled for an urgent Brain MRI.",
            time: "2 minutes ago",
            type: "urgent",
            unread: true,
        },
        {
            id: 2,
            title: "Examination Completed",
            message: "John Doe's Chest X-ray examination has been completed.",
            time: "15 minutes ago",
            type: "completed",
            unread: true,
        },
        {
            id: 3,
            title: "New Patient Registered",
            message: "Sarah James has been added to today's worklist.",
            time: "35 minutes ago",
            type: "new",
            unread: false,
        },
        {
            id: 4,
            title: "Report Available",
            message: "Abdominal Ultrasound report is ready for review.",
            time: "1 hour ago",
            type: "report",
            unread: false,
        },
        {
            id: 5,
            title: "CT Scanner Maintenance",
            message: "Routine calibration is scheduled for 6:00 PM today.",
            time: "3 hours ago",
            type: "system",
            unread: false,
        },
    ]);

    function displayWorklist() {
        if (modality === '') {
            return worklist;
        }
        return worklist.filter((item) => item.Modality === modality);
    }

    function getModality(event) {
        setModality(event.target.value);


    }
    return (
        <div className="worklist-layout">


            <div className="worklist-container">
                <div className="worklist-filters">
                    <div className="filter-group">
                        <input
                            type="text"
                            className="form-control filter-input"
                            placeholder="Search by Study ID, Patient..."
                        />
                    </div>

                    <div className="filter-group">
                        <select className="form-select filter-select" onChange={(event) => { getModality(event) }}>
                            <option>All Modalities</option>
                            <option>CT</option>
                            <option>MRI</option>
                            <option>X-Ray</option>
                            <option>Ultrasound</option>
                            <option>PET</option>
                        </select>
                        <button className="btn btn-outline-secondary" onClick={getModality}>
                            <i className="bi bi-search"></i>
                            Apply Filters
                        </button>
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
                                <tr className="table-row-hover">
                                    <td>
                                        <strong className="study-id">STD-10521</strong>
                                    </td>
                                    <td>John Michael Doe</td>
                                    <td>45</td>
                                    <td>M</td>
                                    <td><span className="badge bg-light text-dark">CT</span></td>
                                    <td>Chest</td>
                                    <td>Today, 09:30 AM</td>
                                    <td><span className="badge bg-warning text-dark">Pending</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">
                                            <i className="bi bi-pencil"></i>
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