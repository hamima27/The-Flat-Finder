/* import React, { useState } from "react";
import loginForm from "./loginForm";
import FormSuccess from "./FormSuccess";
import style from "./loginForm.css";
//import Homepage from "./Homepage.js";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container2">
        <span className="close-btn2">×</span>
        <div className="form-content-left2">
          <img
            src="https://cdn.dribbble.com/users/989466/screenshots/12002010/media/41c270f90ea9e4d1507c3c0fc4922dc3.png?compress=1&resize=400x300"
            className="form-img2"
            alt="putpichere"
          />
        </div>
        {!isSubmitted ? <loginForm submitForm={submitForm} /> : <Homepage />}
      </div>
    </>
  );
};

export default Form; */
