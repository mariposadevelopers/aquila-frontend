import { useState, createContext, useContext, useEffect } from "react";
import { loginRequest, logoutRequest, verifyTokenRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

const signIn = async (userData) => {
    try {
      const res = await loginRequest(userData);
      setUser(res.data); 
      setIsAuthenticated(true);
      return true; 
    } catch (err) {
      setErrors(err.response?.data?.message || "Error al iniciar sesión");
      return false;
    }
  };

const logout = async () => {
  try {
    const res = await logoutRequest(); 
    setIsAuthenticated(false);
    setUser(null); 
    return true; 
  } catch (error) {
      setErrors(error.response?.data?.message || "Error al cerrar sesión");
      return false;    
  }
}

  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await verifyTokenRequest();
        if (res.data.success) {
          setIsAuthenticated(true);
          setUser(res.data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false); 
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, signIn, logout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
