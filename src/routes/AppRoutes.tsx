import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditScreen from "../pages/EditScreen";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<MainLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/edit/:id" element={<EditScreen />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;