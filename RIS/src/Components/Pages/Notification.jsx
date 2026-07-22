import "./Notification.css";

export default function Notifications() {
    const notifications = [
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
    ];

    return (
        <div className="notifications-page">

            <div className="notification-header">
                <div>
                    <h2>Notifications</h2>
                    <p>Monitor recent activities and system updates.</p>
                </div>

                <button className="mark-btn">
                    Mark All as Read
                </button>
            </div>

            <div className="notification-tabs">
                <button className="active">All</button>
                <button>Unread</button>
                <button>Urgent</button>
                <button>Completed</button>
            </div>

            <div className="notification-list">
                {notifications.map((item) => (
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
                                <button>View</button>
                                <button>Dismiss</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}