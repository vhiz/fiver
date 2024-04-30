import { useQuery } from "@tanstack/react-query";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import apiRequest from "../lib/axios";
import Error from "./Error";
import { Link } from "react-router-dom";

export default function Recent({ tag, h2 }) {
  const breakPoints = {
    768: { slidesPerView: 2, spaceBetween: 30 },
    960: { slidesPerView: 3, spaceBetween: 30 },
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigs", tag],
    queryFn: async () =>
      await apiRequest.get(`/gig?sort=${tag}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Slider h2={data?.length > 0 && h2} breakPoints={breakPoints}>
      {isLoading ? (
        <div className="w-full flex gap-2">
          <div className="skeleton h-[40vh] w-[30vw]"></div>
          <div className="skeleton h-[40vh] w-[30vw]"></div>
          <div className="skeleton h-[40vh] w-[30vw]"></div>
          <div className="skeleton h-[40vh] w-[30vw]"></div>
        </div>
      ) : error ? (
        <Error />
      ) : (
        data.map((item, i) => (
          <SwiperSlide key={i}>
            <Link to={`/gig/${item.id}`} className="card card-compact bg-base-100 shadow-xl btn btn-ghost h-[50vh] flex-col flex-nowrap items-start">
              <figure className="px-5 pt-5">
                <img
                  src={item.images[0]}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body flex flex-row gap-x-2 items-center">
                <img
                  src={item.user.img}
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col gap-y-1 items-start">
                  <h2 className="text-start font-semibold">{item.title}</h2>
                  <p className="font-thin capitalize">{item.user.name}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))
      )}
    </Slider>
  );
}
