import { useContext, useState } from "react";
import { BsSend } from "react-icons/bs";
import toast from "react-hot-toast";
import useMessagesStore from "../../useStore/useMessagesStore";
import { SocketContext } from "../../contex/SocketContext";

import useUserStore from "../../useStore/useUserStore";
export default function MessageInput() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { socket } = useContext(SocketContext);
  const { currentUser } = useUserStore();
  let typingTimer;
  const { isLoading, receiver, conversationId, addMessage } =
    useMessagesStore();
  function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }
  async function handleMessage(e) {
    e.preventDefault();
    try {
      addMessage({
        id: generateRandomId(),
        userId: currentUser.id,
        receiverId: receiver.id,
        text,
        createdAt: Date.now(),
        read: false,
        conversationId,
        receiver,
      });
      setText("");

      setIsTyping(false);
      socket.emit("typing", {
        receiverId: receiver.id,
        conversationId: conversationId,
        senderId: currentUser.id,
        typing: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  const handleKeyDown = () => {
    clearTimeout(typingTimer);
    setIsTyping(true);
    socket.emit("typing", {
      receiverId: receiver.id,
      conversationId: conversationId,
      senderId: currentUser.id,
      typing: isTyping,
    });
  };
  const handleKeyUp = () => {
    clearTimeout(typingTimer);
    // Start typing timer
    typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 1000); // 5000 milliseconds = 5 seconds
  };

  const handleBlur = () => {
    clearTimeout(typingTimer);
    setIsTyping(false);
  };

  return (
    <form
      className="mt-auto w-full flex items-center gap-4 p-3"
      onSubmit={handleMessage}
    >
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={handleBlur}
        disabled={isLoading}
        required
      />
      <button disabled={isLoading} className="btn btn-success">
        <BsSend />
      </button>
    </form>
  );
}
