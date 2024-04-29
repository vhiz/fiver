import { useContext, useEffect } from "react";
import { IoIosThunderstorm } from "react-icons/io";
import { Link, useAsyncError, useNavigate } from "react-router-dom";

export default function Error() {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center flex-col gap-y-5">
      <IoIosThunderstorm className="text-[8rem] animate-wobble animate-infinite" />
      <h1 className="text-2xl">Something went wrong</h1>
      <Link to={"/"} className="btn btn-info">
        Go to Home
      </Link>
    </div>
  );
}
