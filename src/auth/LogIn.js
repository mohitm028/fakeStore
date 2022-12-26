import React from "react";
import "./index.scss";
import userImage from '../images/User.png'
import lockImage from '../images/Lock.png'

function LogIn() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__heading">LOGIN</div>
        <div className="login__content">
          <p>Enter your username and password</p>
        </div>
        <div className="login__username">
        <img src={userImage} alt="user" />
        <input type="text" />
        </div>
        <div className="login__password">
        <img src={lockImage}  alt="lock"/>
        <input type="text" />
        </div>
        <div className="login__forgot">
           <p>Forgot Password?</p>
        </div>
        <div className="login__submit">
            <button>Sign In </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
