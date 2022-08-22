import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/apiCalls";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <h1 className="loginTitle">LOG IN</h1>
        <form className="loginForm">
          <input
            type="text"
            className="loginFormInput"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="loginFormInput"
            placeholder="Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="loginButton">
            LOGIN
          </button>
          {error && (
            <p className="error" style={{ color: "red" }}>
              Something went wrong
            </p>
          )}
          <a href="" className="loginForgotPassword">
            Forgot Password?
          </a>
          <a href="" className="loginCreateAccount">
            CREATE ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
