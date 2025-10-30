import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import GraphicPage from "../pages/GraphicPage";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<GraphicPage />} />
        </Routes>
    )
}

export default AppRoutes
