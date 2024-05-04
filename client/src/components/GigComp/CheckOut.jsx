import { useState } from "react";
import { BiRevision } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaHeart, FaShare } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import useUserStore from "../../useStore/useUserStore";
import toast from "react-hot-toast";
import apiRequest from "../../lib/axios";
import useGigStore from "../../useStore/useGigStore";
export default function CheckOut() {
  const { gig, likedPost, likePostLength, handleLikePost } = useGigStore();
  const { currentUser } = useUserStore();
  const [loading, setLoading] = useState(false);

  async function handleLike(id) {
    if (!currentUser) {
      document.getElementById("loginModal").showModal();

      return;
    }
    try {
      setLoading(true);
      handleLikePost();
      await apiRequest.post("/gig/like", { gigId: id });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full lg:sticky lg:top-40 lg:max-h-72">
      <div className="flex gap-10 items-center justify-end">
        <div className="tooltip" data-tip="Save to list">
          <div
            className="tooltip tooltip-open text-xl tooltip-right"
            data-tip={likePostLength}
          >
            <button
              className="btn btn-ghost text-xl px-1"
              onClick={() => {
                handleLike(gig.id);
              }}
              disabled={loading}
            >
              <FaHeart
                className={`${likedPost ? "text-red-500" : "text-gray-500"}`}
              />
            </button>
          </div>
        </div>
        <div className="tooltip" data-tip="Share this gig">
          <button className="btn btn-ghost">
            <FaShare />
          </button>
        </div>
      </div>
      <div className="input-bordered border rounded-md p-3 flex flex-col gap-y-4">
        <div className="flex justify-between w-full items-center">
          <h2 className="font-semibold capitalize">{gig.shortTitle}</h2>
          <span className="text-xl font-semibold">${gig.price}</span>
        </div>
        <p className="opacity-70 text-justify capitalize text-sm">
          {gig.shortDesc}
        </p>
        <div className="font-semibold items-center flex w-full justify-between">
          <div className="flex gap-1 items-center">
            <CiTimer />
            <span>{gig.deliveryTime} days delivery</span>
          </div>
          <div className="flex gap-1 items-center">
            <BiRevision />
            <span>{gig.revisionNumber} Revision</span>
          </div>
        </div>
        <div className="opacity-70 flex flex-col justify-center gap-y-2">
          {gig?.features?.map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              <IoCheckmarkDoneOutline className="text-green-600" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <button
          className="btn btn-success text-white"
          onClick={() => toast("No payment service yet")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
