export default function AddGig() {
  function handleSubmit(e) {
    e.preventDefault();
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
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option value={"design"}>Design</option>
              <option value={"web design"}>Web Design</option>
              <option value={"animation"}>Animation</option>
              <option value={"music"}>Music</option>
              <option value={"data entry"}>Data Entry</option>
              <option value={"Seo"}>SEO</option>
              <option value={"social"}>Social</option>
              <option value={"ai"}>Ai Services</option>
            </select>
          </label>
          <label htmlFor="" className="form-control">
            <div className="label">
              <span className="label-text">Images</span>
            </div>
            <input type="file" className="file-input file-input-ghost w-full" />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <button className="btn btn-success w-full hidden lg:block">
            Create
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Service Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Delivery time(e.g 3 days)</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Revision Number</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Add Features</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <button className="btn btn-success w-full lg:hidden">Create</button>
        </div>
      </form>
    </div>
  );
}
