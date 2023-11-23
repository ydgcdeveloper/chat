import "./login.css";
import { IoKeyOutline, IoNavigate, IoPersonOutline } from "react-icons/io5";
import { ImSpinner6 } from "react-icons/im";
import { useAppStore } from "../../../store/store";

export const Login = () => {
  const { isSendingLogin, setIsSendingLogin } = useAppStore((state) => state);
  return (
    <div className="login">
      <div className="login-form">
        <form  onSubmit={() => setIsSendingLogin(!isSendingLogin)}>
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
            <button type="submit" disabled={isSendingLogin}>
              {!isSendingLogin && (
                <>
                  Sign in <IoNavigate />
                </>
              )}
              {isSendingLogin && (
                <ImSpinner6 className="spinner rotate"></ImSpinner6>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
