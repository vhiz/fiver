import { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import useUserStore from "../useStore/useUserStore";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Seller() {
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState();
  const { currentUser } = useUserStore();

  return (
    <div className="modal-box w-[100vw] max-w-[100vw] lg:max-w-[70vw] max-h-[100vh] lg:h-[calc(100vh-5rem)] flex p-0 rounded-lg">
      <div className="hidden lg:block lg:flex-1 relative h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1696942353136-c3735fadc15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-white/20 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center">
            Share your gifts with the world today
          </h1>
        </div>
      </div>
      <div className="flex-1 p-3 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-bold">Become A Seller</h2>
        <div className=" flex flex-col justify-center gap-y-4 w-full">
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
            ></textarea>
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            className=""
            disabled={currentUser?.phone}
          />

          <button className="btn btn-success">Continue</button>
        </div>
      </div>
    </div>
  );
}
