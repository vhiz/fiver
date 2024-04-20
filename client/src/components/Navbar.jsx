import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const user = false;
  function isActive() {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full flex flex-col duration-300 `}
    >
      <div
        className={`flex w-full justify-between h-[10vh] duration-300 p-3 ${
          active ? "bg-base-100 text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="text-3xl flex font-semibold font-mono">
          <h2 className="btn btn-ghost text-3xl font-semibold font-mono">
            Fiverr<span className="text-green-400">.</span>
          </h2>
        </div>
        <div className="flex">
          <button className="btn btn-ghost">Fiverr Business</button>
          <button className="btn btn-ghost">Explore</button>
          <button className="btn btn-ghost">English</button>
          <button className="btn btn-ghost">Become a seller</button>
          {!user ? (
            <div className="flex gap-x-3">
              <button className="btn btn-ghost">Sign in</button>
              <button className="btn btn-ghost btn-outline">Join</button>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-gray-500 rounded-box w-52"
              >
                <li>
                  <a>Gig</a>
                </li>
                <li>
                  <a>Add new Gig</a>
                </li>
                <li>
                  <a>Orders</a>
                </li>
                <li>
                  <a>Messages</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div
        className={`px-3 flex justify-between border-y border-gray-300 bg-white ${
          active ? "animate-flipInX" : "animate-flipOutX"
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
