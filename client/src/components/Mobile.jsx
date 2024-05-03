import toast from "react-hot-toast";
import apiRequest from "../lib/axios";
import useUserStore from "../useStore/useUserStore";
import { SocketContext } from "../contex/SocketContext";
import { useContext } from "react";

export default function Mobile() {
  const { currentUser, setCurrentUser } = useUserStore();
  const { socket } = useContext(SocketContext);

  async function handleLogout() {
    try {
      await apiRequest.post("/auth/logout");
      setCurrentUser(null);
      socket?.emit("logout", currentUser?.id);

    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <div className="flex flex-col justify-center gap-y-3">
      {!currentUser ? (
        <div className="flex justify-between">
          <button
            className=" btn-neutral btn"
            onClick={() => document.getElementById("registerModal").showModal()}
          >
            Join Fiverr
          </button>
          <button
            className="btn-outline btn-neutral btn"
            onClick={() => document.getElementById("loginModal").showModal()}
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className="flex gap-x-2 items-center">
          <div className="avatar">
            <div className="w-16 mask mask-hexagon">
              <img src={currentUser.img} />
            </div>
          </div>
          <span className="font-semibold text-xl capitalize">
            {currentUser.name}
          </span>
        </div>
      )}
      <li>
        <button className="btn btn-ghost">Fiverr Business</button>
      </li>
      <li>
        <button className="btn btn-ghost">Explore</button>
      </li>
      <li>
        <button className="btn btn-ghost">Explore</button>
      </li>
      <li>
        <button
          className="btn btn-ghost"
          onClick={() => {
            if (!currentUser) {
              document.getElementById("loginModal").showModal();
              return;
            }
            document.getElementById("sellerModal").showModal();
          }}
        >
          Become a seller
        </button>
      </li>
      {currentUser && (
        <button onClick={handleLogout} className="btn btn-error text-white">
          Logout
        </button>
      )}
    </div>
  );
}
