import { Routes, Route } from "react-router-dom";

import React from 'react'
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoute
