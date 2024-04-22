import { CiCircleCheck } from "react-icons/ci";

export default function Business() {
  return (
    <div className="p-2 lg:p-3 my-4 bg-blue-950 text-white flex gap-24 lg:h-[70vh]">
      <div className="lg:flex-1 flex justify-center flex-col gap-y-4">
        <h2 className="text-3xl font-semibold">
          fiverr <i className="font-thin">business</i>
        </h2>
        <h2 className="text-4xl">
          A business solution designed for <br /> <i className="font-thin">teams</i>
        </h2>
        <h3 className="text-lg">
          Upgrade to a curated experience pack with tools <br /> and benefits, dedicated
          to business
        </h3>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2 font-thin text-gray-200">
            <CiCircleCheck className="text-white text-xl" />
            <h3>Connect to freelancers with proven business experience</h3>
          </div>
          <div className="flex items-center gap-2 font-thin text-gray-200">
            <CiCircleCheck className="text-white text-xl" />
            <h3>Manage Teamwork and boost productivity with our powerful workshop</h3>
          </div>
          <div className="flex items-center gap-2 font-thin text-gray-200">
            <CiCircleCheck className="text-white text-xl" />
            <h3>Get matched to perfect talent by a customer success manager</h3>
          </div>
        </div>
        <button className="btn w-[40%] border-none text-white bg-green-500 hover:bg-green-400">
          Explore Fiverr Business
        </button>
      </div>
      <div className="hidden lg:flex lg:flex-1 relative items-center justify-center w-full h-full">
        <img src="/business.png" alt="" className="w-full h-[90%] object-contain" />
      </div>
    </div>
  );
}
