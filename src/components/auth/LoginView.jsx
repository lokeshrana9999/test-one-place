import React, { useState, useContext } from "react";
import styled, { withTheme } from "styled-components";
import { message } from "antd";
import { useMutate } from "restful-react";
import { connect } from "react-redux";
import queryString from "query-string";

import { WhiteSpace } from "@look/mobile";
import LoginForm from "./LoginForm";
import { ApiContext, AuthApiUrls } from "@api";
import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-weight: bold;
  font-family: Rubik;
  /* word-spacing: -3px; */
  /* font-weight: normal; */
  font-stretch: normal;
  font-style: normal;
  font-size: 22px;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
  bottom:0;
  height: fit-content;
  overflow-x:hidden;
  margin-top: -30px;
  padding-top:50px;
  background-color: #4643d3;
  padding-bottom:40px;
`;

const LoginView = (props) => {
  const {
    history,
    setRefreshTokene,
    setAccessTokene,
    accessToken,
    refreshToken,
  } = props;
  const defaultApiUrl = useContext(ApiContext);
  // setAccessTokene('')
  // setRefreshTokene('')
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
      const sending = await sendOtpMutation({ phoneNumber: values });
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
      const sending = await verifyOtpMutation(values);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "OTP Verified... Logged In",
        });
        setAccessTokene(sending.accessToken);
        setRefreshTokene(sending.refreshToken);
        const params = queryString.parse(history.location.search);
        history.push(params.redirectBack ? params.redirectBack : "/");
      } else {
        message.error({
          duration: 2,
          content: sending.data.message,
        });
      }
      return sending;
    } catch (e) {
      message.destroy();
      message.error({
        duration: 2,
        content: e.data.message,
      });
    }
  };

  return (
    <div
      style={{
        padding: "20px 0 0",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        placeItems: "center",
        background: "white",
      }}
    >
      <div style={{ maxWidth: "500px", height: "100%", width: "100%", overflowX:'hidden' }}>
        <PageHead>OnePlace Universe</PageHead>
        <WhiteSpace size="xl" />
        <div align="center">
          <img
            style={{position:'relative', zIndex:'100'}}
            src="https://onelinkie.s3.ap-south-1.amazonaws.com/76f5d642-2efe-4bc0-8743-df58baf1b740-login_banner_cropped2.png"
            width="80%"
            alt="login_banner"
          />
        </div>
        <WhiteSpace size="xl" />
        <FormWrapper>
          <div
            style={{
              height: "390px",
              width: "100%",
              position: "absolute",
              top: "-2px",
              left: '-5px',
              right: 0,
              zIndex: "10",
              overflow: "hidden",

            }}
          >
            <img
              width="100%"
              src="https://onelinkie.s3.ap-south-1.amazonaws.com/7b5e7196-b731-4b2c-a067-9caf4bda0d75-group-219%403x.png"
              alt=""
            />
          </div>
          <div
            style={{
              // top: "0",
              // left: "0",
              position: "relative",
              // right: "0",
              background: "transparent",
              padding: "80px 20px 0",
              zIndex: "12",
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
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(LoginView));
