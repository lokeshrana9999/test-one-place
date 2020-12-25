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
import { WhiteSpace } from "../look/mobile";
import ProfileForm from "./ProfileForm";
import { withUser } from "../auth/Auth";
import { withAddProfile } from "./ProfileOperations";

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
  height: fit-content;
  background-color: #211E28;
`;

const ProfileEditView = (props) => {
  const {
    history,
    currentUser,
    postUserProfileMutation,
    putUserProfileMutation,
  } = props;
  // setAccessTokene('');

  var profileMutation;

  if (currentUser && currentUser.userProfile) {
    profileMutation = putUserProfileMutation;
  } else {
    profileMutation = postUserProfileMutation;
  }
  const user = currentUser;

  const onSubmit = async (values) => {
    console.log("updateProfile", values);
    try {
      message.loading({
        content: "Updating Profile Info",
        duration: 0,
      });
      const sending = await profileMutation(values);
      console.log(sending);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "Profile Updated",
        });
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

  console.log("currentUser", currentUser);
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
          <img
            style={{
              width: "100%",
              position: "absolute",
              top: '-6px',
              left: 0,
              right: 0,
              zIndex:'10'
            }}
            src="https://onelinkie.s3.ap-south-1.amazonaws.com/55361b36-a8c0-4119-833a-d0eb102a0616-method-draw-image%20%286%29.png"
            alt=""
          />
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
            <ProfileForm user={user} onSubmit={onSubmit} />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default withUser(withAddProfile(withTheme(ProfileEditView)));
