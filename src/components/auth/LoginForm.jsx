import React, { useState } from "react";
import {
  FieldAdapter as Field,
  phoneNumber,
  required,
  minLength,
  validate,
} from "../form";
import { withFormik } from "formik";
import { message } from "antd";
import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "../look/mobile";
import { Input, Form, Alert, Button } from "../look/web";
import { AiFillCheckCircle, AiOutlineEllipsis } from "react-icons/ai";

const LoginFormContainer = styled.div`
  color: white;
  padding: 30px 20px 32px;
  border-radius: 20px;
  position: relative;
  background-color: transparent;
  .ant-form-item-extra {
    color: white !important;
  }
`;

const LoginFormBackgroundFilter = styled.div`
  border-radius: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.3;
  backdrop-filter: blur(50px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89);
  background-color: black;
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
  background-color: transparent !important;
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
  :focus {
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
`;

const InputWithSuffixStylized = styled(Input)`
  background: transparent !important;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height: 60px !important;
  padding: 0 20px;

  font-family: Circular Std Medium;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  input {
    background: inherit !important;
    font-size: 20px;
    caret-color: white;
    color: white;
  }
  input:focus {
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
    caret-color: white;
    color: white;
    background-color: transparent !important;
  }
`;

const loginFormSchema = {
  phoneNumber: [required, phoneNumber],
  otp: [required, minLength(6)],
};

const LoginForm = (props) => {
  const { values, handleSubmit, sendOtp } = props;
  const [otpSent, setOtpSent] = useState(false);
  console.log("phoneNumber", phoneNumber(values.phoneNumber));

  const handleSendOtp = async () => {
    const phoneValidator = phoneNumber(values.phoneNumber);
    if (values.phoneNumber !== "" && !phoneValidator) {
      try {
        await sendOtp(values.phoneNumber);
        setOtpSent(true);
      } catch (e) {
        console.log('formerror', e);
      }
    } else {
      message.error({
        duration: 5,
        content: "Please enter a valid phone number",
      });
    }
  };

  const handleReEnter = () => {
    setOtpSent(false);
  };
  return (
    <LoginFormContainer>
      <LoginFormBackgroundFilter />
      <Heading>
        “Time to set up your{" "}
        <LargeHeadingComponent>Oneplace Universe”</LargeHeadingComponent>
      </Heading>
      <WhiteSpace size="xl" />
      <Form name="login" onFinish={handleSubmit}>
        <Field
          name="phoneNumber"
          component={InputStylized}
          type="text"
          disabled={otpSent}
          label={"Your 10 digit mobile number"}
          placeholder="Your 10 digit mobile number"
          value={values.phoneNumber}
        />

        <WhiteSpace size="xl" />
        {otpSent && (
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
        )}
        {!otpSent && (
          <Button type="primary" onClick={handleSendOtp} size="large" block>
            Send Otp
          </Button>
        )}
        {otpSent && (
          <React.Fragment>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
            <WhiteSpace size="xl" />
            <Button onClick={handleReEnter} size="large" block>
              Re-enter Phone Number
            </Button>
          </React.Fragment>
        )}
      </Form>
    </LoginFormContainer>
  );
};

const LoginFormWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => {
    return { phoneNumber: "", otp: "" };
  },

  handleSubmit: async (values, { props: { onSubmit } }) => {
    await onSubmit(values)
  },
  validate: (values) => validate(values, loginFormSchema),
  displayName: "LoginForm", // helps with React DevTools
});

export default withTheme(LoginFormWithFormik(LoginForm));
