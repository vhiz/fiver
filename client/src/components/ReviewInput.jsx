import { FiSend } from "react-icons/fi";
import useUserStore from "../useStore/useUserStore";
import { useState } from "react";
import toast from "react-hot-toast";
import apiRequest from "../lib/axios";

export default function ReviewInput({ gig }) {
  const { currentUser } = useUserStore();
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");

  async function handleSend(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await apiRequest.post();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className="w-full flex items-center gap-3" onSubmit={handleSend}>
      <div className="avatar">
        <div className="lg:w-12 rounded-full">
          <img src={currentUser.img} />
        </div>
      </div>
      <div className="w-full justify-center">
        <div className="rating rating-sm">
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
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          disabled={gig?.userId === currentUser.id}
        />
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
