import { FaRegThumbsDown, FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
export default function Review({ review }) {
  return (
    <div className="flex flex-col justify-center gap-y-3 btn btn-ghost h-max items-start p-3">
      <div className="flex items-center gap-x-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={review?.user.img} />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-sm capitalize">
            {review.user.name}
          </span>
          <span className="text-xs"> {review.user.countryName}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs opacity-70">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <FaStar className="text-yellow-500" key={i} />
          ))}
      </div>
      <p className="text-sm opacity-75 text-justify">{review.desc}</p>
      <div className=" flex gap-x-1 items-center">
        Helpful?{" "}
        <button className="btn btn-ghost btn-sm">
          yes <FaRegThumbsUp />{" "}
        </button>
        <button className="btn btn-ghost btn-sm">
          no <FaRegThumbsDown />{" "}
        </button>
      </div>
    </div>
  );
}
