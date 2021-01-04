import React, { useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import { Popconfirm } from '../look/web'
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
  animation: ${(props) => (props.shake ? "shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite" : "none")}  ;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  @keyframes shake {
  10%, 80% {
    transform: translate3d(-1px, 0, 0);
  }
  
  /* 20%, 80% {
    transform: translate3d(2px, 0, 0);
  } */

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
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
  const { block, keyItem, self, handleDeleteBlock } = props;


  const handlers = useSwipeable({
    onSwipedLeft: () => setSwiped("left"),
    onSwipedRight: () => setSwiped("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  console.log('profilecard', props, keyItem);
  return (
    <ProfileCardWrapper {...handlers} keyItem={keyItem} shake={!self && keyItem === 0}>
      {self && (
        <Popconfirm
          title="Are you sure to delete this Card?"
          onConfirm={() => handleDeleteBlock(block && block._id)}
          onCancel={() => console.log('canceled')}
          okText="Yes"
          cancelText="No"
        >
          <IoTrashBinStylized /></Popconfirm>
      )}
      <ProfileCardInnerWrapper swiped={self && swiped}>
        <a
          style={{ display: "block" }}
          keyItem={keyItem}
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
