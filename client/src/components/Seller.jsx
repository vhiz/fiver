import { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import useUserStore from "../useStore/useUserStore";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import toast from "react-hot-toast";
import apiRequest from "../lib/axios";

export default function Seller() {
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState();
  const { currentUser, setCurrentUser } = useUserStore();
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setInputs((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiRequest.post("/user/seller", inputs);
      setCurrentUser(res.data);
      document.getElementById("sellerModal").close();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
      <div className="hidden lg:block lg:flex-1 relative h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1696942353136-c3735fadc15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-white/20 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center text-gray-200">
            Share your gifts with the world today
          </h1>
        </div>
      </div>
      <div className="flex-1 p-3 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-bold">Become A Seller</h2>
        <form
          className=" flex flex-col justify-center gap-y-4 w-full"
          onSubmit={handleSubmit}
        >
          {!currentUser?.countryFlag && (
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Country</span>
              </div>
              <select name="" id="" className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                {options.map((option, key) => (
                  <option key={key} value="">
                    {option.label}
                    <img src={option.value} alt="" />
                  </option>
                ))}
              </select>
            </label>
          )}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
              name="desc"
              disabled={currentUser?.desc}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              className=""
              disabled={currentUser?.phone}
            />
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              className="toggle toggle-success"
              name="isSeller"
              checked={currentUser?.isSeller}
              onChange={handleChange}
            />
          </label>
          <button disabled={loading} className="btn btn-success">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
