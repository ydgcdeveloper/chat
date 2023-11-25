import {
  IoKeyOutline,
  IoNavigate,
  IoPersonOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import "./register.css";
import { useAppStore } from "../../../store/store";
import { ImSpinner6 } from "react-icons/im";
import { useRef, useState, useEffect } from "react";
import axios from "../../../api/axios";
import {
  PWD_REGEX,
  REGISTER_URL,
  USERNAME_REGEX,
} from "../../../util/constants";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { isSendingRegister, setIsSendingRegister } = useAppStore(
    (state) => state
  );
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirmPwd, setConfirmPwd] = useState("");
  const [validConfirmPwd, setValidConfirmPwd] = useState(false);
  const [validConfirmPwdFocus, setValidConfirmPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === confirmPwd && !!confirmPwd;
    setValidConfirmPwd(match);
  }, [pwd, confirmPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd, confirmPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSendingRegister(true);
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(REGISTER_URL, {
        username,
        password: pwd,
      });
      setIsSendingRegister(false);
      toast.success('You have successfully signed up.');
      navigate('/login')
    } catch (error) {
      setIsSendingRegister(false);
      toast.error('Sign up failed. Please try again.')
    }
  };

  return (
    <div className="register">
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div className="form-title">Sign Up</div>
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
            {pwd && !validPwd && (
              <p id="pwdnote" className="instructions">
                <span className="icon-row">
                  <IoInformationCircleOutline className="info-icon" />
                  8 to 24 characters. <br />
                </span>
                Must include uppercase and lowercase letters, a number and a
                special character. <br />
                Allowed spacial characters: !@#$%
              </p>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="confirm">Confirm Password:</label>
            <input
              id="confirm"
              type="password"
              name="confirm"
              onChange={(e) => setConfirmPwd(e.target.value)}
              required
              aria-invalid={validConfirmPwd ? "true" : "false"}
              aria-describedby="confirmnote"
              onFocus={() => setValidConfirmPwdFocus(true)}
              onBlur={() => setValidConfirmPwdFocus(false)}
            />
            <div className="input-icon">
              <IoKeyOutline />
            </div>
            {confirmPwd && !validConfirmPwd && (
              <p id="confirmnote" className="instructions">
                <span className="icon-row">
                  <IoInformationCircleOutline className="info-icon" />
                  Must match the first password input field. <br />
                </span>
              </p>
            )}
          </div>
          <div className="form-field">
            <button
              type="submit"
              disabled={
                isSendingRegister ||
                !validUsername ||
                !validPwd ||
                !validConfirmPwd
                  ? true
                  : false
              }
            >
              {!isSendingRegister && (
                <>
                  Sign up <IoNavigate />
                </>
              )}
              {isSendingRegister && (
                <ImSpinner6 className="spinner rotate"></ImSpinner6>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
