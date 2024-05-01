import { useQuery } from "@tanstack/react-query";
import { LiaBookReaderSolid } from "react-icons/lia";
import apiRequest from "../lib/axios";
import Error from "../components/Error";
import useUserStore from "../useStore/useUserStore";
import useMessagesStore from "../useStore/useMessagesStore";

export default function Messages() {
  const { currentUser } = useUserStore();
  const { setMessages } = useMessagesStore();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () =>
      await apiRequest.get(`/conversation`).then((res) => {
        return res.data;
      }),
  });
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
              <div className="flex flex-col gap-2">
                <div className="skeleton h-9 w-full"></div>
                <div className="skeleton h-9 w-full"></div>
                <div className="skeleton h-9 w-full"></div>
                <div className="skeleton h-9 w-full"></div>
                <div className="skeleton h-9 w-full"></div>
                <div className="skeleton h-9 w-full"></div>
                <div className="skeleton h-9 w-full"></div>
              </div>
            ) : error ? (
              <Error />
            ) : (
              data.map((item, i) => (
                <tr
                  onClick={() => {
                    setMessages(item.id, item.receiver);
                    document.getElementById("message").showModal();
                  }}
                  key={i}
                  className="cursor-pointer"
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
                  <td>2 days ago</td>
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
    </div>
  );
}
