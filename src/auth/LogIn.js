import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.scss";
import userImage from "../images/User.png";
import lockImage from "../images/Lock.png";
import eye from "../images/Eye.png";
import eyeOff from "../images/eye-off.svg";

function LogIn() {
  const [matchPassword, setMatchPassword] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(true);

  const history = useHistory();

  const handlePasswordEye = () => {
    setEyeIcon((prevState) => !prevState);
  };

  /**
   * To submit form on pressing enter key
   * @param {event } e
   */
  const handleClick = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      formik.handleSubmit();
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required").email("Invalid email"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (
        values.username == "aricalot@gmail.com" &&
        values.password == "TEST@123"
      ) {
        setMatchPassword(false);
        localStorage.setItem("username", values.username);
        history.push("/dashboard");
      } else {
        setMatchPassword(true);
      }
    },
  });

  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <div className="login__container">
          <div className="login__heading">LOGIN</div>
          <div className="login__content">
            <p>Enter your username and password</p>
          </div>
          <div className="login__username">
            <img src={userImage} alt="user" />
            <input
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onKeyDown={(e) => handleClick(e)}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <span className="error">{formik.errors.username}</span>
          ) : null}
          <div className="login__password">
            <img src={lockImage} alt="lock" />
            <input
              type={eyeIcon ? "password" : "text"}
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onKeyDown={(e) => handleClick(e)}
            />
            {eyeIcon ? (
              <img
                className="eye_image"
                src={eye}
                alt="eye"
                onClick={handlePasswordEye}
              />
            ) : (
              <img
                className="eye_image_off"
                src={eyeOff}
                alt="eye"
                onClick={handlePasswordEye}
              />
            )}
          </div>
          {formik.touched.password && formik.errors.password ? (
            <span className="error">{formik.errors.password}</span>
          ) : null}

          <div className="login__forgot">
            <p>Forgot Password?</p>
          </div>
          <div className="login__submit">
            <button type="submit">Sign In</button>
          </div>
          {matchPassword && (
            <div className="login__invalidCredentials">Invalid credentials</div>
          )}
        </div>
      </form>
    </div>
  );
}

export default LogIn;
