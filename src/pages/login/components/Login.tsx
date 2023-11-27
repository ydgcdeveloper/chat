import "./login.css";
import { IoKeyOutline, IoNavigate, IoPersonOutline } from "react-icons/io5";
import { ImSpinner6 } from "react-icons/im";
import { useAppStore } from "../../../store/store";
import { useState, useEffect } from "react";
import { LOGIN_URL, PWD_REGEX, USERNAME_REGEX } from "../../../util/constants";
import axios from "../../../api/axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Login = () => {
  const { isSendingLogin, setIsSendingLogin } = useAppStore((state) => state);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSendingLogin(true);
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(LOGIN_URL, {
        username,
        password: pwd,
      });

      signIn({
        token: response.data.access_token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { username },
      });
      localStorage.setItem("user_logged", JSON.stringify(response.data.user));
      setIsSendingLogin(false);
      toast.success("You have successfully logged in.");
      navigate("/");
    } catch (error) {
      setIsSendingLogin(false);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-title">Log In</div>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              autoFocus
              name="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              required
              aria-invalid={validUsername ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <IoPersonOutline className="input-icon" />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "true" : "false"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
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
