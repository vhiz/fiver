import { useState } from "react";
import "./register.scss";
import { makeRequest } from "../../axios";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../upload";
export default function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    phone: 0,
    desc: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSeller = (e) => {
    setUser((prev) => ({ ...prev, isSeller: e.target.checked }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = await uploadFile(file);
    try {
      await makeRequest.post("/auth/register", {
        ...user,
        img: url,
      });

      navigate("/app/login");
      setLoading(false);
    } catch (error) {
      setError(error.response.data.error);
    }
    setLoading(false);
  };

  return (
    <div className="register">
      <div className="contanier">
        <div className="sections">
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="">Country</label>
            <input type="text" name="country" onChange={handleChange} />
            <button onClick={handleSubmit}>
              {loading ? <img src="/icon/loading.gif" alt="" /> : "Register"}
            </button>
            {error && <div className="error">{error}</div>}
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" id="" onChange={handleChange} />
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label className="switch">
                <input type="checkbox" onChange={handleSeller} />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
