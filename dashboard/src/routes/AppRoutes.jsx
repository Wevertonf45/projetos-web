import { Routes, Route } from "react-router-dom";
import GraphicPage from "../pages/GraphicPage";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<GraphicPage />} />
        </Routes>
    )
}

export default AppRoutes
