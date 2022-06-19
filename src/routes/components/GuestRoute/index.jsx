import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const GuestRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));

  return auth.user ? <Navigate to={url.get("redirect") || "/"} /> : children;
};

export default GuestRoute;
