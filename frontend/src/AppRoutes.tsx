import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layouts";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <Layout>HOME PAGE</Layout>}/>
            <Route path="/user-profile" element={ <span>User Profile age</span>}/>
            <Route path="/*" element={ <Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRoutes