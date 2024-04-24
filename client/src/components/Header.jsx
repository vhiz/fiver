import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      id: 1,
      img: "bg-[url(/1.png)]",
      pic: "/1.png",
      color: "bg-[#1b1a1d]",
      name: "Harriet",
      title: "AI Artist",
    },
    {
      id: 2,
      img: "bg-[url(/1.png)]",
      pic: "/1.png",
      color: "bg-[#8d2806]",
      name: "Alan ",
      title: "Video Editor",
    },
    {
      id: 3,
      img: "bg-[url(/3.png)]",
      pic: "/3.png",
      color: "bg-[#013b17]",
      name: "Elva",
      title: "Bar Owner",
    },
    {
      id: 4,
      img: "bg-[url(/4.png)]",
      pic: "/4.png",
      color: "bg-[#60192a]",
      name: "Blake",
      title: "Shoemaker, Designer",
    },
    {
      id: 5,
      img: "bg-[url(/5.png)]",
      pic: "/5.png",
      color: "bg-[#a83e59]",
      name: "Lucas",
      title: "Marketing Expert",
    },
    {
      id: 6,
      img: "bg-[url(/6.png)]",
      pic: "/6.png",
      color: "bg-[#014019]",
      name: "Elsie",
      title: "Fashion Designer",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentIndex(randomIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <div
      className={`w-full h-screen duration-300 ${data[currentIndex].color} text-white flex items-center justify-center px-4`}
    >
      <div className="lg:flex-1 w-full items-center justify-center flex flex-col gap-y-7">
        <h2 className="text- md:text-4xl lg:text-5xl font-semibold capitalize">
          Find the perfect <i className="font-thin">freelance</i> service for
          your business
        </h2>
        <div className="flex flex-col gap-y-2 justify-center w-full">
          <label className="input input-bordered flex items-center pr-0 gap-2 w-full">
            <CiSearch className="w-6 h-6 opacity-70 text-gray-400" />
            <input
              type="text "
              className="grow text-gray-400"
              placeholder="Try`building a mobile app`"
            />
            <button className="bg-green-500 btn  hidden lg:block text-white">
              Search
            </button>
          </label>
          <button className="btn btn-success lg:hidden text-white">Search</button>
        </div>
        <div className="flex gap-x-2 w-full items-center flex-wrap gap-3">
          popular :
          <button className="btn rounded-full btn-sm btn-outline btn-ghost text-white">
            Web design
          </button>
          <button className="btn rounded-full btn-sm btn-outline btn-ghost text-white">
            WordPress
          </button>
          <button className="btn rounded-full btn-sm btn-outline btn-ghost text-white">
            Logo Design
          </button>
          <button className="btn rounded-full btn-sm btn-outline btn-ghost text-white">
            Ai Service
          </button>
        </div>
      </div>
      <div className="lg:flex-1 hidden lg:block w-full h-full relative duration-300">
        <div
          className={`absolute bottom-0 w-full h-full duration-300 bg-center ${data[currentIndex].img} bg-no-repeat bg-contain`}
        />
        <div className="absolute bottom-10 right-10 font-semibold flex items-center gap-x-3 glass text-white p-3 rounded-full w-60">
          <img
            src={data[currentIndex].pic}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col gap-y-1">
            <span className="font-thin">@{data[currentIndex].name}</span>
            <span className="font-semibold">{data[currentIndex].title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
