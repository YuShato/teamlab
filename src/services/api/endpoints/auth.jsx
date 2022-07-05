import axios from "../axios";

const endpoints = {
    "registration": (data) => axios.post("/auth/email/register", data),
    "login": (data) => axios.post("/auth/email/login", data),
    "forgotPassword": (data) => axios.post("/auth/forgot/password", data),
    "getProfile": () => axios.get("/auth/me"),
    "updateProfile": (data) => axios.patch("/auth/me", data),
    "uploadFile": (data) => axios.post("/api/files/upload", data),
};

export default endpoints;