import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

export default function GigCard({ gig }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/gig/${gig.id}`)}
      className="card mt-3 card-compact bg-base-100 shadow-xl btn btn-ghost h-[55vh] w-[25vw] flex-col flex-nowrap items-start"
    >
      <figure className="px-5 pt-5">
        <img src={gig.images[0]} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body flex flex-col justify-center items-start w-full">
        <div className="flex items-center gap-1 ">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={gig.user.img} />
            </div>
          </div>
          <p className="capitalize">{gig.user.name}</p>
        </div>
        <span className="text-justify">{gig.shortDesc}</span>
        {!isNaN(gig.totalStars / gig.starNumber) && (
          <StarRating
            starNumber={Math.round(gig.totalStars / gig.starNumber)}
          />
        )}
        <div className="border-t input-bordered w-full flex items-center justify-between">
          <div className="btn btn-sm btn-ghost">
            <FaHeart className="text-red-500" />
          </div>
          <div className="flex flex-col">
            <span className="label-text font-thin">Starting at</span>
            <span className="font-semibold text-lg">${gig.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
