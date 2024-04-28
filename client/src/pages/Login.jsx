import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosCheckmark } from "react-icons/io";
import apiRequest from "../lib/axios";
import useUserStore from "../useStore/useUserStore";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useUserStore();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await apiRequest.post("/auth/login", inputs);
      setCurrentUser(res.data);
      document.getElementById("loginModal").close();
    } catch (error) {
      toast.error(error?.response?.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-box w-[100vw] max-w-[100vw] lg:max-w-[70vw] max-h-[100vh] lg:h-[calc(100vh-5rem)] flex p-0 rounded-lg">
      <form method="dialog" className="lg:hidden">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div className="hidden lg:block lg:flex-1 text-white relative">
        <img
          src="https://images.unsplash.com/photo-1701551883642-67a960663758?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute top-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-b from-black/70 to-white/10 p-4 flex flex-col justify-center gap-y-4">
          <h2 className="text-4xl font-semibold">Success starts here</h2>
          <div className="flex flex-col justify-center gap-y-3">
            <div className="flex gap-x-2 items-center">
              <IoIosCheckmark className="text-xl" />
              <span className="text-xl">Over 600 categories</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <IoIosCheckmark className="text-xl" />
              <span className="text-xl">Pay per project, not per hour</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <IoIosCheckmark className="text-xl" />
              <span className="text-xl">
                Access to talent and businesses across the globe
              </span>
            </div>
          </div>
        </div>
      </div>
      <form className="flex-1 p-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-1">
          <h2 className="text-4xl font-bold">Sign in to your account</h2>
          <p>
            Don’t have an account?
            <button
              className="btn btn-link"
              onClick={() => {
                document.getElementById("loginModal").close();
                document.getElementById("registerModal").showModal();
              }}
            >
              Join here
            </button>
          </p>
        </div>
        <div className=" flex flex-col mt-6 ml-5 gap-y-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={handleChange}
              name="email"
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={handleChange}
              name="password"
              required
            />
          </label>
          <button disabled={loading} className="btn btn-info mt-2">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
