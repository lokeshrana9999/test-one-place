import React, { Component } from "react";
import Avatar from "react-avatar";
import { Flex } from "antd-mobile";
import styled, { withTheme } from "styled-components";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Button, PageLayout } from "../look";
// import ProfileVideoPlayer, {BigPlayButton} from "./ProfileVideoPlayer";

const ProfileName = styled.h1`
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

class Profile extends Component {
  render() {
    console.log("profile", this.props);
    const { theme } = this.props;
    return (
      <div>
        <PageLayout>
          <div
            style={{
              paddingTop: "70px",
              paddingBottom: "0px",
            }}
            align="center"
          >
            <Avatar
              size="150"
              round={true}
              src="https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c"
            />
          </div>
          <ProfileName>Hugo</ProfileName>
          <ProfileSmallText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </ProfileSmallText>
          <br />
          <div align="center">
            <Flex justify="center" style={{ width: "60%" }}>
              <Flex.Item>
                <div align="center">
                  <AiFillFacebook
                    style={{ color: theme.textColor }}
                    size="30"
                  />
                </div>
              </Flex.Item>
              <Flex.Item>
                <div align="center">
                  <AiFillInstagram
                    style={{ color: theme.textColor }}
                    size="30"
                  />
                </div>
              </Flex.Item>
              <Flex.Item>
                <div align="center">
                  <AiFillLinkedin
                    style={{ color: theme.textColor }}
                    size="30"
                  />
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
          <br />
          <Button type="primary">Join My Super Fam</Button>
          <br />
          <Flex justify="between" style={{ width: "100%" }}>
            <Flex.Item>
              <ProfileSmallText align="center">{`Visits`}</ProfileSmallText>
              <ProfileStats>{"16627"}</ProfileStats>
            </Flex.Item>
            <Flex.Item>
              <ProfileSmallText align="center">{`Super Fans`}</ProfileSmallText>
              <ProfileStats>{"1662"}</ProfileStats>
            </Flex.Item>
          </Flex>
          <br />
          {/* <Flex justify="center">
            <Flex.Item>
              <ProfileVideoPlayer src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </ProfileVideoPlayer>
            </Flex.Item>
            <Flex.Item>
              <ProfileVideoPlayer src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </ProfileVideoPlayer>
            </Flex.Item>
          </Flex> */}
        </PageLayout>
      </div>
    );
  }
}
export default withTheme(Profile);
