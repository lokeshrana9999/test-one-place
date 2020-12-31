import React from "react";
// import Avatar from "react-avatar";
// import { Flex } from "antd-mobile";
// import { Link } from "react-router-dom";
import { message } from "antd";

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
import { WhiteSpace } from "../../look/mobile";
import ProfileForm from "./ProfileForm";

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-weight: bold;
  font-family: Circular Std Medium;
  word-spacing: -3px;
  /* font-weight: normal; */
  font-stretch: normal;
  font-style: normal;
  font-size: 22px;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
  height: fit-content;
  margin-top: 40px;
  background-color: #4643d3;
  overflow: hidden;
  padding-top: 50px;
`;

const ProfileEditView = (props) => {
  const { user, onSubmit, socialMediaCategoryList } = props;
  // setAccessTokene('');
  console.log("profileedit", props);
  return (
    <div
      style={{
        padding: "20px 0 0 0",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        placeItems: "center",
        background: "white",
        overflowY: "scroll",
      }}
    >
      {" "}
      <div
        style={{
          maxWidth: "500px",
          minHeight: "100%",
          height: "fit-content",
          width: "100%",
          // overflow: "hidden",
        }}
      >
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
          <div
            style={{
              height: "390px",
              width: "100%",
              position: "absolute",
              top: "-2px",
              left: "-5px",
              right: 0,
              zIndex: "10",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "100%",
              }}
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
            <ProfileForm
              user={user}
              onSubmit={onSubmit}
              socialMediaCategoryList={socialMediaCategoryList}
            />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default withTheme(ProfileEditView);
