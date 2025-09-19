import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes
