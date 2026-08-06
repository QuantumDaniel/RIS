import { useEffect, useState } from "react";

import "./Notification.css";

export default function Notifications({ count, setCount, notifications, setNotifications, completed, urgent, unread }) {



    const [display, setDisplay] = useState('notifications');


    function markAll() {
        setNotifications(notifications.map((value) => {
            value.unread = false;
            return value;
        }));

    };

    /*
    function markRead() {
        setNotifications(notifications.map((value) => {
            value.unread = false;
            return value;
        }));

    }
*/




    return (
        <div className="notifications-page">

            <div className="notification-header">
                <div>
                    <div><h2>Notifications</h2> <span>({(notifications.length)})</span></div>
                    <p>Monitor recent activities and system updates.</p>
                </div>

                <button className="mark-btn" onClick={() => { markAll() }}>
                    Mark All as Read
                </button>
            </div>

            <div className="notification-tabs">
                <button onClick={() => { setDisplay('notifications') }} className={display === 'notifications' ? "active" : ""}>All</button>
                <button onClick={() => { setDisplay('unread') }} className={display === 'unread' ? "active" : ""}>Unread</button>
                <button onClick={() => { setDisplay('urgent') }} className={display === 'urgent' ? "active" : ""}>Urgent</button>
                <button onClick={() => { setDisplay('completed') }} className={display === 'completed' ? "active" : ""}>Completed</button>
            </div>

            <div className="notification-list">
                {(display === 'notifications' ? notifications : display === 'unread' ? unread : display === 'urgent' ? urgent : completed).map((item) => (
                    <div
                        key={item.id}
                        className={`notification-card ${item.unread ? "unread" : ""
                            }`}
                    >
                        <div className={`notification-dot ${item.type}`}></div>

                        <div className="notification-content">
                            <div className="notification-top">
                                <h4>{item.title}</h4>
                                <span>{item.time}</span>
                            </div>

                            <p>{item.message}</p>

                            <div className="notification-actions">
                                <button >View</button>
                                <button onClick={() => { setNotifications(notifications.filter((n) => n.id !== item.id)) }}>Dismiss</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}