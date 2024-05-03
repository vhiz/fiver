import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { IoIosCheckmark, IoMdMail } from "react-icons/io";
import apiRequest from "../lib/axios";
import useUserStore from "../useStore/useUserStore";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-number-input";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Register() {
  const [inputs, setInputs] = useState({});
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(false);
  const [phone, setPhone] = useState();
  const { currentUser } = useUserStore();
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (e) => {
    const parseData = JSON.parse(e.target.value);
    setCountry(parseData);
  };

  function handleChange(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await apiRequest.post("/auth/register", {
        ...inputs,
        img: `https://avatar.iran.liara.run/username?username=${inputs?.name}`,
        countryName: country?.label,
        countryFlag: country?.value,
        phone,
      });
      document.getElementById("registerModal").close();
      document.getElementById("loginModal").showModal();
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
      <div className="hidden lg:block lg:flex-1 sticky top-0 h-full">
        <div className="w-full h-full text-white relative">
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
      </div>
      <div className="flex-1 p-5">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Create a new account
          </h2>
          <p>
            Already have an account?
            <button
              className="btn btn-link"
              onClick={() => {
                document.getElementById("registerModal").close();
                document.getElementById("loginModal").showModal();
              }}
            >
              Sign in
            </button>
          </p>
        </div>
        <form
          className=" flex flex-col mt-6 ml-5 gap-y-3 "
          onSubmit={handleSubmit}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <IoMdMail className="opacity-70 w-4 h-4" />
              <input
                type="email"
                placeholder="Type here"
                className="grow"
                name="email"
                onChange={handleChange}
                required
              />
            </label>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaUnlockKeyhole className="opacity-70 w-4 h-4" />
              <input
                type={password ? "text" : "password"}
                placeholder="Type here"
                className="grow"
                onChange={handleChange}
                name="password"
                required
              />
              <div
                className="btn btn-ghost btn-circle btn-sm opacity-70"
                onClick={() => setPassword((prev) => !prev)}
              >
                {password ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </div>
            </label>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <label className="input-bordered input flex items-center gap-2 w-full">
              <FaUser  className="w-4 h-4 opacity-70"/>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                required
                onChange={handleChange}
                className="grow"
              />
            </label>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Phone</span>
            </div>

            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              className=""
            />
          </label>
          {!currentUser?.countryFlag && (
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Country</span>
              </div>
              <select
                id=""
                className="select select-bordered"
                onChange={changeHandler}
                required
              >
                <option disabled selected>
                  Pick one
                </option>
                {options.map((option, key) => (
                  <option key={key} value={JSON.stringify(option)}>
                    {option.label}
                    <img src={option.value} alt="" />
                  </option>
                ))}
              </select>
            </label>
          )}

          <button className="btn btn-info my-2" disabled={loading}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
