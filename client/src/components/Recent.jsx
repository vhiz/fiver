import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";

export default function Recent() {
  const breakPoints = {
    1024: { slidesPerView: 3, spaceBetween: 30 },
  };
  return (
    <Slider
      h2={"Get inspired with projects made by our freelancers"}
      breakPoints={breakPoints}
    >
      {Array(10)
        .fill()
        .map((item, i) => (
          <SwiperSlide key={i}>
            <div className="card card-compact bg-base-100 shadow-xl btn btn-ghost h-[50vh] flex-col flex-nowrap items-start">
              <figure className="px-5 pt-5">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body flex flex-row gap-x-2 items-center">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col gap-y-1">
                  <h2 className="card-title">Shoes!</h2>
                  <p>Lottie Collier</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Slider>
  );
}
