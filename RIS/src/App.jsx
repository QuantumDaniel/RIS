import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from './Components/Pages/auth/Login';
import ForgotPassword from './Components/Pages/auth/ForgotPassword';
import ResetPassword from './Components/Pages/auth/ResetPassword';
import Dashboard from './Components/dashboard/Dashboard';
import Studies from './Components/Pages/Studies';
import Home from './Components/Pages/Home';
import Settings from './Components/Pages/Settings';
import WorkList from './Components/Pages/WorkList';
import Reports from "./Components/Pages/Reports";
import PatientRegistration from "./Components/Pages/PatientRegistration";
import Statistics from "./Components/Pages/Statistics";
import Logout from "./Components/Pages/auth/Logout";
import Notification from "./Components/Pages/Notification";
import LogoutModal from "./Components/Pages/LogoutModal"
import UserGuide from "./Components/Pages/UserGuide";
import './App.css';


export default function App() {
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("active")
      || 'Dashboard'
  });
  const [search, setSearch] = useState('');
  const [help, setHelp] = useState(true);
  function helpModal() {
    setHelp(false);
  }

  const list = [
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




  const urgent = notifications.filter((not) => {
    return (not.type === 'urgent');

  });

  const completed = notifications.filter((not) => {
    return (not.type === 'completed');

  });

  const unread = notifications.filter((not) => {
    return (not.unread === true);

  });

  const [count, setCount] = useState(unread.length);
  const filtered = list.filter((fil) => {

    return fil.name.toLowerCase().includes(search.toLowerCase()) || fil.id.toLowerCase().includes(search.toLowerCase());
  });

  function handleClick(item) {
    setIsActive(item);
    localStorage.setItem("active", item

    );
  }

  useEffect(() => {
    setCount(unread.length);

  })



  return (
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard
            isActive={isActive}
            setIsActive={setIsActive}
            search={search}
            setSearch={setSearch}
            list={list}
            filtered={filtered}
            handleClick={handleClick}
            count={count}
            setCount={setCount}
            unread={unread}
            notifications={notifications}
            completed={completed}
            urgent={urgent}
            setNotifications={setNotifications}
            helpModal={helpModal}

          />}>
            <Route index element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="studies" element={<Studies />} />
            <Route path="worklist" element={<WorkList
              list={list}
              filtered={filtered}
            />} />
            <Route path="reports" element={<Reports />} />
            <Route path="patient-registration" element={<PatientRegistration />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="notification" element={<Notification
              count={count}
              setCount={setCount}
              notifications={notifications}
              setNotifications={setNotifications}
              unread={unread}
              completed={completed}
              urgent={urgent}
            />}
            />
            <Route path="logout-modal" element={<LogoutModal
              isActive={isActive}
              setIsActive={setIsActive}
            />} />
            <Route path="user-guide" element={<UserGuide handleClick={handleClick} />} />
            <Route path="*" element={<h1 class="error">404 Not Found</h1>} />
          </Route>
          <Route path="/logout" element={<Logout />} />

          <Route path="*" element={<h1 class="error">404 Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}