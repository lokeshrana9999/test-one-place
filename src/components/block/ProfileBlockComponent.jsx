import React, { useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { useSwipeable } from "react-swipeable";
import { IoTrashBin } from "react-icons/io5";

import { getValidUrl } from "../../helper";

import styled, { withTheme } from "styled-components";

const ProfileCardWrapper = styled.div`
  border-radius: 20px;
  /* padding: 20px; */
  background-color: #cb4a4a;
  height: 100px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64);
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ProfileCardInner = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: #2c2c2c;
  height: 100px;
  /* pointer-events:none; */
  /* margin-bottom: 20px; */
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64); */
`;

const IoTrashBinStylized = styled(IoTrashBin)`
  position: absolute;
  top: 30px;
  left: 20px;
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

const ProfileCardInnerWrapper = styled.div`
  transition: all 0.3s;
  transform: translateX(
    ${(props) => (props.swiped === "right" ? "80px" : "0")}
  );
  transition-timing-function: ease-out;
  /* margin-bottom: 20px; */
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64); */
`;

const ProfileCardText = styled.div`
  color: white;
  text-align: center;
  /* font-size: 17px; */
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 1.43; */
  letter-spacing: normal;
  font-family: Circular Std Medium;
  font-size: 15px;
`;

const ProfileCard = (props) => {
  const [swiped, setSwiped] = useState("");
  const { block, key, self, deleteBlock } = props;
  console.log("blockcomponent", block);
  const handlers = useSwipeable({
    onSwipedLeft: () => setSwiped("left"),
    onSwipedRight: () => setSwiped("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <ProfileCardWrapper {...handlers}>
      {self && (
        <IoTrashBinStylized onClick={() => deleteBlock(block && block._id)} />
      )}
      <ProfileCardInnerWrapper swiped={self && swiped}>
        <a
          style={{ display: "block" }}
          key={key}
          href={
            self
              ? `/block/edit/${block && block._id}`
              : getValidUrl(block && block.link)
          }
          target={!self && "_blank"}
        >
          <ProfileCardInner swiped={swiped}>
            <Flex>
              <Flex.Item style={{ flex: "0 1 60px" }}>
                <Avatar
                  size="60"
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                  src={block && block.thumbnail && block.thumbnail.url}
                />
              </Flex.Item>
              <Flex.Item style={{ flex: 3 }}>
                <ProfileCardText>{block && block.title}</ProfileCardText>
              </Flex.Item>
            </Flex>
          </ProfileCardInner>
        </a>
      </ProfileCardInnerWrapper>
    </ProfileCardWrapper>
  );
};

export default withTheme(ProfileCard);
