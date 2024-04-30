import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import Review from "./Review";
import CheckOut from "./CheckOut";
import StarRating from "../StarRating";
import ReviewInput from "../ReviewInput";
import useUserStore from "../../useStore/useUserStore";

import moment from "moment";
import DOMPurify from "dompurify";
import useGigStore from "../../useStore/useGigStore";
import Error from "../Error";

export default function Head({ isLoading, error }) {
  const { currentUser } = useUserStore();
  const breakPoints = {
    960: { slidesPerView: 1, spaceBetween: 30 },
  };
  const { gig } = useGigStore();

  const getTotalStarsAndStarNumber = (gigs) => {
    const starsAndNumbers = gigs.map((gig) => ({
      totalStars: gig.totalStars,
      starNumber: gig.starNumber,
    }));

    const { totalStars, totalStarNumber } = starsAndNumbers.reduce(
      (accumulator, currentValue) => ({
        totalStars: accumulator.totalStars + currentValue.totalStars,
        totalStarNumber: accumulator.totalStarNumber + currentValue.starNumber,
      }),
      { totalStars: 0, totalStarNumber: 0 }
    );

    return { totalStars, totalStarNumber };
  };
  const { totalStars, totalStarNumber } = getTotalStarsAndStarNumber(
    gig?.user?.Gig
  );

  return (
    <div className="my-4 flex flex-col gap-4 w-full">
      <h2 className="lg:text-2xl text-lg font-semibold capitalize opacity-90">
        {gig?.title}
      </h2>
      <div className="flex items-center gap-x-2">
        <div className="avatar">
          <div className="lg:w-10 w-7 mask mask-squircle">
            <img src={gig?.user?.img} />
          </div>
        </div>
        <span className="font-semibold">Joe Walsh</span>
        {!isNaN(gig.totalStars / gig.starNumber) && (
          <StarRating
            starNumber={Math.round(gig.totalStars / gig.starNumber)}
          />
        )}
      </div>
      <div className="w-full lg:w-[57vw]">
        <Slider breakPoints={breakPoints} margin={"5"}>
          {gig?.images.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="lg:h-[65vh] h-[50vh] flex items-center justify-center">
                <img
                  src={item}
                  alt=""
                  className="h-full min-w-[50%] object-cover max-w-[70%]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h2 className="font-semibold text-xl opacity-90">About This Gig</h2>
      <div className="text-justify mb-8 px-4 opacity-75 text-sm lg:text-base">
        {gig.desc}
      </div>
      <div className="lg:hidden">
        {isLoading ? (
          <div className="skeleton h-[40vh] w-full"></div>
        ) : error ? (
          <Error />
        ) : (
          <CheckOut />
        )}
      </div>

      <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-semibold">About The Seller</h2>
        <div className="flex items-center gap-x-3">
          <div className="avatar">
            <div className="lg:w-28 w-20 rounded-full">
              <img src={gig.user.img} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold text-sm capitalize mb-2">
              {gig.user?.name}
            </h3>
            {!isNaN(totalStars / totalStarNumber) && (
              <StarRating
                starNumber={Math.round(totalStars / totalStarNumber)}
              />
            )}
            <button className="btn btn-outline btn-info btn-sm lg:btn-md mt-2">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col lg:h-[40vh] input-bordered border mt-3 rounded-md">
        <div className="h-[75%] p-3 gap-2 flex flex-col flex-wrap">
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">From</h3>
            <span className="font-thin">{gig?.user?.countryName}</span>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">Avg response time</h3>
            <span className="font-thin">4 hrs</span>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">Languages</h3>
            <span className="font-thin">English, Spanish</span>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">Member Since</h3>
            <span className="font-thin">
              {moment(gig?.user?.createdAt).format("MMMM YYYY")}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">Last delivery</h3>
            <span className="font-thin">1 day ago</span>
          </div>
        </div>
        <div className="border-t input-bordered h-[25%] w-full p-3 text-sm">
          {gig?.user?.desc}
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-y-3">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        {currentUser && <ReviewInput />}
        {gig.Review.sort((a, b) => b.createdAt - a.createdAt).map((review) => (
          <Review key={review?.id} review={review} />
        ))}
      </div>
    </div>
  );
}
