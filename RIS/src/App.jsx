import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './Components/auth/Login';
import ForgotPassword from './Components/auth/ForgotPassword';
import ResetPassword from './Components/auth/ResetPassword';
import Dashboard from './Components/dashboard/Dashboard';
import './App.css';
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}