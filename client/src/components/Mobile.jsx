import React from "react";

export default function Mobile() {
  const user = true;
  return (
    <div className="flex flex-col justify-center gap-y-3">
      {!user ? (
        <div className="flex justify-between">
          <button className=" btn-neutral btn">Join Fiverr</button>
          <button className="btn-outline btn-neutral btn">Sign In</button>
        </div>
      ) : (
        <div className="flex gap-x-2 items-center">
          <div className="avatar">
            <div className="w-16 mask mask-hexagon">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <span className="font-semibold text-xl">Mittie Stanley</span>
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
      <button className="btn btn-error text-white">Logout</button>
    </div>
  );
}
