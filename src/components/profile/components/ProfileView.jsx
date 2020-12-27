import React, { Component, useState } from "react";
import Avatar from "react-avatar";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import Loadable from "react-loadable";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillEdit,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { Button, Switch } from "../../look/mobile";
import PageLayout from "../../look/PageLayout";
// import { withUser } from "../auth/Auth";
import ProfileBlocks from "../../block/ProfileBlocks";
// import { BigPlayButton } from "./ProfileVideoPlayer";

const ProfileName = styled.h1`
  margin-top: 10px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;

const ProfileSmallText = styled.p`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  margin-bottom: 0px;
`;

const ProfileStats = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
  opacity: 1;
  margin-top: 5px;
`;

const Profile = (props) => {
  const { userData, self, theme } = props;

  return (
    <div>
      <PageLayout>
        {self && <PageHead>OnePlace Universe</PageHead>}
        <div
          style={{
            position: "relative",
            width: "fit-content",
            margin: "70px auto 0",
          }}
          align="center"
        >
          {self && (
            <Link to="/profile/edit">
              <Button
                type="primary"
                style={{
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
            <Flex.Item>
              <div align="center">
                <AiFillFacebook style={{ color: "#0674E7" }} size="30" />
              </div>
            </Flex.Item>
            <Flex.Item>
              <div align="center">
                <AiFillInstagram style={{ color: theme.textColor }} size="30" />
              </div>
            </Flex.Item>
            <Flex.Item>
              <div align="center">
                <AiFillLinkedin style={{ color: theme.textColor }} size="30" />
              </div>
            </Flex.Item>
            <Flex.Item>
              <div align="center">
                <AiOutlineWhatsApp
                  style={{ color: theme.textColor }}
                  size="30"
                />
              </div>
            </Flex.Item>
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
        <ProfileBlocks self={self} userData={userData} />
      </PageLayout>
    </div>
  );
};
export default withTheme(Profile);
