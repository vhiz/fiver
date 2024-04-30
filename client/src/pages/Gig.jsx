import BreadCrumbs from "../components/BreadCrumbs";
import Head from "../components/GigComp/Head";
import CheckOut from "../components/GigComp/CheckOut";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import apiRequest from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import useGigStore from "../useStore/useGigStore";

export default function Gig() {
  const { id } = useParams();
  const { gig, setGig } = useGigStore();

  const { isLoading, error } = useQuery({
    queryKey: ["gig", id],
    queryFn: async () =>
      await apiRequest.get(`/gig/single/${id}`).then((res) => {
        setGig(res.data);
        return res.data;
      }),
  });
  return (
    <div className="flex gap-24 p-3">
      <div className="lg:flex-[2] w-full">
        {isLoading ? (
          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 items-center">
              <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-20"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
            <div className="skeleton h-[34vh] w-full"></div>
            <div className="skeleton h-9 w-28"></div>
            <div className="skeleton h-9 w-full"></div>
            <div className="skeleton h-9 w-full"></div>
          </div>
        ) : error ? (
          <Error />
        ) : (
          <>
            <BreadCrumbs page={gig?.title} cat={gig?.cat} />
            <Head />
          </>
        )}
      </div>
      <div className="lg:flex-1 hidden lg:block">
        {isLoading ? (
          <div className="skeleton h-[40vh] w-full"></div>
        ) : error ? (
          <Error />
        ) : (
          <CheckOut />
        )}
      </div>
    </div>
  );
}
