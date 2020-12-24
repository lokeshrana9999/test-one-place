import React, { useState, useContext } from "react";
import styled, { withTheme } from "styled-components";
import { message } from "antd";
import { useMutate } from "restful-react";
import { connect } from "react-redux";

import { WhiteSpace } from "../look/mobile";
import LoginForm from "./LoginForm";
import { ApiContext, AuthApiUrls } from "../../api";
import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

const LoginView = (props) => {
  const { history, setRefreshTokene, setAccessTokene, accessToken, refreshToken } = props;
  console.log('loginview', accessToken);
  const defaultApiUrl = useContext(ApiContext);
  // setAccessTokene('ksdjflsdjflj')
  const { mutate: sendOtpMutation, sendOtpLoading } = useMutate({
    verb: "POST",
    path: defaultApiUrl + AuthApiUrls.sendOtp,
  });

  const { mutate: verifyOtpMutation, verifyOtpLoading } = useMutate({
    verb: "POST",
    path: defaultApiUrl + AuthApiUrls.verifyOtp,
  });

  const sendOtp = async (values) => {
    try {
      message.loading({
        content: "Sending Otp",
        duration: 0,
      });
      console.log("sentOtp", values);
      const sending = await sendOtpMutation({ phoneNumber: values });
      console.log(sending);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "Otp Sent",
        });
      } else {
        message.error({
          duration: 2,
          content: sending.data.message,
        });
      }
      return sending;
    } catch (e) {
      message.destroy();
      console.log("error", e);
      message.error({
        duration: 2,
        content: e.data.message,
      });
    }
  };

  const onSubmit = async (values) => {
    try {
      message.loading({
        content: "Verifying Otp",
        duration: 0,
      });
      console.log("sentOtp", values);
      const sending = await verifyOtpMutation(values);
      console.log(sending);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "OTP Verified... Logged In",
        });
        setAccessTokene(sending.accessToken);
        setRefreshTokene(sending.refreshToken);
        history.push("/profile");
      } else {
        message.error({
          duration: 2,
          content: sending.data.message,
        });
      }
      return sending;
    } catch (e) {
      message.destroy();
      console.log("error", e);
      message.error({
        duration: 2,
        content: e.data.message,
      });
    }
  };

  return (
    <div
      style={{
        padding: "20px 0",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        placeItems: "center",
        background: "white",
      }}
    >
      <div style={{ maxWidth: "500px", height: "100%", width: "100%" }}>
        <PageHead>OnePlace Universe</PageHead>
        <WhiteSpace size="xl" />
        <div align="center">
          <img
            src="https://onelinkie.s3.ap-south-1.amazonaws.com/76f5d642-2efe-4bc0-8743-df58baf1b740-login_banner_cropped2.png"
            width="80%"
            alt="login_banner"
          />
        </div>
        <WhiteSpace size="xl" />
        <FormWrapper>
          <img
            width="100%"
            src="https://onelinkie.s3.ap-south-1.amazonaws.com/6f2b3bbc-8868-4865-a606-744335070a61-login_form_bc_cropped.png"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "130px",
              left: "30px",
              right: "30px",
            }}
          >
            <LoginForm sendOtp={sendOtp} onSubmit={onSubmit} />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
const mapStateToProps = (state /*, ownProps*/) => {
  console.log('mapstatetoprops', state);
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(LoginView));
