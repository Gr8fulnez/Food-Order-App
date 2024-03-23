import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <span>Home age</span>}/>
            <Route path="/user-profile" element={ <span>User Profile age</span>}/>
            <Route path="/*" element={ <Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRoutes