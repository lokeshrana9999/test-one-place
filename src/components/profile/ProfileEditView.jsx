import React, { useContext } from "react";
// import Avatar from "react-avatar";
// import { Flex } from "antd-mobile";
// import { Link } from "react-router-dom";
import { message } from "antd";

import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";
import { ApiContext, UserApiUrls, ProfileApiUrls } from "../../api";
import { useGet, useMutate } from "restful-react";

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

const ProfileEditView = (props) => {
  const { accessToken, setAccessTokene, refreshToken, history } = props;
  setAccessTokene('');
  const defaultApiUrl = useContext(ApiContext);
  const apiUrl = defaultApiUrl + UserApiUrls.getCurrentUser;
  const { data: currentUserData, loading: currentUserLoading, error } = useGet({
    path: apiUrl,
  });

  var profileMutation, profileMutationLoading;

  if(currentUserData && currentUserData.user && currentUserData.user.userProfile){

    const { mutate: postUserProfileMutation, sendOtpLoading } = useMutate({
      verb: "PUT",
      path: defaultApiUrl + ProfileApiUrls.putUserProfile(currentUserData.user.userProfile._id),
    });
    profileMutation=postUserProfileMutation
  }else{
    const { mutate: postUserProfileMutation, sendOtpLoading } = useMutate({
      verb: "POST",
      path: defaultApiUrl + ProfileApiUrls.postUserProfile,
    });
    profileMutation=postUserProfileMutation
  }



  console.log(
    "profileeditview",
    accessToken,
    currentUserData,
    currentUserLoading,
    error
  );
  const user = currentUserData && currentUserData.user;

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
      {" "}
      <div
        style={{
          maxWidth: "500px",
          height: "100%",
          width: "100%",
          overflow: "hidden",
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
            <ProfileForm user={user} onSubmit={onSubmit} />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
const mapStateToProps = (state /*, ownProps*/) => {
  console.log("mapstatetoprops", state);
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(ProfileEditView));
