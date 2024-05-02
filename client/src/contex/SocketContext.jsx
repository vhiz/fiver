import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import useUserStore from "../useStore/useUserStore";
export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { currentUser } = useUserStore();
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
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
