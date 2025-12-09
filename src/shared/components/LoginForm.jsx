import React from "react";
import {useNavigate} from 'react-router'
import { loginRequest } from "../api/auth.js";
import { useState } from "react";
import toast from 'react-hot-toast'
import { useAuth } from "../context/AuthContext.jsx";
const LoginForm = () => {
  const [credentials, setCredentials] = useState({email:"", password:""}); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    }); 
  };

  const {signIn} = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const {email, password} = credentials; 

      if (!email || !password) {
        toast.error("Ingresa correo y contraseña..."); 
        return; 
      } 
      const success = await signIn(credentials);  
      if (success){
        navigate('/');
      }
    } catch (err){

      const errorMessage = err.response?.data?.message || "Error de inicio de sesión. Inténtalo de nuevo.";
      console.error("Login failed:", err);
      toast.error(errorMessage); 
    } 
  }
  return (
    <div className="bg-[#2121] px-10 lg:px-[250px] xl:px-[400px] w-full rounded-xl">
        <form onSubmit={handleSubmit} className="">
          <div>
            <label className="block text-xl font-semibold text-orange-500 mb-3">Email</label>
            <input name="email" value={credentials.email} onChange={handleChange} className="w-full px-4 py-2" type="text" placeholder="email@provider.com" />
          </div>
          <div> 
            <label className="block text-xl font-semibold text-orange-500 mb-3 mt-4">Contraseña</label>
            <input name="password" value={credentials.password} onChange={handleChange} className="w-full px-4 py-2" type="password" placeholder="*********" />
          </div>
          <button type="submit" className="block text-xl text-white bg-orange-500 w-full p-2 rounded-xl mt-6">
            Iniciar Sesión
          </button>
        </form>
    </div>
  );
};

export default LoginForm;