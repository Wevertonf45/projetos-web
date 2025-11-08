import { Routes, Route } from "react-router-dom";
import GraphicPage from "../pages/GraphicPage";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/dashboard" element={<GraphicPage />} />
        </Routes>
    )
}

export default AppRoutes
