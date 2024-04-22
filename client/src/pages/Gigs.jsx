import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Filter from "../components/Filter";
import GigCard from "../components/GigCard";

export default function Gigs() {
  const [searchParams] = useSearchParams();
  return (
    <div className="p-3">
      <BreadCrumbs page={searchParams.get("cat")} />
      <div className="flex justify-center flex-col gap-y-2 my-2">
        <h1 className="font-bold font-serif text-3xl capitalize">
          {searchParams.get("cat")}
        </h1>
        <span className="text-gray-400 font-thin">
          Explore the boundaries of art and technology with {`fiverr's`}
          <span className="capitalize ml-1">{searchParams.get("cat")}</span>
        </span>
      </div>
      <Filter />
      <div className="flex gap-3 justify-center w-[100vw] flex-wrap lg:px-4 ">
        <GigCard /> <GigCard /> <GigCard /> <GigCard /> <GigCard /> <GigCard />
        <GigCard /> <GigCard /> <GigCard /> <GigCard />
      </div>
    </div>
  );
}
