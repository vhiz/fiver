import { Suspense, useState } from "react";
import { BiRevision } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaHeart, FaShare } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Await, useLoaderData } from "react-router-dom";
import Error from "../Error";
import useUserStore from "../../useStore/useUserStore";
import toast from "react-hot-toast";
import apiRequest from "../../lib/axios";
export default function CheckOut() {
  const data = useLoaderData();
  const { currentUser } = useUserStore();
  const [liked, setLiked] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleLike(id) {
    try {
      setLoading(true);
      await apiRequest.post("/gig/like", { gigId: id });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Suspense fallback={<div className="skeleton h-[40vh] w-full"></div>}>
      <Await resolve={data.gigResponse} errorElement={<Error />}>
        {(gigResponse) => {
          return (
            <div className="w-full lg:sticky lg:top-40 lg:max-h-72">
              <div className="flex gap-10 items-center justify-end">
                <div className="tooltip" data-tip="Save to list">
                  <div
                    className="tooltip tooltip-open text-xl tooltip-right"
                    data-tip={
                      liked === true
                        ? gigResponse?.data?.Liked.length + 1
                        : liked === false
                        ? gigResponse?.data?.Liked.length - 1
                        : gigResponse?.data?.Liked.length
                    }
                  >
                    <button
                      className="btn btn-ghost text-xl px-1"
                      onClick={() => {
                        if (!currentUser) {
                          document.getElementById("loginModal").showModal();

                          return;
                        }
                        handleLike(gigResponse.data.id);
                        if (
                          gigResponse?.data?.Liked?.some(
                            (like) => like.userId === currentUser.id
                          )
                        ) {
                          setLiked(false);
                        } else {
                          setLiked(true);
                        }
                      }}
                      disabled={loading}
                    >
                      <FaHeart
                        className={`${
                          liked ||
                          gigResponse?.data?.Liked?.some(
                            (like) => like.userId === currentUser.id
                          )
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="tooltip" data-tip="Share this gig">
                  <button className="btn btn-ghost">
                    <FaShare />
                  </button>
                </div>
              </div>
              <div className="input-bordered border rounded-md p-3 flex flex-col gap-y-4">
                <div className="flex justify-between w-full items-center">
                  <h2 className="font-semibold">1 web application</h2>
                  <span className="text-xl font-semibold">
                    ${gigResponse?.data?.price}
                  </span>
                </div>
                <p className="opacity-70 text-justify capitalize text-sm">
                  {gigResponse?.data?.shortDesc}
                </p>
                <div className="font-semibold items-center flex w-full justify-between">
                  <div className="flex gap-1 items-center">
                    <CiTimer />
                    <span>{gigResponse?.data?.deliveryTime} days delivery</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <BiRevision />
                    <span>{gigResponse?.data?.revisionNumber} Revision</span>
                  </div>
                </div>
                <div className="opacity-70 flex flex-col justify-center gap-y-2">
                  {gigResponse?.data?.features.map((item, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <IoCheckmarkDoneOutline className="text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-success text-white">Continue</button>
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
