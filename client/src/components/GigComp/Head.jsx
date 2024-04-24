import { FaStar } from "react-icons/fa";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import Review from "./Review";

export default function Head() {
  const breakPoints = {
    960: { slidesPerView: 1, spaceBetween: 30 },
  };
  return (
    <div className="my-4 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold capitalize opacity-90">
        quarter how curve birthday machinery throw time baby
      </h2>
      <div className="flex items-center gap-x-2">
        <div className="avatar">
          <div className="w-10 mask mask-squircle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <span className="font-semibold">Joe Walsh</span>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <p>5</p>
        </div>
      </div>
      <div className="w-[57vw]">
        <Slider breakPoints={breakPoints} margin={"5"}>
          {Array(4)
            .fill()
            .map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-[65vh] flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1713694847163-f9fce967c146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                    alt=""
                    className="h-full min-w-[50%] object-cover max-w-[70%]"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Slider>
      </div>
      <h2 className="font-semibold text-xl opacity-90">About This Gig</h2>
      <p className="text-justify capitalize mb-8 px-4 opacity-75">
        noon shout snow plates quick seldom came jungle select form who far
        silver grew add wait present foot pressure attack word medicine memory
        paint. fewer mighty now coal small disappear hope open crowd receive
        threw nest voice unit hold title arrange exactly word clothes actual
        past dark send noon shout snow plates quick seldom came jungle select
        form who far silver grew add wait present foot pressure attack word
        medicine memory paint. fewer mighty now coal small disappear hope open
        crowd receive threw nest voice unit hold title arrange exactly word
        clothes actual past dark send noon shout snow plates quick seldom came
        jungle select form who far silver grew add wait present foot pressure
        attack word medicine memory paint. fewer mighty now coal small disappear
        hope open crowd receive threw nest voice unit hold title arrange exactly
        word clothes actual past dark send noon shout snow plates quick seldom
        came jungle select form who far silver grew add wait present foot
        pressure attack word medicine memory paint. fewer mighty now coal small
        disappear hope open crowd receive threw nest voice unit hold title
        arrange exactly word clothes actual past dark send
      </p>
      <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-semibold">About The Seller</h2>
        <div className="flex items-center gap-x-3">
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold text-sm">Douglas Hines</h3>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <p>5</p>
            </div>
            <button className="btn btn-outline btn-info">Contact Me</button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col h-[40vh] input-bordered border mt-3 rounded-md">
        <div className="h-[75%] p-3 gap-2 flex flex-col flex-wrap">
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">From</h3>
            <span className="font-thin">Nigeria</span>
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
            <span className="font-thin">2022</span>
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <h3 className="font-semibold">Last delivery</h3>
            <span className="font-thin">1 day ago</span>
          </div>
        </div>
        <div className="border-t input-bordered h-[25%] w-full p-3 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          reiciendis amet eligendi. Eligendi adipisci perspiciatis consectetur
          quia ipsam labore nostrum laboriosam commodi veniam harum ipsa nam,
          facilis reprehenderit qui rerum?
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-y-3">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
