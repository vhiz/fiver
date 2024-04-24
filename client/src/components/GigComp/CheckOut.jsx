import { BiRevision } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaHeart, FaShare } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CheckOut() {
  return (
    <div className="w-full lg:sticky lg:top-40 lg:max-h-72">
      <div className="flex gap-10 items-center justify-end">
        <div className="tooltip" data-tip="Save to list">
          <div
            className="tooltip tooltip-open text-xl tooltip-right"
            data-tip="20"
          >
            <button className="btn btn-ghost text-xl px-1">
              <FaHeart className="text-gray-500" />
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
          <span className="text-xl font-semibold">$20.00</span>
        </div>
        <p className="opacity-70 text-justify capitalize text-sm">
          view progress promised string am friend she opportunity settlers
          greatly shot mood chapter gas post sale primitive basic actual command
          making closely higher former
        </p>
        <div className="font-semibold items-center flex w-full justify-between">
          <div className="flex gap-1 items-center">
            <CiTimer />
            <span>2 days delivery</span>
          </div>
          <div className="flex gap-1 items-center">
            <BiRevision />
            <span>3 Revision</span>
          </div>
        </div>
        <div className="opacity-70 flex flex-col justify-center gap-y-2">
          <div className="flex items-center gap-1">
            <IoCheckmarkDoneOutline className="text-green-600" />
            <span className="text-sm">Prompt writing</span>
          </div>
          <div className="flex items-center gap-1">
            <IoCheckmarkDoneOutline className="text-green-600" />
            <span className="text-sm">Prompt writing</span>
          </div>
          <div className="flex items-center gap-1">
            <IoCheckmarkDoneOutline className="text-green-600" />
            <span className="text-sm">Prompt writing</span>
          </div>
        </div>
        <button className="btn btn-success text-white">Continue</button>
      </div>
    </div>
  );
}
