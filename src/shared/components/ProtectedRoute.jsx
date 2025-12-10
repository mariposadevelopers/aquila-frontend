import React from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {isAuthenticated, isLoading} = useAuth(); 
    
    if (isLoading) {
        return <h1 className='text-3xl font-clash'>Cargando...</h1>;
    }
    if (!isAuthenticated) {
        return <Navigate to={"/"} replace={true}></Navigate>
    }
    return children
}

export default ProtectedRoute
