import React, { useContext, useState } from "react";
import "./reviews.scss";
import Review from "../review/Review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContex";
export default function Reviews({ gigId }) {
  const { error, isLoading, data } = useQuery(["reviews", gigId], async () => {
    const res = await makeRequest.get(`/reviews/${gigId}`);
    return res.data;
  });

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newReview) => {
      return makeRequest.post("/reviews", newReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
  const [erro, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    try {
      mutation.mutate({ gigId, desc, star });
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : error ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : (
        data.map((review) => <Review review={review} key={review._id} />)
      )}
      {currentUser && !currentUser.isSeller && (
        <div className="add">
          <h3>Add new review</h3>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Write your opinion....." required />
            <select name="" id="" required>
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <button type="submit">Send</button>
            {erro && <span>{erro}</span>}
          </form>
        </div>
      )}
    </div>
  );
}
