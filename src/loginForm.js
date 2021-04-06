import { React } from "react";
import style from "./loginForm.css";
//import firebase from "./firebase";

//import useForm from "./useForm";
//import validate from "./validateInfo";

const loginForm = () => {
  return (
    <form className="form2">
      <h1> The Flat Finder </h1>
      <div className="form-content-right-group2">
        <div className="form-content-right2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="emailInput2"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-content-right2">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            className="pass1-label"
            placeholder="Enter password"
          />
        </div>
      </div>
      <span className="form-input-login2">
        <button
          className="form-input-btn2"
          type="button"
          //onClick={() => handleSignUpClick()}
        >
          Login Here
        </button>
      </span>
      <div className="form-container2">
        <span className="close-btn2">×</span>
        <div className="form-content-left2">
          <img
            src="https://cdn.dribbble.com/users/989466/screenshots/12002010/media/41c270f90ea9e4d1507c3c0fc4922dc3.png?compress=1&resize=400x300"
            className="form-img2"
            alt="putpichere"
          />
        </div>
      </div>
    </form>
  );
};

export default loginForm;
