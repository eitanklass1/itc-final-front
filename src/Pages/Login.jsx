import axios from "axios";
import { useState } from "react";
import "./CSS/LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../Context/GameContext";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
  });
  const { setIsLoggedIn } = useGameContext();

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://itc-final-api.vercel.app/users/login", formData, {
        withCredentials: true,
      });
      console.log(res.data)
      const userId = res.data.user._id;
      const nickname = res.data.user.nickname;
      setIsLoggedIn(true);
      localStorage.setItem('userId', userId);
      localStorage.setItem('nickname', nickname);
      navigate("/");
    } catch (error) {
      console.error("Error during Login: ", error);
    }
  };
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
