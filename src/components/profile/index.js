import React, { Component } from "react";
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
import { Button, PageLayout, Switch } from "../look";
import ProfileCard from "./ProfileCard";
// import { BigPlayButton } from "./ProfileVideoPlayer";

const profileData = {
  name: "Hugo",
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  avatar:
    "https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c",

  social: {
    facebookLink: "www.facebook.com",
    instagramLink: "www.instagram.com",
    linkedinLink: "www.linkedin.com",
    whatsappContact: "+918888888888",
  },
  profileStats: {
    visits: 16627,
    superFans: 1662,
  },
  cardData: {
    length: 4,
    nodes: [
      {
        cursor: 1,
        edge: {
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c",
          text: "Checkout My Youtube Video",
        },
      },
      {
        cursor: 2,
        edge: {
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c",
          text: "Checkout My Youtube Video",
        },
      },
      {
        cursor: 3,
        edge: {
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c",
          text: "Checkout My Youtube Video",
        },
      },
      {
        cursor: 4,
        edge: {
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GiqfYuv1MybkQcHeKqYLgJo2_R7LeoBLs0zjlpOZA=s96-c",
          text: "Checkout My Youtube Video",
        },
      },
    ],
  },
};

const ProfileName = styled.h1`
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

const CardListHeadText = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin-top: 0;
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
  state = {
    self: true,
  };

  render() {
    console.log("profile", this.props);
    const { theme } = this.props;
    const { self } = this.state;
    return (
      <div>
        <PageLayout>
          <Switch
            checked={self}
            onChange={() => {
              this.setState({
                self: !self,
              });
            }}
          />
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
            )}
            <Avatar
              size="150"
              style={{ borderRadius: "20px", overflow: "hidden" }}
              src="https://yt3.ggpht.com/yti/ANoDKi5f9agr7oQdzZxVZZUk2_twBPhEUtrC3Rom4Jj9fg=s88-c-k-c0x00ffffff-no-rj-mo"
            />
          </div>
          <ProfileName>Hugo</ProfileName>
          <ProfileSmallText></ProfileSmallText>
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
          {!self && (
            <Button style={{ marginTop: "20px" }} type="primary">
              Join My Super Fam
            </Button>
          )}
          <br />
          {self && (
            <React.Fragment>
              <Flex justify="between" style={{ width: "100%" }}>
                <Flex.Item>
                  <CardListHeadText>Your Cards</CardListHeadText>
                </Flex.Item>

                <Flex.Item align="right">
                  <Link>
                    <AiOutlinePlusCircle
                      style={{ marginBottom: "-2px", marginRight: "3px" }}
                    />
                    Add A Card
                  </Link>
                </Flex.Item>
              </Flex>
              <CardListHeadText
                style={{ textAlign: "center", marginTop: "15px" }}
              >
                Tap to edit Cards
              </CardListHeadText>
            </React.Fragment>
          )}
          <br />
          {profileData &&
            profileData.cardData &&
            profileData.cardData.nodes &&
            (profileData.cardData.nodes.length === 0 ? (
              <CardListHeadText
                style={{ textAlign: "center", marginTop: "15px" }}
              >
                No Cards
              </CardListHeadText>
            ) : (
              profileData.cardData.nodes.map((node, key) => (
                <ProfileCard
                  image={node.edge.image}
                  text={node.edge.text}
                  key={key}
                  self={self}
                />
              ))
            ))}
          {/* <Flex justify="center">
            <Flex.Item>
              <AsyncProfileVideoPlayer src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </AsyncProfileVideoPlayer>
            </Flex.Item>
            <Flex.Item>
              <AsyncProfileVideoPlayer src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </AsyncProfileVideoPlayer>
            </Flex.Item>
          </Flex> */}
        </PageLayout>
      </div>
    );
  }
}
export default withTheme(Profile);
