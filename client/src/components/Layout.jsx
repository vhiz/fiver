import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Mobile from "./Mobile";

export default function Layout() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        <Outlet />
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
    </div>
  );
}
