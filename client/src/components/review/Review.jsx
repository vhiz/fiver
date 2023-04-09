import { useQuery } from "@tanstack/react-query";
import "./review.scss";
import { makeRequest } from "../../axios";

export default function Review({ review }) {
  const { error, isLoading, data } = useQuery(
    ["reviewsuser", review?.userId],
    async () => {
      const res = await makeRequest.get(`/users/${review?.userId}`);
      return res.data;
    }
  );
  return (
    <div className="review">
      {isLoading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : error ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/icon/no.png"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/icon/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/icon/thumbup.png" alt="" />
        <span>Yes</span>
        <img src="/icon/thumbdown.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
}
