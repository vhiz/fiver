import { FiSend } from "react-icons/fi";
import useUserStore from "../useStore/useUserStore";
import { useState } from "react";
import toast from "react-hot-toast";
import apiRequest from "../lib/axios";
import useGigStore from "../useStore/useGigStore";

export default function ReviewInput() {
  const { gig, addReview } = useGigStore();

  const { currentUser } = useUserStore();
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");
  async function handleSend(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await apiRequest.post("/review", {
        desc,
        star: rating,
        gigId: gig.id,
      });
      addReview(res.data);
      setDesc("");
      setRating(1);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="w-full flex items-center gap-3" onSubmit={handleSend}>
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={currentUser.img} />
        </div>
      </div>
      <div className="w-full justify-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          disabled={gig?.userId === currentUser.id}
        />
        <div className="rating rating-sm mt-2">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={1}
            checked
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            value={2}
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="radio"
            name="rating-2"
            value={3}
            onChange={(e) => setRating(e.target.value)}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            value={4}
            onChange={(e) => setRating(e.target.value)}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            value={5}
            onChange={(e) => setRating(e.target.value)}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <button
        disabled={gig?.userId === currentUser.id || loading}
        className="btn btn-ghost btn-circle"
      >
        <FiSend />
      </button>
    </form>
  );
}
