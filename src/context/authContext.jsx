import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (email, password) => {
    const response = await axios.post(
      "https://jwt-auth-eight-neon.vercel.app/login",
      { email, password }
    );
    const token = response.data.refreshToken;
    const userData = { email };
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    return response;
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/logout",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (e) {
      console.error(e);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};