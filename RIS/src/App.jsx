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
import './App.css';


export default function App() {
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("active")
      || 'Dashboard'
  });
  const [search, setSearch] = useState('');

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

  const filtered = list.filter((fil) => {

    return fil.name.toLowerCase().includes(search.toLowerCase()) || fil.id.toLowerCase().includes(search.toLowerCase());
  });

  function handleClick(item) {
    setIsActive(item);
    localStorage.setItem("active", item

    );
  }



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
            <Route path="notification" element={<Notification />} />
            <Route path="logout-modal" element={<LogoutModal
              isActive={isActive}
              setIsActive={setIsActive}
            />} />
            <Route path="*" element={<h1 class="error">404 Not Found</h1>} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<h1 class="error">404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}