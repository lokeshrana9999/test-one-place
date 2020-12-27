import React from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Loader } from "../look/mobile";
import { withUserBlocks } from "./BlockOperations";
import ProfileBlockComponent from "./ProfileBlockComponent";
// import { BigPlayButton } from "./ProfileVideoPlayer";

const CardListHeadText = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin-top: 0;
  opacity: 0.7;
  margin-bottom: 0px;
`;

const Profile = (props) => {
  const { theme, currentUser, user, self, userBlock, userBlockLoading } = props;

  console.log("profileblocks", props);
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
      {userBlockLoading && <Loader />}
      {!userBlockLoading && userBlock && userBlock.length !== 0
        ? userBlock.map((block, key) => (
            <ProfileBlockComponent block={block} self={self} />
          ))
        : !userBlockLoading && (
            <CardListHeadText
              style={{ textAlign: "center", marginTop: "15px" }}
            >
              No Cards
            </CardListHeadText>
          )}
    </div>
  );
};
export default withUserBlocks(withTheme(Profile));
