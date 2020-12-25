import React from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { withUser } from "../auth/Auth";

import ProfileBlockComponent from "./ProfileBlockComponent";
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

const CardListHeadText = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin-top: 0;
  opacity: 0.7;
  margin-bottom: 0px;
`;

const Profile = (props) => {
  const { theme, currentUser, user, self } = props;

  console.log("profileview", props);
  return (
    <div>
      {self && (
        <React.Fragment>
          <Flex justify="between" style={{ width: "100%" }}>
            <Flex.Item>
              <CardListHeadText>Your Cards</CardListHeadText>
            </Flex.Item>

            <Flex.Item align="right">
              <Link to="/block/choose-category">
                <AiOutlinePlusCircle
                  style={{ marginBottom: "-2px", marginRight: "3px" }}
                />
                Add A Card
              </Link>
            </Flex.Item>
          </Flex>
          <CardListHeadText style={{ textAlign: "center", marginTop: "15px" }}>
            Tap to edit Cards
          </CardListHeadText>
        </React.Fragment>
      )}
      <br />
      {profileData &&
        profileData.cardData &&
        profileData.cardData.nodes &&
        (profileData.cardData.nodes.length === 0 ? (
          <CardListHeadText style={{ textAlign: "center", marginTop: "15px" }}>
            No Cards
          </CardListHeadText>
        ) : (
          profileData.cardData.nodes.map((node, key) => (
            <ProfileBlockComponent
              image={node.edge.image}
              text={node.edge.text}
              key={key}
              self={self}
            />
          ))
        ))}
    </div>
  );
};
export default withUser(withTheme(Profile));
