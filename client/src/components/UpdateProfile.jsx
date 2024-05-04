import { useEffect, useMemo, useState } from "react";
import useUserStore from "../useStore/useUserStore";
import { FaUnlockKeyhole, FaUser } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import countryList from "react-select-country-list";
import { LuImagePlus } from "react-icons/lu";
import PhoneInput from "react-phone-number-input";
import toast from "react-hot-toast";
import apiRequest from "../lib/axios";
import upload from "../lib/upload";

export default function UpdateProfile() {
  const { currentUser, setCurrentUser } = useUserStore();
  const [inputs, setInputs] = useState({});
  const [count, setCount] = useState(60);
  const options = useMemo(() => countryList().getData(), []);
  const [phone, setPhone] = useState();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState({});
  const [password, setPassword] = useState(false);
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  function handleImgChange(e) {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  }

  const changeHandler = (e) => {
    const parseData = JSON.parse(e.target.value);
    setCountry(parseData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 60 : prevCount - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  async function updateProfile() {
    try {
      setLoading(true);
      let imgUrl;
      if (img.url) {
        imgUrl = await upload(img.file);
      }
      const res = await apiRequest.put("/user/update", {
        ...inputs,
        countryName: country?.label,
        countryFlag: country?.value,
        phone,
        img: imgUrl,
      });
      setCurrentUser(res.data);
      setImg({ file: null, url: "" });
      document.getElementById("profileModal").close();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-box w-[100vw] max-w-[100vw] lg:max-w-[70vw] max-h-[100vh] lg:h-[calc(100vh-5rem)]  p-2 rounded-lg">
      <form method="dialog" className="lg:hidden">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div className="w-full hidden lg:block">
        <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src={currentUser.img} />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div className="flex mt-4 items-center gap-4">
          <div className="stats bg-primary text-primary-content flex-[1.5]">
            <div className="stat">
              <div className="stat-title">Account balance</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">Add funds</button>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Current balance</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm">Withdrawal</button>
                <button className="btn btn-sm">Deposit</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 justify-center gap-4">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": count }}></span>
                </span>
                sec
              </div>
            </div>
            <progress className="progress w-full"></progress>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full p-4">
        <h2 className="text-2xl">Update Profile</h2>
        <div className="flex w-full flex-col gap-2">
          <label
            htmlFor="file"
            className="cursor-pointer self-start flex gap-x-5 items-center mt-3"
          >
            <div className="relative w-14 h-14 rounded-md">
              <img
                src={img.url ? img.url : currentUser.img}
                alt=""
                className="absolute w-full h-full object-cover rounded-full"
              />
              {img.file && (
                <p
                  className="absolute text-xs top-0 -right-2 btn btn-xs btn-circle"
                  onClick={() => setImg({ file: null, url: "" })}
                >
                  x
                </p>
              )}
            </div>
            <input
              type="file"
              name=""
              id="file"
              accept="image/*"
              multiple={false}
              className="hidden"
              onChange={handleImgChange}
            />
            <div className="tooltip" data-tip="Choose an image">
              <LuImagePlus className="text-2xl" />
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaUser className="opacity-70 w-4 h-4" />
              <input
                type="text"
                placeholder={currentUser?.name}
                className="grow"
                onChange={handleChange}
                name="name"
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

          {currentUser && (
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Country</span>
              </div>
              <select
                name=""
                id=""
                className="select select-bordered"
                onChange={changeHandler}
              >
                <option disabled selected>
                  {currentUser.countryName}
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
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder={currentUser?.desc}
              name="desc"
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <PhoneInput
              placeholder={currentUser?.phone}
              value={phone}
              onChange={setPhone}
              className=""
            />
          </label>
          <button
            disabled={loading}
            className="btn btn-success text-white"
            onClick={updateProfile}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
