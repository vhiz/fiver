import moment from "moment";
import { useContext, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../lib/axios";
import { SocketContext } from "../../contex/SocketContext";
import useUserStore from "../../useStore/useUserStore";
import toast from "react-hot-toast";
import { CiClock1 } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
export default function Message({ own, message: data }) {
  const [message, setMessage] = useState(data);
  const { socket } = useContext(SocketContext);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useUserStore();

  const queryClient = useQueryClient();

  const isMessageSent = useRef(false);
  useEffect(() => {
  
    async function sendMessage() {
      try {
        setLoading(true);
        const res = await apiRequest.post("/conversation/message", {
          text: message.text,
          conversationId: message.conversationId,
          receiverId: message.receiverId,
        });
        socket.emit("sendMessage", {
          receiver: message.receiver,
          data: res.data,
        });
        setMessage((prev) => ({ ...prev, sent: true }));
        queryClient.invalidateQueries({ queryKey: ["conversations"] });
        const play = new Audio("/noti3.mp3");
        play.play();
        setLoading(false);
      } catch (error) {
        toast.error("Something went wrong");
        setLoading(false);
      }
    }
  
    if (!isMessageSent.current && !message.sent && currentUser.id === message.userId) {
      sendMessage();
      isMessageSent.current = true;
      setMessage((prev) => ({ ...prev, sent: true }));
    }
  }, [currentUser, message, queryClient, socket]);
  
  return (
    <div
      className={`chat mt-2 ${
        own ? `chat-end` : `chat-start ${message.new ? "animate-shakeX" : ""}`
      }`}
    >
      <div
        className={`chat-bubble ${own ? "chat-bubble-primary text-white" : ""}`}
      >
        <div className="flex flex-col gap-4">
          <span className={`flex-1 ${own ? "opacity-80" : ""}`}>
            {message.text}
          </span>
          {own && (
            <div className="flex items-end w-full relative">
              {loading ? (
                <CiClock1 className="text-xs self-end absolute right-0" />
              ) : (
                <IoIosCheckmark className="text-sm self-end absolute right-0 text-green-500" />
              )}
            </div>
          )}
        </div>
      </div>
      <div className="chat-footer opacity-50">
        {moment(message.createdAt).fromNow()}
      </div>
    </div>
  );
}
