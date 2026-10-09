import React, { useState, useEffect } from 'react';
import './Worklist.css';

export default function Worklist({ search, setSearch, list, filtered }) {
    const [modality, setModality] = useState('');
    const [status, setStatus] = useState('');
    const [filteredList, setFilteredList] = useState(filtered);
    const [currentModality, setCurrentModality] = useState('All Modalities');
    const [currentStatus, setCurrentStatus] = useState('All Status');



    function getModality(event) {
        setModality(event.target.value);

    }

    const sorted = list.filter((fil) => {
        {
        } return fil.Modality.includes(modality);


    });

    function getStatus(event) {
        setStatus(event.target.value);
    }

    function resetFileters() {
        setModality('All Modalities');
        setStatus('All Status');
        setCurrentModality('All Modalities');
        setCurrentStatus('All Status');
    }


    useEffect(() => {
        if (modality === 'CT' || modality === 'MRI' || modality === 'X-Ray' || modality === 'Ultrasound' || modality === 'PET') {
            setFilteredList(sorted);
        }
        else {
            setFilteredList(filtered);
        }

    }, [modality, status, filtered]);

    return (
        <div className="worklist-layout">


            <div className="worklist-container">
                <div className="worklist-filters">


                    <div className="filter-group">
                        <select className="form-select filter-select" onChange={(event) => { getModality(event) }}  >
                            <option>{currentModality}</option>
                            <option>CT</option>
                            <option>MRI</option>
                            <option>X-Ray</option>
                            <option>Ultrasound</option>
                            <option>PET</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <select className="form-select filter-select" onChange={(event) => { getStatus(event) }} >
                            <option>{currentStatus}</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Reported</option>
                            <option>Completed</option>
                        </select>
                    </div>


                    <button className="btn btn-outline-secondary" onClick={resetFileters}>
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
                                    <th>Referring Physician</th>
                                    <th>Scheduled Time</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/*list.map((li) => {
                                    return (
                                        <tr key={li.id}>
                                            <td><strong>{li.id}</strong></td>
                                            <td>{li.name}</td>
                                            <td>{li.age}</td>
                                            <td>{li.gender}</td>
                                            <td><span className="badge bg-light text-dark">{li.Modality}</span></td>
                                            <td>{li.bodyPart}</td>
                                            <td>{li.physician}</td>
                                            <td>{li.time}</td>
                                            <td><span className="badge bg-success">{li.priority}</span></td>
                                            <td><span className="badge bg-warning text-dark">{li.status}</span></td>
                                            <td>
                                                {li.status === 'Pending' &&
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="bi bi-play-circle"></i>
                                                    </button>
                                                }
                                                {li.status === 'In Progress' &&
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                }
                                                {li.status === 'Reported' &&
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="bi bi-check"></i>
                                                    </button>
                                                }
                                            </td>
                                        </tr>

                                    )

                                })*/}
                                {filteredList.map((li) => {
                                    return (
                                        <tr key={li.id}>
                                            <td><strong>{li.id}</strong></td>
                                            <td>{li.name}</td>
                                            <td>{li.age}</td>
                                            <td>{li.Gender}</td>
                                            <td><span className="badge bg-light text-dark">{li.Modality}</span></td>
                                            <td>{li.bodyPart}</td>
                                            <td>{li.physician}</td>
                                            <td>{li.time}</td>
                                            <td><span className="badge bg-success">{li.priority}</span></td>
                                            <td><span className="badge bg-warning text-dark">{li.status}</span></td>
                                            <td>
                                                {li.status === 'Pending' &&
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="bi bi-play-circle"></i>
                                                    </button>
                                                }
                                                {li.status === 'In Progress' &&
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                }
                                                {li.status === 'Reported' &&
                                                    <button className="btn btn-sm btn-primary">
                                                        <i className="bi bi-check"></i>
                                                    </button>
                                                }
                                            </td>
                                        </tr>


                                    )

                                })}


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