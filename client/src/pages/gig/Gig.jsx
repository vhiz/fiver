import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./gig.scss";
import { Slider } from "infinite-react-carousel";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import Reviews from "../../components/reviews/Reviews";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";

export default function Gig() {
  const settings = {
    slidesToShow: 1,
    arrowsScroll: 1,
  };
  const { id } = useParams();

  const { error, isLoading, data } = useQuery(["gig", id], async () => {
    const res = await makeRequest.get(`/gigs/single/${id}`);
    return res.data;
  });
  const userId = data?.userId;

  const { currentUser } = useContext(AuthContext);
  const {
    error: userE,
    isLoading: userL,
    data: userD,
  } = useQuery(
    ["usergig", userId],
    async () => {
      const res = await makeRequest.get(`/users/${userId}`);
      return res.data;
    },
    { enabled: !!userId }
  );

  return (
    <div className="gig">
      {isLoading ? (
        <div className="load">
          <img src="/icon/loading.gif" alt="" />
        </div>
      ) : error ? (
        <div className="load">
          <img src="/icon/error.gif" alt="" />
        </div>
      ) : (
        <div className="contanier">
          <div className="left">
            <Breadcrumbs cat={data.cat} />
            <h1>{data.title}</h1>
            {userL ? (
              <div className="load">
                <img src="/icon/loading.gif" alt="" />
              </div>
            ) : userE ? (
              <div className="load">
                <img src="/icon/error.gif" alt="" />
              </div>
            ) : (
              <div className="user">
                <img className="pp" src={userD.img || "/icon/no.png"} alt="" />
                <span>{userD.username}</span>
                {!isNaN(data.totalStars / data.startNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.startNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/icon/star.png" alt="" key={i} />
                      ))}
                    <span>
                      {Math.round(data.totalStars / data.startNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}
            <Slider {...settings} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>About this gig</h2>
            <p>{data.desc}</p>
            {userL ? (
              <div className="load">
                <img src="/icon/loading.gif" alt="" />
              </div>
            ) : userE ? (
              <div className="load">
                <img src="/icon/error.gif" alt="" />
              </div>
            ) : (
              <div className="seller">
                <h2>About the seller</h2>
                <div className="user">
                  <img src={userD.img || "/icon/no.png"} alt="" />
                  <div className="info">
                    <span>{userD.username}</span>
                    {!isNaN(data.totalStars / data.startNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.startNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/icon/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.startNumber)}
                        </span>
                      </div>
                    )}
                    {currentUser && <button>Contact me</button>}
                  </div>
                </div>

                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span>From</span>
                      <span>{userD.country}</span>
                    </div>
                    <div className="item">
                      <span>Avg. response time</span>
                      <span>4 hours</span>
                    </div>
                    <div className="item">
                      <span>Languages</span>
                      <span>English, Spanish</span>
                    </div>
                    <div className="item">
                      <span>Member since</span>
                      <span>{moment(userD.createdAt).calendar()}</span>
                    </div>
                    <div className="item">
                      <span>Last delivery</span>
                      <span>3 days</span>
                    </div>
                  </div>
                  <hr />
                  <p>{userD.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>${data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/icon/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/icon/sync.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="components">
              {data.features.map((f) => (
                <div className="item" key={f}>
                  <img src="/icon/mark.png" alt="" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link className="link" to={`/app/pay/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
