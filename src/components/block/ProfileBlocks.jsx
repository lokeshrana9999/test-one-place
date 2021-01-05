import React, { useState, useEffect } from "react";
import { Flex } from "antd-mobile";
import { message } from "antd";
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
  const { self, userBlock, userBlockLoading, deleteBlock, history } = props;

  const [userBlockData, setUserBlockData] = useState(null);

  useEffect(() => {
    setUserBlockData(userBlock);
  }, [userBlock, setUserBlockData]);

  const handleDeleteBlock = async (id) => {
    var userBlockDataModif = userBlockData;
    userBlockDataModif = userBlockDataModif.filter(
      (uBDM) => uBDM && uBDM._id !== id
    );
    try {
      message.loading({
        content: "Deleting Card ...",
        duration: 0,
      });
      const deleting = await deleteBlock({ id });
      console.log(deleting);
      message.destroy();
      if (deleting.status === true) {
        message.success({
          duration: 2,
          content: "Card Deleted",
        });
        setUserBlockData(userBlockDataModif);
        // history.push("/");
      } else {
        message.error({
          duration: 2,
          content: deleting.data.message,
        });
      }
      return deleting;
    } catch (e) {
      message.destroy();
      console.log("error", e);
      if (e && e.data && e.data.message) {
        message.error({
          duration: 2,
          content: e && e.data && e.data.message,
        });
      }
    }
  };
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
            swipe left to edit, right to delete Cards
          </CardListHeadText>
        </React.Fragment>
      )}
      <br />
      {userBlockLoading && <Loader />}
      {!userBlockLoading && userBlockData && userBlockData.length !== 0
        ? userBlockData.map((block, key) => (
            <React.Fragment>
              {console.log("mapping", block, key)}
              <ProfileBlockComponent
                handleDeleteBlock={handleDeleteBlock}
                keyItem={key}
                block={block}
                self={self}
                history={history}
              />
            </React.Fragment>
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
