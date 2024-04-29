import BreadCrumbs from "../components/BreadCrumbs";
import Head from "../components/GigComp/Head";
import CheckOut from "../components/GigComp/CheckOut";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Error from "../components/Error";

export default function Gig() {
  const data = useLoaderData();
  return (
    <div className="flex gap-24 p-3">
      <div className="lg:flex-[2] w-full">
        <Suspense
          fallback={
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
          }
        >
          <Await resolve={data.gigResponse} errorElement={<Error />}>
            {(gigResponse) => (
              <>
                <BreadCrumbs
                  page={gigResponse?.data?.title}
                  cat={gigResponse?.data?.cat}
                />
                <Head gig={gigResponse?.data} />
              </>
            )}
          </Await>
        </Suspense>
      </div>
      <div className="lg:flex-1 hidden lg:block">
        <CheckOut />
      </div>
    </div>
  );
}
