import { React, useState } from "react";
import style from "./loginForm.css";
//import firebase from "./firebase";

//import useForm from "./useForm";
//import validate from "./validateInfo";

const loginForm = () => {
  const [values, setValues] = useState({
    email: "2",
    password: "`1"
  });

  return (
    <div className="form-content-right2">
      <form className="form2" onSubmit={() => handleSubmit()}>
        <h1> The Flat Finder </h1>
        <div className="form-inputs2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input2"
            placeholder="Enter your email"
            value={values.email}
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
      </form>
    </div>
  );
};

export default loginForm;
