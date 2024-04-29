import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000000,
    sort: searchParams.get("sort") || "sales",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams(query);
  }
  return (
    <form
      className="w-full flex flex-col lg:flex-row justify-between lg:items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-x-3 items-center">
        <input
          type="number"
          placeholder="min"
          className="input input-bordered input-sm w-full max-w-xs"
          name="minPrice"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="max"
          className="input input-bordered input-sm w-full max-w-xs"
          name="maxPrice"
          onChange={handleChange}
        />
        <button className="btn btn-success text-white btn-sm">
          <IoFilter />
        </button>
      </div>
      <label className="form-control w-full lg:max-w-xs">
        <div className="label">
          <span className="label-text font-thin">Sort By</span>
        </div>
        <select
          className="select font-semibold outline-none border-none"
          name="sort"
          onChange={handleChange}
        >
          <option disabled selected>
            Pick one
          </option>
          <option value={"sales"}>Best Selling</option>
          {/* <option>Popular</option> */}
          <option value={"createdAt"}>Latest</option>
        </select>
      </label>
    </form>
  );
}
