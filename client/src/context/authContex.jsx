import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await makeRequest.post("auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await makeRequest.post("auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const contextValue = { currentUser, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
