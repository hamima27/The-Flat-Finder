import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSucess from "./FormSuccess";

const Form = () => {
  const [isSumbitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSumbitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
