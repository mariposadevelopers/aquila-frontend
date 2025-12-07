import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const handleLogoutRequest = async function () {
    try {
      const success = await logout(); 
      if (success){
        console.log("Se cerró sesión correctamente. ");
      }
    } catch (error) {
      console.error('Error logging out:', error);      
    }
  }
  return (
    <div data-theme="business" className="navbar bg-base-300 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link className="font-clash p-1" to="/home">
              <li>Inicio</li>
            </Link>

            <Link className="font-clash p-1" to={"/posts"}>
              Todas las publicaciones
            </Link>

            {isAuthenticated ? (
              <Link onClick={() => {handleLogoutRequest()}}>
                <li className="font-clash p-1 text-orange-500">Cerrar Sesión</li>
              </Link>
            ) : (
              <Link className="text-orange-500 p-1 font-clash" to="/login">
                <li>Iniciar Sesión</li>
              </Link>
            )}

          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/home" className="text-xl font-clash font-bold">
          RAFD
        </Link>
      </div>

      <div className="navbar-end">
        {isAuthenticated && (
          <Link
            to="/create"
            className="border-none hover:bg-[#000000] hover:text-[#FF8800] bg-black text-[#FFFFFF] font-clash btn btn-primary flex items-center gap-2 rounded-md"
          >
            <PlusIcon size={18} />
            Crear publicación
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
