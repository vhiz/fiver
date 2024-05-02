import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LiaBookReaderSolid } from "react-icons/lia";
import apiRequest from "../lib/axios";
import Error from "../components/Error";
import useUserStore from "../useStore/useUserStore";
import useMessagesStore from "../useStore/useMessagesStore";
import moment from "moment";
import MessageContainer from "../components/MessageComp/MessageContainer";
import { useContext, useEffect } from "react";
import { SocketContext } from "../contex/SocketContext";
import toast from "react-hot-toast";

export default function Messages() {
  const { currentUser } = useUserStore();
  const { setMessages, conversationId, addMessage, reset } = useMessagesStore();
  const queryClient = useQueryClient();
  const { socket } = useContext(SocketContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () =>
      await apiRequest.get(`/conversation`).then((res) => {
        return res.data;
      }),
  });
  function isRead(messages) {
    const unreadMessage = messages
      .filter((message) => message.receiverId === currentUser.id)
      .filter((message) => message.read === false);
    return unreadMessage.length > 0 ? true : false;
  }

  useEffect(() => {
    if (data && socket) {
      socket.on("getMessage", (data) => {
        if (conversationId === data.conversationId) {
          const { receiver, ...others } = data;
          addMessage(others);
        } else if (data.receiver.id === currentUser.id) {
          toast(
            <div
              className="flex gap-x-5 items-center w-[30vw] cursor-pointer"
              onClick={() => {
                setMessages(data.conversationId, data.receiver);
                document.getElementById("message").showModal();
                queryClient.invalidateQueries({
                  queryKey: ["conversations"],
                });
              }}
            >
              <img
                src={data.receiver.img}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <div className="flex flex-col justify-center w-full">
                <h2 className="text-sm font-bol capitalize">
                  {data.receiver.name}
                </h2>
                <p className="text-xs font-thin">{data.text}</p>
              </div>
            </div>,
            {
              position: "top-right",
              duration: 3000,
            }
          );
        }
      });
    }
    return () => {
      if (socket) {
        socket.off("getMessage");
      }
    };
  }, [
    addMessage,
    conversationId,
    currentUser.id,
    data,
    queryClient,
    setMessages,
    socket,
  ]);
  return (
    <div className="p-3">
      <div className="flex ic justify-between mb-3">
        <h1 className="font-semibold text-2xl lg:text-4xl">Messages</h1>
      </div>
      <div className="overflow-x-auto lg:h-[60vh]">
        <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}

          <thead>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <>
                {Array(5)
                  .fill()
                  .map((item, i) => (
                    <tr className="gap-x-2 mt-3" key={i}>
                      <td className="skeleton h-9"></td>
                      <td className="skeleton h-9"></td>
                      <td className="skeleton h-9"></td>
                      <td className="skeleton h-9"></td>
                    </tr>
                  ))}
              </>
            ) : error ? (
              <Error />
            ) : (
              data.map((item, i) => (
                <tr
                  onClick={() => {
                    setMessages(item.id, item.receiver);
                    document.getElementById("message").showModal();
                    queryClient.invalidateQueries({
                      queryKey: ["conversations"],
                    });
                  }}
                  key={i}
                  className={`cursor-pointer ${
                    isRead(item.messages) ? "bg-gray-300/10" : ""
                  }`}
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.receiver.img} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold capitalize">
                          {item.receiver.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {item.receiver.countryName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="max-w-[30vw]">{item.lastMessage}</td>
                  <td>{moment(item.updatedAt).fromNow()}</td>
                  <td>
                    <button
                      to={"/messages"}
                      className="btn  btn-circle btn-sm btn-success text-white lg:btn-md"
                    >
                      <LiaBookReaderSolid />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <dialog id="message" className="modal">
        <MessageContainer />
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => reset()}>close</button>
        </form>
      </dialog>
    </div>
  );
}
