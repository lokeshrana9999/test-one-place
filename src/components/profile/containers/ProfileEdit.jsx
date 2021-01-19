import React from "react";
// import Avatar from "react-avatar";
// import { Flex } from "antd-mobile";
// import { Link } from "react-router-dom";
import { message } from "antd";

import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";
// import { ApiContext, ProfileApiUrls } from "../../api";
import { withCurrentUser } from "../../auth/Auth";
// import { setAccessTokene, setRefreshTokene } from "../../store/appReducer";

import {
  withAddProfile,
  withSocialMediaCategories,
  withAddSocialMedia,
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
    socialMediaCategoryList,
    postAddSocialMedia,
  } = props;
  // setAccessTokene('');

  var profileMutation;

  if (currentUser && currentUser.userProfile) {
    profileMutation = putUserProfileMutation;
  } else {
    profileMutation = postUserProfileMutation;
  }
  const user = currentUser;

  const handleSocialLinksSubmission = async (socialMediaLinks) => {
    // var socialSending = [];

    const promises = await socialMediaLinks.map(async (socia, key) => {
      const responseSend = await postAddSocialMedia(socia);
      return (
        responseSend &&
        responseSend.socialMediaLink &&
        responseSend.socialMediaLink._id
      );
    });
    const socialSending = await Promise.all(promises)
    return socialSending;
  };

  const onSubmit = async (values) => {
    let profileValues = values;
    const socialMediaLinks = profileValues.socialMediaLinks;
    try {
      message.loading({
        content: "Updating Profile Info",
        duration: 0,
      });
      const socialSending = await handleSocialLinksSubmission(socialMediaLinks);
      const profileSubmissionObj = {
        ...profileValues,
        socialMediaLinks: socialSending,
      };
      // const profileSubmissionObj = {
      //   bio: "I am a web developer",
      //   firstName: "Lokesh",
      //   lastName: "Rana",
      //   profileImage: null,
      //   socialMediaLinks: ["5fe9cab0ebe9b40017220f90"],
      //   username: "lokeshrana9999",
      // };
      // // const sending = null;
      const sending = await profileMutation(profileSubmissionObj);
      message.destroy();
      if (sending) {
        message.success({
          duration: 2,
          content: "Profile Updated",
        });
        history.push("/");
      } else {
        socialSending &&
          socialSending.data &&
          sending &&
          sending.data &&
          message.error({
            duration: 2,
            content: `${sending.data.message}`,
          });
      }
      return sending;
    } catch (e) {
      message.destroy();
      console.log("error", e);
      e &&
        e.data &&
        message.error({
          duration: 2,
          content: e.data.message,
        });
    }
  };

  return (
    <ProfileEditView
      onSubmit={onSubmit}
      user={currentUser}
      socialMediaCategoryList={socialMediaCategoryList}
    />
  );
};

// const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
// const mapStateToProps = (state /*, ownProps*/) => {
//   console.log("mapstatetoprops", state);
//   return {
//     accessToken: state.app.accessToken,
//     refreshToken: state.app.refreshToken,
//   };
// };

export default withCurrentUser(
  withSocialMediaCategories(withAddProfile(withAddSocialMedia(ProfileEdit)))
);
