import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import { FaPlay } from "react-icons/fa6";
import useVideoStore from "../useStore/useVideoStore";

export default function Testimonials() {
  const { setVideo } = useVideoStore();

  const breakPoints = {
    1024: { slidesPerView: 1, spaceBetween: 30 },
  };
  function handleVideo(file) {
    document.getElementById("videoModal").showModal();
    setVideo(file);
  }
  return (
    <Slider breakPoints={breakPoints}>
      <SwiperSlide>
        <div className="flex gap-x-12 h-[43vh]">
          <div className="flex-[1.3]">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img
                src="/freelance3.jpg"
                alt=""
                className="absolute w-full h-full object-cover"
              />
              <button
                className="btn btn-circle bg-black/25 absolute top-[50%] left-[45%] group"
                onClick={() => handleVideo("/video/second.mp4")}
              >
                <FaPlay className="text-white text-xl group-hover:text-black" />
              </button>
            </div>
          </div>
          <div className="flex-[2] flex flex-col justify-center h-full">
            <div className="flex w-full items-center">
              <span className="text-xl text-gray-500">Kay Kim, Co-Founder</span>
              <div className="divider divider-horizontal" />
              <img src="/logo1.png" alt="" className="w-[10vw]" />
            </div>
            <div className="mt-3 text-4xl font-semibold font-mono">
                {`"It's extremely exciting that Fiverr has freelancers from all over the world - it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping someone is working"`}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex gap-x-12 h-[43vh]">
          <div className="flex-[1.3]">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img
                src="/freelance1.jpg"
                alt=""
                className="absolute w-full h-full object-cover"
              />
              <button
                className="btn btn-circle bg-black/25 absolute top-[50%] left-[45%] group"
                onClick={() => handleVideo("/video/third.mp4")}
              >
                <FaPlay className="text-white text-xl group-hover:text-black" />
              </button>
            </div>
          </div>
          <div className="flex-[2] flex flex-col justify-center h-full">
            <div className="flex w-full items-center">
              <span className="text-xl text-gray-500">Tim and Dan Joo, Co-Founder</span>
              <div className="divider divider-horizontal" />
              <img src="/logo2.png" alt="" className="w-[10vw]" />
            </div>
            <div className="mt-3 text-4xl font-semibold font-mono">
                {`"When you wan to create your business bigger than yourself, you need a lot of help. That's what Fiverr does."`}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex gap-x-12 h-[43vh]">
          <div className="flex-[1.3]">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img
                src="/freelance2.jpg"
                alt=""
                className="absolute w-full h-full object-cover"
              />
              <button
                className="btn btn-circle bg-black/25 absolute top-[50%] left-[45%] group"
                onClick={() => handleVideo("/video/first.mp4")}
              >
                <FaPlay className="text-white text-xl group-hover:text-black" />
              </button>
            </div>
          </div>
          <div className="flex-[2] flex flex-col justify-center h-full">
            <div className="flex w-full items-center">
              <span className="text-xl text-gray-500">Brighid Gannon (DNP,PMHNP-BC), Co-Founder</span>
              <div className="divider divider-horizontal" />
              <img src="/logo2.png" alt="" className="w-[10vw]" />
            </div>
            <div className="mt-3 text-4xl font-semibold font-mono">
                {`"We Use Fiver fro SEO, our logo, website, copy, animated videos-literally everything. it was like working with a human right next to you versus being across the world"`}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Slider>
  );
}
