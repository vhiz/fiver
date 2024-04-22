import { IoFilter } from "react-icons/io5";

export default function Filter() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
      <div className="flex gap-x-3 items-center">
        <input
          type="text"
          placeholder="min"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="max"
          className="input input-bordered input-sm w-full max-w-xs"
        />
        <button className="btn btn-success text-white btn-sm"><IoFilter/></button>
      </div>
      <label className="form-control w-full lg:max-w-xs">
        <div className="label">
          <span className="label-text font-thin">Sort By</span>
        </div>
        <select className="select font-semibold outline-none border-none">
          <option disabled selected>
            Pick one
          </option>
          <option>Best Selling</option>
          <option>Popular</option>
        </select>
      </label>
    </div>
  );
}
