import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Paths } from "../../consts/paths";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login"
import NotFoundPage from "../../pages/NotFound";
import ProfilePage from "../../pages/Profile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={Paths.main} element={<HomePage />} />
            <Route path={Paths.login} element={<LoginPage />} />
            <Route path={Paths.profile} element={<ProfilePage />} />
            <Route path={Paths.notFound} element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to={Paths.notFound} />} />
        </Routes>
    )
}

export default AppRoutes