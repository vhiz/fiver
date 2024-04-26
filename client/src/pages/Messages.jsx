import { LiaBookReaderSolid } from "react-icons/lia";
import MessageContainer from "../components/MessageComp/MessageContainer";
const user = {
  isSeller: false,
};

export default function Messages() {
  return (
    <div className="p-3">
      <div className="flex ic justify-between mb-3">
        <h1 className="font-semibold text-2xl lg:text-4xl">Messages</h1>
      </div>
      <div className="overflow-x-auto lg:h-[60vh]">
        <table className="table table-xs md:table-md lg:table-lg">
          {/* head */}

          <thead>
            <tr>
              <th>{user.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill()
              .map((item, i) => (
                <tr
                  onClick={() => document.getElementById("message").showModal()}
                  key={i}
                  className="cursor-pointer"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td className="max-w-[30vw]">
                    later explanation bag review surface drawn dug
                  </td>
                  <td>2 days ago</td>
                  <td>
                    <button
                      to={"/messages"}
                      className="btn  btn-circle btn-sm btn-success text-white lg:btn-md"
                    >
                      <LiaBookReaderSolid />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>{user.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <MessageContainer />
    </div>
  );
}
