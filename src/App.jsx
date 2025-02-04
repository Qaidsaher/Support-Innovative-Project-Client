
// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateRoute from "@/routes/PrivateRoute";
// import LoginPage from "@/pages/auth/LoginPage";
// import RegisterPage from "@/pages/auth/RegisterPage";
import DashboardAdmin from "@/pages/admins/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";

import PrivateRoute from "./routes/PrivateRoute";
// import AdminDashboard from "@/pages/admin/";
// import InnovatorDashboard from "@/pages/innovator/InnovatorDashboard";
// import InvestorDashboard from "@/pages/investor/InvestorDashboard";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import AuthRoutes from "./routes/AuthRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import InnovatorRoutes from "./routes/InnovatorRoutes";
import InvestorRoutes from "./routes/InvestorRoutes";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

      
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/dashboard" element={<DashboardAdmin />} />
          </Route> */}

            {/* Authentication Routes */}
            <Route path="/*" element={<AuthRoutes />} />

            {/* User-Specific Routes */}
            <Route path="/*" element={<AdminRoutes />} />
            <Route path="/*" element={<InnovatorRoutes />} />
            <Route path="/*" element={<InvestorRoutes />} />
           
            {/* <Route path="/" element={<LoginPage />} /> */}
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
