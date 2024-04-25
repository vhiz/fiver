import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import AddGig from "../components/AddGig";
export default function MyGigs() {
  const [selected, setSelected] = useState([]);
  const data = [
    {
      id: 53542866678797,
    },
    {
      id: 75471312178797,
    },
    {
      id: 37205998288797,
    },
    {
      id: 70875765668797,
    },
    {
      id: 62046543858797,
    },
    {
      id: 23998101808797,
    },
    {
      id: 8396133428797,
    },
    {
      id: 50269224488797,
    },
    {
      id: 87618386598797,
    },
    {
      id: 58403120118797,
    },
    {
      id: 29317206918797,
    },
    {
      id: 56261159148797,
    },
    {
      id: 40931076608797,
    },
  ];
  function handleSelect(id) {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }
  }

  function handleSelectAll() {
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

        <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}

          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selected.length === data.length}
                    onChange={handleSelectAll}
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
            {data.map((item) => (
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
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10 lg:w-12 lg:h-12">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>$100</td>
                <td>1003</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
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
      <AddGig />
      </div>
    </div>
  );
}
