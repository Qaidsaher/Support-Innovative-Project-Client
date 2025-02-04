import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import InvestorDashboard from "../pages/investor/InvestorDashboard";
// import InvestmentList from "../pages/investor/InvestmentList";

const InvestorRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute allowedRoles={["investor"]} />}>
        {/* <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        <Route path="/investor/investments" element={<InvestmentList />} /> */}
      </Route>
    </Routes>
  );
};

export default InvestorRoutes;
