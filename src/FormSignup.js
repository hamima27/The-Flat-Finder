import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const Formsignup = (submitForm) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form className="form1" onSubmit={handleSubmit}>
      <h1>THE FLAT FINDER</h1>
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
        {errors.email1 && <p>{errors.email1}</p>}
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
        {errors.email2 && <p>{errors.email2}</p>}
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
        {errors.password1 && <p>{errors.password1}</p>}
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
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      <div className="form-content-right">
        <label htmlFor="EmployeeID" className="EmployeeID-label">
          Employee number
        </label>
        <input
          id="EmployeeID"
          type="EmployeeID"
          name="EmployeeID"
          className="form-label"
          placeholder="Enter Employee ID"
          value={values.EmployeeID}
          onChange={handleChange}
        />
        {errors.EmployeeID && <p>{errors.EmployeeID}</p>}
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
