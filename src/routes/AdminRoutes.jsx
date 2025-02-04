import React from "react";
import { Routes, Route } from "react-router-dom";
// import PrivateRoute from "/PrivateRoute";
import AdminDashboard from "../pages/admins/Dashboard";
// import ManageUsers from "../pages/admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* <Route path="/admin/manage-users" element={<ManageUsers />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
