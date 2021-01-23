import React, { Component, useState } from "react";
import Avatar from "react-avatar";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiFillEdit, AiOutlineLogout } from "react-icons/ai";
import { connect } from "react-redux";

import { IoPaperPlaneOutline } from "react-icons/io5";
import { getValidUrl } from "../../../helper";
import { Button, Switch } from "@look/mobile";
import PageLayout from "@look/PageLayout";
// import { withCurrentUser } from "../auth/Auth";
import ProfileBlocks from "../../block/ProfileBlocks";
// import { BigPlayButton } from "./ProfileVideoPlayer";
import { setAccessTokene, setRefreshTokene } from "../../../store/appReducer";

const ProfileName = styled.h1`
  margin-top: 10px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-family: Rubik;
  font-size: 22px;
  /* word-spacing: -3px; */
`;

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-family: Rubik;
  font-size: 22px;
  /* word-spacing: -3px; */
`;

const PublicLinkWrapper = styled.div`
  /* color: ${(props) => props.theme.textColor}; */
  /* text-align: center; */
  border-radius: 7px;
  border: solid 1px #f2f2f2;
  background-color: #f8f8f8;
  height: 60px;
  font-family: Rubik;
  display: grid;
  place-items: center;
  padding: 0 15px;
  /* font-family: Rubik; */
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #686868;
`;

const ProfileSmallText = styled.p`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  margin-bottom: 0px;
  font-family: Rubik;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  /* word-spacing: -3px; */
`;

const PageContainer = styled.p`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  bottom: 0;
  margin: auto;
  max-width: 500px;
  padding:0 20px;
`;

const StyledButton = styled(Button)`
  font-family: Rubik;
  /* font-size: 25px; */
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  font-size: 15px;
  background: #4643d3;
`;

const Profile = (props) => {
  const { userData, self, theme, setAccessTokene, setRefreshTokene, history } = props;


  return (
      <PageLayout>
         <PageHead>My Orders</PageHead>

      
       
      </PageLayout>
  );
};

const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Profile));
