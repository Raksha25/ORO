import React, { useState, useRef, createRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import InputField from "./InputField";

function SignUpForm() {
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);

      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    console.log("Logged In");
    //Carry on as normal
  };

  return (
    <div className="formBox">
      <h2 className="formHeading"> Sign up </h2>

      <form onSubmit={submitForm} className="form">
        <div id="nameSection">
          <InputField
            className="inputField"
            ref={inputRefs.current[0]}
            type="text"
            name="firstName"
            label="First Name"
            onChange={handleChange}
            validation={"required|max:12"}
          ></InputField>
          <InputField
            className="inputField"
            ref={inputRefs.current[1]}
            type="text"
            name="lastName"
            label="Last Name"
            onChange={handleChange}
            validation={"required|max:12"}
          />
        </div>
        <InputField
          ref={inputRefs.current[2]}
          type="password"
          name="password"
          label="Password"
          validation={"required|min:6|max:12"}
          onChange={handleChange}
        />
        <InputField
          ref={inputRefs.current[3]}
          type="number"
          name="phone"
          label="Phone Number"
          validation={"required|min:6|max:12"}
          onChange={handleChange}
        />{" "}
        <InputField
          ref={inputRefs.current[4]}
          name="date"
          placeholder="2001-07-25"
          label="Date of Birth"
          validation={"required"}
          onChange={handleChange}
        />{" "}
        <InputField
          ref={inputRefs.current[5]}
          type="email"
          name="email"
          label="Email"
          onChange={handleChange}
        />
        <button type="submit"> Continue </button>{" "}
      </form>
    </div>
  );
}

export default SignUpForm;
