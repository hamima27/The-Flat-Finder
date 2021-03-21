export default function validateInfo(values) {
  let errors = {};

  if (!values.email1) {
    errors.email1 = "Email Required";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Enter a Valid Email";
  }

  if (!values.email2) {
    errors.email2 = "Please Confirm Email";
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Please Confirm Email";
  }

  if (!values.password1) {
    errors.password1 = "Password is required";
  } else if (values.password1.length < 6) {
    errors.password1 = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password confirmation is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  if (!values.EmployeeID) {
    errors.EmployeeID = "Employee ID is required";
  } else if (values.EmployeeID.length !== 6) {
    errors.password2 = "Employee ID needs to be 6 digits long";
  }
  return errors;
}
