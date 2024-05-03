import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import useUserStore from "../useStore/useUserStore";
import apiRequest from "../lib/axios";
export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { currentUser, setCurrentUser } = useUserStore();
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const newSocket = io("http://localhost:3001");
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);
  useEffect(() => {
    if (currentUser) {
      socket?.emit("addUsers", currentUser?.id);
      socket?.on("onlineUsers", (data) => {
        setOnlineUsers(
          data.map((o) => o.userId).filter((o) => o !== currentUser?.id)
        );
      });
    }
  }, [currentUser, socket]);
  useEffect(() => {
    async function isLoggedIn() {
      try {
        const res = await apiRequest.get("/user/token");

        console.log(res.data);
      } catch (error) {
        if (error.response.status === 401) {
          await apiRequest.post("/auth/logout");
          setCurrentUser(null);
        }
      }
    }
    if (currentUser) {
      isLoggedIn();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
