import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Toggle from "./Toggle";
export default function Navbar() {
  const [active, setActive] = useState(false);
  const user = {
    isSeller: true,
  };
  function isActive() {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        pathname === "/" ? "fixed" : "sticky"
      } z-50 top-0 left-0 bg-base-100 md:bg-transparent w-screen flex flex-col duration-300 `}
    >
      <div
        className={`flex w-full justify-between h-[10vh] duration-300 p-3 ${
          active || pathname !== "/"
            ? "md:bg-base-100 md:text-gray-400"
            : "md:bg-transparent md:text-white"
        }`}
      >
        <div className="flex">
          <label
            htmlFor="my-drawer"
            className="flex btn btn-ghost btn-circle items-center justify-center lg:hidden"
          >
            <IoMenu />
          </label>
          <Link
            to={"/"}
            className="btn hidden md:flex btn-ghost text-3xl font-semibold font-mono"
          >
            Fiverr<span className="text-green-400">.</span>
          </Link>
        </div>

        <div className="text-3xl flex  font-semibold font-mono gap-x-5">
          <Link
            to={"/"}
            className="btn btn-ghost text-3xl font-semibold font-mono md:hidden"
          >
            Fiverr<span className="text-green-400">.</span>
          </Link>
          <label
            className={`w-full hidden md:flex input input-bordered items-center pr-0 gap-2 lg:w-[30vw] ${
              active || pathname !== "/"
                ? "animate-flipInX"
                : "animate-flipOutX"
            }`}
          >
            <CiSearch className="w-6 h-6 opacity-70 text-gray-400" />
            <input
              type="text "
              className="grow text-gray-400"
              placeholder="What are you looking for"
            />
            <button className="bg-green-500 hidden lg:block btn text-white">
              Search
            </button>
          </label>
        </div>
        <div className="flex px-3">
          <div className="hidden lg:flex">
            <button className="btn btn-ghost">Fiverr Business</button>
            <button className="btn btn-ghost">Explore</button>
            <button className="btn btn-ghost">Become a seller</button>
          </div>
          <Toggle />
          {!user ? (
            <div className="flex gap-x-3">
              <button className="hidden md:block btn btn-ghost">Sign in</button>
              <button
                className={`btn btn-ghost md:btn-outline text-green-400 btn-success ${
                  active || pathname !== "/"
                    ? "md:border-green-400 text-green-400"
                    : "md:border-white md:text-white"
                }`}
              >
                Join
              </button>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="avatar">
                  <div className="w-12 mask mask-hexagon">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-gray-500 rounded-box w-52"
              >
                {user?.isSeller && (
                  <>
                    <li>
                      <Link to={"/mygigs"}>Gigs</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to={"/orders"}>Orders</Link>
                </li>
                <li>
                  <Link to={'/messages'}>Messages</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        className={`px-3 hidden lg:flex justify-between border-y input-bordered bg-base-100 ${
          active || pathname !== "/" ? "animate-flipInX" : "animate-flipOutX"
        }`}
      >
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Graphics & Design
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Video & Animation
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Writing & Translation
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Ai Services
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Digital Marketing
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Music & Audio
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">
          Programming & Tech
        </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">Business </a>
        <a className="h-4 text-gray-400 font-thin btn btn-ghost ">Lifestyle </a>
      </div>
    </div>
  );
}
