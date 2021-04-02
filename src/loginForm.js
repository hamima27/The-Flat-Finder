import React from "react";
import stylesheet from "./loginForm.css";

const loginForm = () => {
  return (
    <div className="form-content-right2">
      <h1> The Flat Finder </h1>
      <div className="form-inputs2">
        <label htmlFor="email">Email</label>
        <input
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
      <button classname="form-input-btn2" type="submit">
        {" "}
        Log in
      </button>
    </div>
  );
};

export default loginForm;
