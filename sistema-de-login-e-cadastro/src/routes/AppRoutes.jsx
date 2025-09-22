import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import Listar from "../pages/Listar/Listar"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Cadastro />} />
            <Route path="/listar" element={<Listar />} />
        </Routes>
    )
}

export default AppRoutes
