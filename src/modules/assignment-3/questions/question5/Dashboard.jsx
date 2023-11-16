import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Setting";
const Dashboard = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Outlet />
    </div>
  );
};
export default Dashboard;
