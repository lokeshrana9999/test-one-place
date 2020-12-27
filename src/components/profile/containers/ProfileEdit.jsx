import React from "react";
// import Avatar from "react-avatar";
// import { Flex } from "antd-mobile";
// import { Link } from "react-router-dom";
import { message } from "antd";

import styled, { withTheme } from "styled-components";

import { withUser } from "../../auth/Auth";
import {
  withAddProfile,
  withSocialMediaCategories,
} from "../ProfileOperations";
import ProfileEditView from "../components/ProfileEditView";

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
  height: fit-content;
  margin-top: 40px;
  background-color: #211e28;
`;

const ProfileEdit = (props) => {
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
    const { userProfile: profileValues } = values;
    console.log("onSubmitProfileValues", profileValues);
    try {
      message.loading({
        content: "Updating Profile Info",
        duration: 0,
      });
      const sending = await profileMutation(profileValues);
      console.log(sending);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "Profile Updated",
        });
        history.push("/");
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

  console.log("currentUser", props);
  return <ProfileEditView onSubmit={onSubmit} user={currentUser} />;
};

export default withUser(withAddProfile(withSocialMediaCategories(ProfileEdit)));
