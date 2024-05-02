import { useContext, useState } from "react";
import { BsSend } from "react-icons/bs";
import apiRequest from "../../lib/axios";
import toast from "react-hot-toast";
import useMessagesStore from "../../useStore/useMessagesStore";
import { useQueryClient } from "@tanstack/react-query";
import { SocketContext } from "../../contex/SocketContext";

export default function MessageInput() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const { socket } = useContext(SocketContext);

  const { isLoading, receiver, conversationId, addMessage } =
    useMessagesStore();

  async function handleMessage(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiRequest.post("/conversation/message", {
        text,
        conversationId,
        receiverId: receiver.id,
      });
      setText("");
      addMessage(res.data);
      socket.emit("sendMessage", {
        receiver: receiver,
        data: res.data,
      });
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
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
        disabled={loading}
        required
      />
      <button disabled={loading || isLoading} className="btn btn-success">
        <BsSend />
      </button>
    </form>
  );
}
