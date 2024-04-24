import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GigCard() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/gig/1234")}
      className="card mt-3 card-compact bg-base-100 shadow-xl btn btn-ghost h-[55vh] flex-[1_0_20rem] flex-col flex-nowrap items-start"
    >
      <figure className="px-5 pt-5">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body flex flex-col justify-center items-start">
        <div className="flex items-center gap-1 ">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p>Lottie Collier</p>
        </div>
        <span className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident at
          voluptatum voluptate
        </span>
        <div className="border-t input-bordered w-full flex items-center justify-between">
          <div className="btn btn-sm btn-ghost">
            <FaHeart className="text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="label-text font-thin">Starting at</span>
            <span className="font-semibold text-lg">$200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
