

import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../layout/PageHeader';
import './Dashboard.css';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';


export default function Dashboard({ isActive, setIsActive, search, setSearch, list, filtered, handleClick }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem("token");
            const response = axios.get("http://localhost:500/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setUser(response.data)


        }
        getUser();

    }, [])

    return (
        <div className="dashboard-layout">

            <Navbar search={search} setSearch={setSearch} list={list} filtered={filtered} />
            <Sidebar isActive={isActive} setIsActive={setIsActive} handleClick={handleClick} />
            <div className="dashboard-container">

                <Outlet />

                {/* Footer */}
                <footer className="dashboard-footer mt-5">
                    <p>&copy; 2026 Hospital Information Systems • Radiology Information System (RIS) v1.0</p>
                </footer>
            </div>
        </div>
    );
}