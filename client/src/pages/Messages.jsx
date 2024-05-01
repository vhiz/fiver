import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LiaBookReaderSolid } from "react-icons/lia";
import apiRequest from "../lib/axios";
import Error from "../components/Error";
import useUserStore from "../useStore/useUserStore";
import useMessagesStore from "../useStore/useMessagesStore";
import moment from "moment";
import MessageContainer from "../components/MessageComp/MessageContainer";

export default function Messages() {
  const { currentUser } = useUserStore();
  const { setMessages } = useMessagesStore();
  const queryClient = useQueryClient();

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
                  <td>{moment(item.createdAt).fromNow()}</td>
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
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
