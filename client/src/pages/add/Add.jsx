import { useReducer, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import "./add.scss";
import { INITIAL_STATE, gigReducer } from "../../reducer/gigReducer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../upload";


export default function Add() {
  const [coverFile, setCoverFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);

    try {
      const cover = await uploadFile(coverFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await uploadFile(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (error) {
      console.log(error);
    }
  };

 

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return makeRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mygigs"] });

      navigate("/app/mygig");
    },
    onError: () => {
      setError(true);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(state);
  };

  return (
    <div className="add">
      <div className="contanier">
        <Breadcrumbs />
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="eg I will do something I'm really good at "
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="social">Social Media</option>
            </select>
            <div className="images">
              <div className="imagesInput">
                <label htmlFor="">Cover Imges</label>
                <input
                  type="file"
                  onChange={(e) => setCoverFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  name=""
                  id=""
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="16"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit} disabled={uploading}>
              Create
            </button>
            {error && <span>Some fields are not completed</span>}
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              placeholder="e.g. One Page web Design"
              name="shortTitle"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              placeholder="Short Description"
            ></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input
              type="number"
              min={1}
              name="deliveryTime"
              onChange={handleChange}
            />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              min={1}
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="Add a feature" />
              <button type="submit">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" min={1} name="price" onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
