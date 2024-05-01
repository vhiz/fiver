import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Mobile from "./Mobile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Seller from "./Seller";
import useUserStore from "../useStore/useUserStore";
import MessageContainer from "./MessageComp/MessageContainer";

export default function Layout() {
  const { currentUser } = useUserStore();

  useEffect(() => {
    if (currentUser) return;
    setTimeout(() => {
      document.getElementById("registerModal").showModal();
    }, 5000);
  }, [currentUser]);
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <Outlet />
        <dialog id="loginModal" className="modal">
          <Login />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="registerModal" className="modal">
          <Register />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="sellerModal" className="modal">
          <Seller />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <dialog id="message" className="modal">
          <MessageContainer />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <Footer />
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-3 w-80 min-h-full bg-base-200 text-base-content">
          <Mobile />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
