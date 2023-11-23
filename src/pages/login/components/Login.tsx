import "./login.css";
import { IoKeyOutline, IoNavigate, IoPersonOutline } from "react-icons/io5";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-form">
        <form action="#">
          <div className="form-title">Log In</div>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input type="text" autoFocus name="username" />
            <IoPersonOutline className="input-icon" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
            <div className="input-icon">
              <IoKeyOutline />
            </div>
          </div>
          <div className="form-field">
            <button type="submit">
              Sign in <IoNavigate />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
