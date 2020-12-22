import React, { Component } from "react";
// import Avatar from "react-avatar";
// import { Flex } from "antd-mobile";
// import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
// import Loadable from "react-loadable";
// import {
//   AiFillFacebook,
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiOutlineWhatsApp,
//   AiFillEdit,
//   AiOutlinePlusCircle,
// } from "react-icons/ai";
import { WhiteSpace } from "../look/mobile";
import ProfileForm from "./ProfileForm";

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

class ProfileEditView extends Component {
  state = {
    self: true,
  };

  render() {
    return (
      <div
        style={{
          padding: "20px 0",
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          display: "grid",
          placeItems: "center",
          background:'white'
        }}
      >
        {" "}
        <div style={{ maxWidth: "500px", height: "100%", width: "100%" }}>
          <PageHead>OnePlace Universe</PageHead>
          <WhiteSpace size="xl" />
          <div align="center">
            <img
              src="https://onelinkie.s3.ap-south-1.amazonaws.com/45d5377d-4542-44b1-b6a5-38e8df2ef207-profile_edit.png"
              width="80%"
              alt="login_banner"
            />
          </div>
          <WhiteSpace size="xl" />
          <FormWrapper>
            <img
              width="100%"
              src="https://onelinkie.s3.ap-south-1.amazonaws.com/6996885c-21f7-49b0-b636-64be9d3d9655-output-onlinepngtools%20%288%29.png"
              alt=""
            />
            <div
              style={{
                position: "absolute",
                top: "90px",
                left: "30px",
                right: "30px",
              }}
            >
              <ProfileForm />
            </div>
          </FormWrapper>
        </div>
      </div>
    );
  }
}
export default withTheme(ProfileEditView);
