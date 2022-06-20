import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/Home";
import NotFoundNoAuth from "../../pages/NotFoundNoAuth";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import { Paths } from "../../consts/paths";
import LoginPage from "../../pages/Login";
import Loading from "../../UI-library/Loading";
import NotFoundAuth from "../../pages/NotFoundAuth";
import Profile from "../../pages/Profile";
import ForgotPassword from "../../pages/ForgotPassword";

const AppRoutes = () => {
  const auth = useAuth();

  return auth.isLoaded ? (
    <Routes>
      <Route
        path={Paths.main}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path={Paths.profile}
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path={Paths.login}
        element={
          <GuestRoute>
            <LoginPage />
          </GuestRoute>
        }
      />
      <Route
        path={Paths.forgotPassword}
        element={
          <GuestRoute>
            <ForgotPassword />
          </GuestRoute>
        }
      />
      <Route path={Paths.notFound} element={<NotFoundAuth />} />
      <Route path="*" element={<Navigate to={Paths.notFound} />} />
    </Routes>
  ) : (
    <Loading />
  );
};

export default AppRoutes;
