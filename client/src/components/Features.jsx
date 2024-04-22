import { CiCircleCheck } from "react-icons/ci";
import VideoModel from "./VideoModel";
import { FaPlay } from "react-icons/fa";
import useVideoStore from "../useStore/useVideoStore";

export default function Features() {
  const { setVideo } = useVideoStore();

  function handleVideo() {
    document.getElementById("videoModal").showModal();
    setVideo("/video/first.mp4");
  }
  return (
    <div className="p-3 flex w-full gap-14">
      <div className="flex-[1.5]">
        <h2 className="font-bold font-serif mb-3 text-3xl">
          A whole world of freelance talent at your fingertips
        </h2>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <div className="flex items-center gap-2 font-semibold">
            <CiCircleCheck className="text-gray-500 text-xl" />
            <h3>The best for every budget</h3>
          </div>
          <span className="text-gray-500">
            Find high quality services at every point. No hourly rates just
            project based pricing.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <div className="flex items-center gap-2 font-semibold">
            <CiCircleCheck className="text-gray-500 text-xl" />
            <h3>Quality work done quickly</h3>
          </div>
          <span className="text-gray-500">
            Find the right freelancer to begin working on your projects within
            minutes.
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <div className="flex items-center gap-2 font-semibold">
            <CiCircleCheck className="text-gray-500 text-xl" />
            <h3>Protected payments, every time</h3>
          </div>
          <span className="text-gray-500">
            {`Always know what you'll pay upfront. Your work payment isn't
            released until you approve the work.`}
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <div className="flex items-center gap-2 font-semibold">
            <CiCircleCheck className="text-gray-500 text-xl" />
            <h3>24/7 support</h3>
          </div>
          <span className="text-gray-500">
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </span>
        </div>
      </div>
      <div className="flex-[2] flex items-center justify-center">
        <div className="relative h-[50vh] w-[85%] overflow-hidden rounded-md">
          <img
            src="/freelance1.jpg"
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <button
            className="btn btn-circle bg-black/25 absolute top-[50%] left-[45%] group"
            onClick={handleVideo}
          >
            <FaPlay className="text-white text-xl group-hover:text-black" />
          </button>
        </div>

        <VideoModel />
      </div>
    </div>
  );
}
