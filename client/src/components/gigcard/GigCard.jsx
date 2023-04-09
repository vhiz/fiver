import "./gigcard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
export default function GigCard({ item }) {
  const { error, isLoading, data } = useQuery(["gigCard", item], async () => {
    const res = await makeRequest.get(`/users/${item.userId}`);
    return res.data;
  });
  return (
    <Link to={"/app/gig/" + item._id} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "Loading..."
          ) : error ? (
            "Something went worng"
          ) : (
            <div className="user">
              <img src={data.img || "/icon/no.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.shortDesc}</p>
          <div className="star">
            <img src="/icon/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.startNumber) &&
                Math.round(item.totalStars / item.startNumber)}
            </span>
          </div>
        </div>
        <div className="details">
          <img src="/icon/like.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
