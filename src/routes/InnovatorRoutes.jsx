import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/innovators/Dashboard";
// import InnovatorDashboard from "../pages/innovator/InnovatorDashboard";
import MyInnovations from "../pages/innovators/MyInnovations";
import ChatPage from "../pages/innovators/ChatPage"
const InnovatorRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute allowedRoles={["innovator"]} />}>
      {/* <Route> */}
        <Route path="/innovators/dashboard" element={<Dashboard />} />
        <Route path="/innovators/my-innovations" element={<MyInnovations />} />
        <Route path="/innovators/my-profile" element={<MyInnovations />} />
        <Route path="/innovators-chat" element={<Chatpage/>} />
      </Route>
    </Routes>
  );
};

export default InnovatorRoutes;
