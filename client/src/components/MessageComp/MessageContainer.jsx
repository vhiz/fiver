import { useContext, useEffect, useRef, useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Error from "../Error";
import useUserStore from "../../useStore/useUserStore";
import useMessagesStore from "../../useStore/useMessagesStore";
import { SocketContext } from "../../contex/SocketContext";

export default function MessageContainer() {
  const { messages, isLoading, error, receiver, reset, conversationId } =
    useMessagesStore();
  const { currentUser } = useUserStore();
  const endRef = useRef();
  const { socket,onlineUsers } = useContext(SocketContext);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [typing, setTyping] = useState(false);
  useEffect(() => {
    socket?.on("getTyping", (data) => {
      if (data.receiverId === currentUser.id) {
        if (conversationId === data.conversationId) {
          setTyping(data.typing);
        }
      }
    });

    return () => {
      if (socket) {
        socket.off("getTyping");
      }
    };
  }, [conversationId, currentUser, socket, typing]);
  return (
    <div className="modal-box w-[100vw] max-w-[100vw] lg:max-w-[80vw] max-h-[100vh] lg:h-[calc(100vh-5rem)] flex flex-col p-0">
      <form method="dialog" className="lg:hidden">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => reset()}
        >
          ✕
        </button>
      </form>
      <div className="flex p-3 input-bordered border-b gap-2 items-center">
        {isLoading || error ? (
          <>
            <div className="avatar">
              <div className="w-12 skeleton rounded-full"></div>
            </div>
            <span className="capitalize skeleton w-20 h-5"></span>
          </>
        ) : (
          <>
            <div className={`avatar ${onlineUsers.includes(receiver.id)?'online':'offline'}`}>
              <div className="w-12 rounded-full">
                <img src={receiver?.img} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="capitalize">{receiver?.name}</span>
              {typing && (
                <span className="font-thin text-success animate-twPulse animate-infinite">
                  {receiver?.name} is typing
                </span>
              )}
            </div>
          </>
        )}
      </div>
      <div className="flex-1 h-full overflow-y-scroll scrollbar-none w-full p-3">
        {isLoading ? (
          <>
            <div className="chat chat-start  mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
            <div className="chat chat-end mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
            <div className="chat chat-start  mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
            <div className="chat chat-end  mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
            <div className="chat chat-start  mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
            <div className="chat chat-end  mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
            <div className="chat chat-start  mt-2">
              <div className="chat-bubble skeleton w-[40%] h-9"></div>
            </div>
          </>
        ) : error ? (
          <Error />
        ) : (
          <>
            {messages.map((message) => (
              <Message
                key={message.id}
                own={message.userId === currentUser.id}
                message={message}
              />
            ))}
          </>
        )}
        <div ref={endRef}></div>
      </div>
      <MessageInput />
    </div>
  );
}
