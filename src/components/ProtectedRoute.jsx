// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/**
 * A protected route wrapper that checks authentication before rendering the component.
 *
 * @param {Object} props - The props for the component.
 * @param {React.Component} props.component - The component to be rendered if authenticated.
 * @returns {JSX.Element} The rendered component or redirection to login.
 */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
