import React, { Component, useState } from "react";
import Avatar from "react-avatar";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiFillEdit, AiOutlineLogout } from "react-icons/ai";
import { connect } from "react-redux";

import { IoPaperPlaneOutline } from "react-icons/io5";
import { getValidUrl } from "../../../helper";
import { Button, Switch } from "../../look/mobile";
import PageLayout from "../../look/PageLayout";
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
  font-weight: normal;
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
  const { username } = userData;

  const PageWrapper = self ? PageLayout : PageContainer;

  return (
    <div>
      <PageWrapper>
        {self && <PageHead>OnePlace Universe</PageHead>}

        {self && (
          <Link to={`/${username}`}>
            <PublicLinkWrapper>
              <Flex justify="between" style={{ width: "100%" }}>
                <Flex.Item
                  style={{ flex: 4 }}
                >{`oneplace.me/${username}`}</Flex.Item>{" "}
                <Flex.Item align="right" style={{ paddingTop: "6px" }}>
                  <IoPaperPlaneOutline size={30} />
                </Flex.Item>
              </Flex>
            </PublicLinkWrapper>
          </Link>
        )}
        <div
          style={{
            position: "relative",
            width: "fit-content",
            margin: "20px auto 0",
          }}
          align="center"
        >
          {self && (
            <Link to="/profile/edit">
              <Button
                type="primary"
                style={{
                  background: "#4643D3",
                  position: "absolute",
                  bottom: "-10px",
                  right: "-10px",
                  zIndex: "10",
                  width: "40px",
                  height: "40px",
                  borderRadius: "40px",
                }}
              >
                <AiFillEdit size="20" />
              </Button>
            </Link>
          )}
          <Avatar
            size="150"
            style={{ borderRadius: "20px", overflow: "hidden" }}
            src={
              userData &&
              userData.userProfile &&
              userData.userProfile.profileImage &&
              userData.userProfile.profileImage.url
            }
          />
        </div>
        <ProfileName>
          {userData && userData.userProfile && userData.userProfile.firstName}{" "}
          {userData && userData.userProfile && userData.userProfile.lastName}
        </ProfileName>
        <ProfileSmallText>
          {userData && userData.userProfile && userData.userProfile.bio}
        </ProfileSmallText>
        <br />
        <div align="center">
          <Flex justify="center" style={{ width: "60%" }}>
            {userData &&
              userData.userProfile &&
              userData.userProfile.socialMediaLinks &&
              userData.userProfile.socialMediaLinks.map((socia, key) => (
                <a
                  href={getValidUrl(socia && socia.link)}
                  target="_blank"
                  key={key}
                >
                  <div align="center" style={{ margin: "0 5px" }}>
                    <img
                      height="30px"
                      width="30px"
                      src={
                        socia &&
                        socia.category &&
                        socia.category.image &&
                        socia.category.image.url
                      }
                      alt=""
                    />
                  </div>
                </a>
              ))}
          </Flex>
        </div>
        {/* <br />
        <Flex justify="between" style={{ width: "100%" }}>
          <Flex.Item>
            <ProfileSmallText align="center">{`Visits`}</ProfileSmallText>
            <ProfileStats>{"16627"}</ProfileStats>
          </Flex.Item>
          <Flex.Item>
            <ProfileSmallText align="center">{`Super Fans`}</ProfileSmallText>
            <ProfileStats>{"1662"}</ProfileStats>
          </Flex.Item>
        </Flex> */}
        {/* {!self && (
          <Button style={{ marginTop: "20px" }} type="primary">
            Join My Super Fam
          </Button>
        )} */}
        <br />
        <ProfileBlocks self={self} username={username} history={history} />
        <br />
        {self && (
          <StyledButton
            type="primary"
            icon={<AiOutlineLogout style={{ fontSize: "20px" }} />}
            onClick={() => {
              setAccessTokene("");
              setRefreshTokene("");
            }}
          >
            Log Out
          </StyledButton>
        )}
      </PageWrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Profile));
