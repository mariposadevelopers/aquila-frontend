import React, { useState } from 'react';
import LoginForm from '../shared/components/LoginForm.jsx';
const LoginPage = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleLoginButtonClick = () => {
        setShowLoginForm(true);    
    }

    return (
        <div data-theme="business">
            <main className='h-screen flex flex-col justify-center items-center'>
                <div className='text-center mb-5'> 
                <h1 className='text-5xl font-bold text-white mb-3 p-3'>Bienvenido, <span className='text-orange-600'>profesor.</span> </h1>
                </div>
            {showLoginForm ? (
                <LoginForm/>
            ) : (
                <button onClick={handleLoginButtonClick} 
                        className='btn btn-active rounded-md text-white text-xl bg-[#ff8c00] w-64'>
                    Iniciar Sesión
                </button>
            )}
            </main>
        </div>
    )
}

export default LoginPage
