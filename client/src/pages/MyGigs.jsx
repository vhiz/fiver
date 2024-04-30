import { Suspense, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import AddGig from "../components/AddGig";
import { Await, Link, useLoaderData } from "react-router-dom";
import Error from "../components/Error";

export default function MyGigs() {
  const data = useLoaderData();
  const [selected, setSelected] = useState([]);

  function handleSelect(id) {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  }

  function handleSelectAll(data) {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((item) => item.id));
    }
  }
  return (
    <div className="p-3">
      <div className="flex ic justify-between mb-3">
        <h1 className="font-semibold text-2xl lg:text-4xl">Gigs</h1>
        <button
          onClick={() => document.getElementById("addGig").showModal()}
          className="btn btn-success text-white btn-sm lg:btn-md"
        >
          <IoIosAdd /> New Gig
        </button>
      </div>
      <div className="overflow-x-auto lg:h-[60vh]">
        <div
          className={`lg:w-[70%] p-3 rounded-md text-white ${
            selected.length > 0 ? "bloc animate-bounceIn" : "hidden"
          }`}
        >
          By selecting you want to delete the following gigs
          <button className="btn ml-2 rounded-md btn-error text-white btn-sm lg:btn-md">
            {selected.length} Delete
          </button>
          <button
            onClick={() => setSelected([])}
            className="btn ml-2 rounded-md btn-outline btn-neutral text-white btn-sm lg:btn-md"
          >
            Cancel
          </button>
        </div>
        <Suspense
          fallback={
            <div className="flex flex-col gap-4 w-full py-2">
              <div className="skeleton h-9 w-full"></div>
              <div className="skeleton h-9 w-full"></div>
              <div className="skeleton h-9 w-full"></div>
              <div className="skeleton h-9 w-full"></div>
            </div>
          }
        >
          <Await resolve={data.myGigResponse} errorElement={<Error />}>
            {(myGigResponse) => (
              <table className="table table-xs md:table-md lg:table-lg">
                {/* head */}

                <thead>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={
                            selected.length === myGigResponse?.data.length
                          }
                          onChange={() => handleSelectAll(myGigResponse?.data)}
                        />
                      </label>
                    </th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Orders</th>
                  </tr>
                </thead>

                <tbody>
                  {myGigResponse?.data?.map((item) => (
                    <tr key={item.id}>
                      <th>
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox"
                            checked={selected.includes(item.id)}
                            onChange={() => handleSelect(item.id)}
                          />
                        </label>
                      </th>
                      <td>
                        <Link to={`/gig/${item.id}`} className="avatar">
                          <div className="mask mask-squircle w-10 h-10 lg:w-12 lg:h-12">
                            <img
                              src={item.images[0]}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </Link>
                      </td>
                      <td>{item.title}</td>
                      <td>${item.price}</td>
                      <td>{item.sales}</td>
                    </tr>
                  ))}
                </tbody>

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Orders</th>
                  </tr>
                </tfoot>
              </table>
            )}
          </Await>
        </Suspense>
        <dialog id="addGig" className="modal">
          <AddGig />
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
