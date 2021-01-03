import React from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Loader } from "../look/mobile";
import { withUserBlocks, withDeleteUserBlock } from "./BlockOperations";
import ProfileBlockComponent from "./ProfileBlockComponent";
// import { BigPlayButton } from "./ProfileVideoPlayer";

const CardListHeadText = styled.h3`
  color: ${(props) => props.theme.textColor};
  margin-top: 0;
  opacity: 0.7;
  margin-bottom: 0px;
  font-weight: bold;
  word-spacing: -3px;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 1.43; */
  letter-spacing: normal;
  font-family: Circular Std Medium;
`;

const Profile = (props) => {
  const {
    theme,
    currentUser,
    user,
    self,
    userBlock,
    userBlockLoading,
    deleteBlock,
  } = props;

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
              <CardListHeadText style={{ textAlign: "right" }}>
                <Link to="/block/choose-category" style={{ color: "#4643d3" }}>
                  <AiOutlinePlusCircle
                    style={{
                      marginBottom: "-2px",
                      marginRight: "3px",
                      textAlign: "right",
                    }}
                  />
                  Add A Card
                </Link>
              </CardListHeadText>
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
            <ProfileBlockComponent
              deleteBlock={deleteBlock}
              key={key}
              block={block}
              self={self}
            />
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
export default withUserBlocks(withDeleteUserBlock(withTheme(Profile)));
