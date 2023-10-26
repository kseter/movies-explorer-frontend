import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({loggedIn}) => {
    const userLoggedIn = loggedIn

    return (
        userLoggedIn ? <Outlet /> : <Navigate to="/" replace/>
    )
}

export default ProtectedRoute;