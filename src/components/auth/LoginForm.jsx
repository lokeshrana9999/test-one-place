import React, { Component } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
} from "../form";
import { withFormik } from "formik";

import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "../look/mobile";
import { Input, Form, Alert } from "../look/web";
import { AiFillCheckCircle, AiOutlineEllipsis } from "react-icons/ai";

const LoginFormContainer = styled.div`
  color: white;
  padding: 30px 20px 32px;
  border-radius: 20px;
  position: relative;
  background-color: transparent;
`;

const LoginFormBackgroundFilter = styled.div`
  border-radius: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  backdrop-filter: blur(50px);
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89); */
  background-color: white;
`;

const Heading = styled.h1`
  font-family: Circular Std Medium;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const LargeHeadingComponent = styled.div`
  font-family: Circular Std Medium;
  font-size: 30px;
  font-weight: 1200;
`;

const InputStylized = styled(Input)`
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 60px !important;
  font-size: 20px;
  padding: 0 20px;
  caret-color: white;
  color: white;
  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;

const InputWithSuffixStylized = styled(Input)`
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 60px !important;
  padding: 0 20px;

  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  input {
    background: inherit;
    font-size: 20px;
    caret-color: white;
    color: white;
  }
`;

const loginFormSchema = {
  phoneNumber: [required, phoneNumber],
  otp: [required, minLength(4)],
};

const LoginForm = (props) => {
  console.log("loginform", props);
  const { values, handleSubmit } = props;
  return (
    <LoginFormContainer>
      <LoginFormBackgroundFilter />
      <Heading>
        “Time to set up your{" "}
        <LargeHeadingComponent>Oneplace Universe”</LargeHeadingComponent>
      </Heading>
      <WhiteSpace size="xl" />
      <Form name="login" onSubmit={handleSubmit}>
        <Field
          name="phoneNumber"
          component={InputStylized}
          type="text"
          label={"Your 10 digit mobile number"}
          placeholder="Your 10 digit mobile number"
          value={values.phoneNumber}
        />

        <WhiteSpace size="xl" />
        <Field
          name="otp"
          component={InputWithSuffixStylized}
          type="text"
          label={"Enter Your OTP"}
          placeholder="Enter Your OTP"
          value={values.otp}
          suffix={
            <AiFillCheckCircle size="32" style={{ color: "#32b264" }} /> || (
              <AiOutlineEllipsis size="20" />
            )
          }
        />
      </Form>
    </LoginFormContainer>
  );
};

const LoginFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {
    return { phoneNumber: "", otp: "" };
  },

  handleSubmit(values, { props: { onSubmit } }) {
    console.log(values);
  },
  validate: (values) => validate(values, loginFormSchema),
  displayName: "LoginForm", // helps with React DevTools
});

export default withTheme(LoginFormWithFormik(LoginForm));
