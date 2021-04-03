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
    console.log(values, "is changing");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values, "is submitted");

    //not sure where to put the firebase call as idk where the final step is
    //i.e. the part where the data is fully validated so i'm just putting it
    //for now

    const itemsRef = firebase.database().ref("users");
    const user = {
      username: values.email2,
      password: values.password2,
      employeeID: values.EmployeeID
    };
    itemsRef.push(user);
    setValues({
      email1: "",
      email2: "",
      password1: "",
      password2: "",
      EmployeeID: ""
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
