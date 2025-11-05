import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { isAuthenticated } = useAuth(); 

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
            <Link to="/home">
              <li>Inicio</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/home" className="text-xl font-bold">
          RAFD
        </Link>
      </div>

      <div className="navbar-end">
        {isAuthenticated && (
          <Link
            to="/create"
            className="btn btn-primary flex items-center gap-2 rounded-md"
          >
            <PlusIcon size={18} />
            Crear
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
