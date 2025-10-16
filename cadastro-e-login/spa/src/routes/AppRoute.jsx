import { Routes, Route } from "react-router-dom";

import React from 'react'
import Cadastro from "../pages/Cadastro/Cadastro";

function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Cadastro />} />
        </Routes>
    )
}

export default AppRoute
