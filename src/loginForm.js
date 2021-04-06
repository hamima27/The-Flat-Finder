import { React } from "react";
import style from "./loginForm.css";
//import firebase from "./firebase";

//import useForm from "./useForm";
//import validate from "./validateInfo";

const loginForm = () => {
  return (
    <div className="form-content-right-group">
      <div className="form-content-right2">
        <form className="form2">
          <h1> The Flat Finder </h1>
          <div className="form-inputs2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input2"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-inputs2">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              className="form-input2"
              placeholder="Enter password"
            />
          </div>
          <button className="form-input-btn2" type="submit">
            Log in
          </button>
          <div className="form-container">
            <span className="close-btn">×</span>
            <div className="form-content-left">
              <img
                src="https://cdn.dribbble.com/users/989466/screenshots/12002010/media/41c270f90ea9e4d1507c3c0fc4922dc3.png?compress=1&resize=400x300"
                className="form-img"
                alt="putpichere"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default loginForm;
