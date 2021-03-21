import React from "react";
import useForm from "./useForm";

const Formsignup = () => {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <form className="form1" onSubmit={handleSubmit}>
      <div className="form-content-right">
        <label htmlFor="email" className="emailLabel">
          Email
        </label>
        <input
          id="email1"
          type="email"
          name="email1"
          className="emailInput"
          placeholder="Enter Email"
          value={values.email1}
          onChange={handleChange}
        />
      </div>
      <div className="form-content-right">
        <label htmlFor="email" className="email-label2">
          Confirm Email
        </label>
        <input
          id="email2"
          type="email"
          name="email2"
          className="form-label2"
          placeholder="Confirm your Email"
          value={values.email2}
          onChange={handleChange}
        />
      </div>
      <div className="form-content-right">
        <label htmlFor="password1" className="pass1-label">
          Password
        </label>
        <input
          id="password1"
          type="password"
          name="password1"
          className="form-label"
          placeholder="Enter password"
          value={values.password1}
          onChange={handleChange}
        />
      </div>
      <div className="form-content-right">
        <label htmlFor="password2" className="password2-label">
          Confirm Password
        </label>
        <input
          id="password2"
          type="password"
          name="password2"
          className="form-label"
          placeholder="Confirm your password"
          value={values.password2}
          onChange={handleChange}
        />
      </div>
      <button className="form-input-btn" type="submit">
        Sign Up
      </button>
      <span className="form-input-login">
        Already have an account? Login <a href="#">here</a>
      </span>
    </form>
  );
};

export default Formsignup;
