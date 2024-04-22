import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
const data = [
  {
    id: 1,
    title: "Ai Services",
    img: "/ai.jpg",
  },
  {
    id: 1,
    title: "Animation",
    img: "/animation.jpg",
  },
  {
    id: 1,
    title: "Data Entry",
    img: "/data.jpg",
  },
  {
    id: 1,
    title: "Illustration",
    img: "/illustration.jpg",
  },
  {
    id: 1,
    title: "Programming & Tech",
    img: "/programming.jpg",
  },
  {
    id: 1,
    title: "SEO",
    img: "/seo.jpg",
  },
  {
    id: 1,
    title: "Social",
    img: "/social.jpg",
  },
  {
    id: 1,
    title: "Translation",
    img: "/translation.jpg",
  },
];
export default function Categories() {
  const breakPoints = {
    1310: { slidesPerView: 5, spaceBetween: 30 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    960: { slidesPerView: 3, spaceBetween: 30 },
  };
  return (
    <Slider h2={"Popular Professional Services"} breakPoints={breakPoints}>
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="w-full h-[50vh] relative rounded-md overflow-hidden bg-red-300 btn">
            <div className="absolute z-10 text-white top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-white/5 p-2">
              <span className="font-thin">Reach more customers</span>
              <h3 className="font-semibold text-xl">{item.title}</h3>
            </div>
            <img
              src={item.img}
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}
