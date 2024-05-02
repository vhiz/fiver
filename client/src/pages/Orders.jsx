import { useQuery } from "@tanstack/react-query";
import { BiMessageSquareDots } from "react-icons/bi";
import { Link } from "react-router-dom";
import apiRequest from "../lib/axios";

export default function Orders() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () =>
      await apiRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });
  console.log(data)
  return (
    <div className="p-3">
      <div className="flex ic justify-between mb-3">
        <h1 className="font-semibold text-2xl lg:text-4xl">Orders</h1>
      </div>
      <div className="overflow-x-auto lg:h-[60vh]">
        <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}

          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Date</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((item) => (
              <tr key={item.id}>
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
                <td>
                  <Link
                    to={"/messages"}
                    className="btn  btn-circle btn-sm btn-primary lg:btn-md"
                  >
                    <BiMessageSquareDots />
                  </Link>
                </td>
              </tr>
            ))} */}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Date</th>
              <th>Contact</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
