import React from "react"
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import RootLayout from "../components/RootLayout";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route element={<AuthLayout/>}>
                <Route path="/singin" element={<SignIn />} />
                <Route path="/singup" element={<SingUp />} />
            </Route>
            <Route element={<RootLayout/>}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default Router;

