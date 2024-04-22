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
  const data = [
    {
      name: "Kay Kim",
      img: "/freelance3.jpg",
      logo: "/logo1.png",
      desc: `"It's extremely exciting that Fiverr has freelancers from all over the world - it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping someone is working"`,
      video: "/video/second.mp4",
    },
    {
      name: "Kay Kim",
      img: "/freelance1.jpg",
      logo: "/logo2.png",
      desc: `"When you wan to create your business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
      video: "/video/third.mp4",
    },
    {
      name: "Brighid Gannon (DNP,PMHNP-BC), Co-Founder",
      img: "/freelance2.jpg",
      logo: "/logo1.png",
      desc: `"We Use Fiver fro SEO, our logo, website, copy, animated videos-literally everything. it was like working with a human right next to you versus being across the world"`,
      video: "/video/first.mp4",
    },
  ];
  return (
    <Slider breakPoints={breakPoints}>
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col lg:flex-row gap-x-12 lg:h-[43vh] p-3">
            <div className="lg:flex-[1.3] h-[50vh] lg:h-full w-full">
              <div
                className="relative w-full h-full overflow-hidden rounded-md"
                onClick={() => handleVideo(item.video)}
              >
                <img
                  src={item.img}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
                <button className="btn btn-circle bg-black/25 absolute top-[50%] left-[45%] group">
                  <FaPlay className="text-white text-xl group-hover:text-black" />
                </button>
              </div>
            </div>
            <div className="lg:flex-[2] flex mt-3 lg:mt-0 flex-col justify-center h-full">
              <div className="flex w-full items-center">
                <span className="text-xl text-gray-500">
                  {item.name}, Co-Founder
                </span>
                <div className="divider divider-horizontal" />
                <img src={item.logo} alt="" className="w-[10vw]" />
              </div>
              <div className="mt-3 text-2xl lg:text-4xl font-semibold font-mono">
                {item.desc}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}
