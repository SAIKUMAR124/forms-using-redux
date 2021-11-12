import { useFormik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { setFormData } from "../redux";
import "./FormPage.css";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  }

  return errors;
};

const FormPage = ({ setUserData }) => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setUserData(values);
      console.log(values);
      setSubmitted(true);
    },
  });

  return (
    <div className="marginTop">
      <h1 className="text-fill-form">Please Fill the form</h1>
      <div className="home-container">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            className="form-inp"
            id='firstName'
            placeholder="Please Enter First Name"
            {...formik.getFieldProps("firstName")}
          />
          <br />
          <div className='error-msg'>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <input
            type="text"
            className="form-inp"
            id='lastName'
            placeholder="Please Enter Last Name"
            {...formik.getFieldProps("lastName")}
          />
          <br />
          <div className='error-msg'>
          {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            </div>

          <input
            type="text"
            className="form-inp"
            id='phoneNumber'
            placeholder="Please Enter Phone number"
            {...formik.getFieldProps("phoneNumber")}
          />
          <br />
          <div className='error-msg'>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div>{formik.errors.phoneNumber}</div>
          ) : null}
          </div>

          <input
            type="text"
            id="email"
            className="form-inp"
            placeholder="Please Enter Email"
            {...formik.getFieldProps("email")}
          />
          <br />
          <div className='error-msg'>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link to="/">
              <button className="submit-btn">Back</button>
            </Link>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      {submitted && <Redirect to="/success" />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (values) => dispatch(setFormData(values)),
  };
};

export default connect(null, mapDispatchToProps)(FormPage);
