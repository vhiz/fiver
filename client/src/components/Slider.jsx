import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Slider({ children, h2, breakPoints }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="my-20 p-3 relative">
      <h2 className="mb-4 font-semibold text-2xl lg:text-3xl text-gray-400">{h2}</h2>
      <Swiper
        breakpoints={{
          ...breakPoints,
        }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        loop={true}
        modules={[Navigation]}
        className="h-full w-full flex items-center justify-center p-3"
      >
        {children}
      </Swiper>
      <div className="absolute hidden xl:flex top-[50%] left-0 p-3  justify-between w-full z-10 h-0">
        <button ref={prevRef} className="btn btn-circle ">
          <FaArrowLeftLong />
        </button>
        <button ref={nextRef} className="btn btn-circle">
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
