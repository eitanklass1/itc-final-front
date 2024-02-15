import { useState } from "react";
import "./CSS/LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://itc-final-api.vercel.app/users/signup", formData, {
        withCredentials: true,
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login-box">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={changeHandler}
          />
          <label>First Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={changeHandler}
          />
          <label>Last Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="nickname"
            required
            value={formData.nickname}
            onChange={changeHandler}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={changeHandler}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={changeHandler}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="rePassword"
            required
            value={formData.rePassword}
            onChange={changeHandler}
          />
          <label>Rephrase</label>
        </div>

        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
