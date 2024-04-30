import { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../reducer/gigReducer";
import upload from "../lib/upload";
import { LuImagePlus } from "react-icons/lu";
import toast from "react-hot-toast";
import { IoCloudUpload } from "react-icons/io5";
import apiRequest from "../lib/axios";

export default function AddGig() {
  const [feature, setFeature] = useState("");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  function handleImgChange(e) {
    const selectedFiles = e.target.files;
    const newFiles = Array.from(selectedFiles).map((file) => ({
      file: file,
      url: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  }
  const handleFeature = (e) => {
    e.preventDefault();
    if (!feature) return;
    dispatch({
      type: "ADD_FEATURE",
      payload: feature,
    });
    setFeature("");
  };

  const handleUpload = async () => {
    if (uploading) return;
    if (uploaded) {
      toast.success("You have successfully uploaded your images");
    }
    if (files.length < 2) {
      toast.error("You have to select some images");
      return;
    }
    setUploading(true);

    try {
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file.file);
          return url;
        })
      );
      dispatch({ type: "ADD_IMAGES", payload: { images } });
      setUploaded(true);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (!uploaded) {
        handleUpload();
        return
      }
      await apiRequest.post("/gig", state);
      toast.success("Gig Added");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="modal-box w-[100vw] max-w-[100vw] lg:max-w-[80vw] max-h-[100vh] lg:h-[calc(100vh-5rem)]">
      <h2 className="text-3xl font-semibold">Add Gig</h2>
      <form method="dialog" className="lg:hidden">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <form
        action=""
        className="flex w-full gap-10 flex-col lg:flex-row"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 flex flex-col gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="title"
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              name="cat"
              onChange={handleChange}
              required
            >
              <option disabled selected>
                Pick one
              </option>
              <option value={"design"}>Design</option>
              <option value={"webDesign"}>Web Design</option>
              <option value={"animation"}>Animation</option>
              <option value={"music"}>Music</option>
              <option value={"dataEntry"}>Data Entry</option>
              <option value={"Seo"}>SEO</option>
              <option value={"social"}>Social</option>
              <option value={"ai"}>Ai Services</option>
              <option value={"illustration"}>Illustration</option>
              <option value={"programming"}>Programming</option>
              <option value={"translation"}>Translation</option>
            </select>
          </label>
          <label htmlFor="" className="form-control">
            <div className="label">
              <span className="label-text">Images</span>
            </div>
            <LuImagePlus className="text-2xl" />
            <input
              type="file"
              className="file-input file-input-ghost w-full hidden"
              multiple
              accept="image/*"
              onChange={handleImgChange}
              required
            />
          </label>
          <div className="flex gap-3 flex-wrap">
            {files.map((img, i) => (
              <div className="avatar" key={i}>
                <div className="w-24 rounded">
                  <img src={img.url} />
                </div>
                <span
                  className="absolute top-0 right-0 btn btn-xs btn-neutral btn-circle"
                  onClick={() =>
                    setFiles((prev) =>
                      prev.filter((file) => file.url !== img.url)
                    )
                  }
                >
                  x
                </span>
              </div>
            ))}
          </div>

          <div
            className={`btn btn-primary ${
              uploading || uploaded ? "btn-disabled" : ""
            }`}
            onClick={handleUpload}
          >
            <IoCloudUpload className="text-lg" />
          </div>

          <label className="form-control h-[40vh]">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-full"
              placeholder="Description"
              name="desc"
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button
            className="btn btn-success w-full hidden lg:block"
            disabled={loading}
          >
            Create
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-5 lg:mt-0 ">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Service Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="shortTitle"
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Short Desc</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Short Desc"
              name="shortDesc"
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Delivery time(e.g 3 days)</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="deliveryTime"
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Revision Number</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="revisionNumber"
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Add Features</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
              />
              <div className="btn btn-neutral" onClick={handleFeature}>
                Add
              </div>
            </div>
            <div className="flex gap-2 mt-2 w-full flex-wrap">
              {state.features.map((feature, i) => (
                <div
                  key={i}
                  className="btn btn-info text-white"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FEATURE", payload: feature })
                  }
                >
                  {feature}
                </div>
              ))}
            </div>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="price"
              onChange={handleChange}
              required
            />
          </label>
          <button
            className="btn btn-success w-full lg:hidden"
            disabled={loading}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
