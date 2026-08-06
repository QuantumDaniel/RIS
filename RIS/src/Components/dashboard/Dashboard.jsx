

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../layout/PageHeader';
import './Dashboard.css';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import ShowModal from '../layout/ShowModal';


export default function Dashboard({
    isActive,
    setIsActive,
    search,
    setSearch,
    list,
    filtered,
    handleClick,
    count,
    setCount,
    notifications,
    urgent,
    completed,
    unread,
    setNotifications,
    helpModal
}) {
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


            <Navbar
                search={search}
                setSearch={setSearch}
                list={list} filtered={filtered}
                handleClick={handleClick}
                notifications={notifications}
                setNotifications={setNotifications}
                urgent={urgent} completed={completed}
                unread={unread} count={count}
                setCount={setCount}
                helpModal={helpModal}
            />


            <Sidebar
                isActive={isActive}
                setIsActive={setIsActive}
                handleClick={handleClick}
            />
            <div className="dashboard-container">
                {!helpModal && (<ShowModal />)}

                <Outlet />




                {/* Footer */}
                <footer className="dashboard-footer mt-5">
                    <p>&copy; 2026 Hospital Information Systems • Radiology Information System (RIS) v1.0</p>
                </footer>
            </div>
        </div>
    );
}