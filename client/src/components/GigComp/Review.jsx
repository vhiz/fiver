import { FaRegThumbsDown, FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
export default function Review() {
  return (
    <div className="flex flex-col justify-center gap-y-3 btn btn-ghost h-max items-start p-3">
      <div className="flex items-center gap-x-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-sm">May Sanchez</span>
          <span className="text-xs"> Nigeria</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs opacity-70">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <p>5</p>
      </div>
      <p className="text-sm opacity-75 text-justify">
        know listen careful small blind roar original path aware consonant sound
        airplane education very pink afternoon beauty alike detail primitive
        parallel if winter movement
      </p>
      <div className=" flex gap-x-1 items-center">
        Helpful?{" "}
        <button className="btn btn-ghost btn-sm">
          yes <FaRegThumbsUp />{" "}
        </button>
        <button className="btn btn-ghost btn-sm">
          yes <FaRegThumbsDown />{" "}
        </button>
      </div>
    </div>
  );
}
