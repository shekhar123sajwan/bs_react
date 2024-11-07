import React from "react";

const Login = () => {
  // create state object for form fields
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    state: "",
    profile: "",
  });

  const [error, setError] = React.useState(false);
  // handle form field changes
  const handleChange = (e) => {
    let val = e.target.name === "profile" ? e.target.files[0] : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: val,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setError(true); // Set error to true if validation fails
      console.log("Form validation failed");
    } else {
      setError(false); // Clear error if validation succeeds
      console.log("Form submitted successfully");
      // Add your submit logic here
    }
  };
  // validate form data
  const validateForm = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.username &&
      formData.state &&
      formData.profile
    );
  };

  return (
    <div className="container col-md-6">
      <form
        className="row g-3"
        name="login"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">
            First name {error}
          </label>
          <input
            type="text"
            className={`form-control ${
              !formData.firstName && error ? "is-invalid" : ""
            }`}
            name="firstName"
            id="validationServer01"
            onChange={handleChange}
            value={formData.firstName}
          />
          <div className="invalid-feedback">Please fill first name</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className={`form-control ${
              !formData.lastName && error ? "is-invalid" : ""
            }`}
            name="lastName"
            id="validationServer02"
            onChange={handleChange}
            value={formData.lastName}
          />
          <div className="invalid-feedback">Please fill valid last name!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServerUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              className={`form-control ${
                !formData.username && error ? "is-invalid" : ""
              }`}
              value={formData.username}
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            />
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationServer04" className="form-label">
            State
          </label>
          <select
            className={`form-select ${
              !formData.state && error ? "is-invalid" : ""
            }`}
            value={formData.state}
            name="state"
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            onChange={handleChange}
          >
            <option defaultValue={"delhi"}>Delhi</option>
            <option defaultValue={"NOIDA"}>NOIDA</option>
          </select>

          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="formFile" className="form-label">
            Image
          </label>
          <input
            className={`form-select ${
              !formData.profile && error ? "is-invalid" : ""
            }`}
            type="file"
            onChange={handleChange}
            id="formFile"
            name="profile"
          />
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid image.
          </div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
