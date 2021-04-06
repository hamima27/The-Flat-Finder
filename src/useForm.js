import { useState, useEffect } from "react";
import firebase from "./firebase";

const useForm = (callback, validate, validate2) => {
  const [values, setValues] = useState({
    email1: "",
    email2: "",
    password1: "",
    password2: "",
    EmployeeID: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    /*setValues({
      email1: "",
      email2: "",
      password1: "",
      password2: "",
      EmployeeID: ""
    });*/

    if (Object.keys(errors).length === 0) {
      const itemsRef = firebase.database().ref("users");
      const user = {
        username: values.email2,
        password: values.password2,
        employeeID: values.EmployeeID
      };
      itemsRef.push(user);
      console.log("pushed");
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
