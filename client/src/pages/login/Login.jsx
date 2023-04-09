import { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContex";
export default function Login() {
  const {login} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (inputs.username.trim() === "" || inputs.password.trim() === "") {
        alert("Please complete the form.");
        setLoading(false);
        return;
      }
     await login(inputs)
      navigate('/')
    } catch (error) {
      setError(error.response.data.error);
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Sign in</h1>
        <div className="item">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="e.g. John Doe"
            value={inputs.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            required
          />
        </div>

        <button onClick={handleClick} disabled={loading}>
          {loading ? <img src="/icon/loading.gif" alt="" /> : "Login"}
        </button>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
