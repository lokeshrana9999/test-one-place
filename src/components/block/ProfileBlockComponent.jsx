import React, { useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import { Popconfirm } from "../look/web";
import Avatar from "react-avatar";
import { useSwipeable } from "react-swipeable";
import { IoTrashBin } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

import { getValidUrl } from "../../helper";

import styled, { withTheme } from "styled-components";

const ProfileCardWrapper = styled.div`
  border-radius: 20px;
  /* padding: 20px; */
  background-color: #cb4a4a;
  background-image: linear-gradient(to right, #cb4a4a, white);
  height: 100px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64);
  width: 100%;
  overflow: hidden;
  position: relative;
  animation: ${(props) =>
    props.shake
      ? "shake 2s cubic-bezier(.36,.07,.19,.97) both infinite"
      : "none"};
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  animation-delay: 0.5;
  @keyframes shake {
    5%,
    45% {
      transform: translate3d(-1px, 0, 0);
    }

    10%,
    40% {
      transform: translate3d(2px, 0, 0);
    }

    15%,
    25%,
    35% {
      transform: translate3d(-4px, 0, 0);
    }

    20%,
    30% {
      transform: translate3d(4px, 0, 0);
    }
    50%,
    100% {
      transform: translate3d(0, 0, 0);
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

const AiFillEditStylized = styled(AiFillEdit)`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 40px;
  color: #4643d3;
  cursor: pointer;
`;

const ProfileCardInnerWrapper = styled.div`
  transition: all 0.3s;
  transform: translateX(${(props) => props.swiped});
  transition-timing-function: ease-out;
  /* margin-bottom: 20px; */
  /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64); */
`;

const ProfileCardText = styled.div`
  color: white;
  text-align: center;
  /* font-size: 17px; */
  /* font-weight: normal; */
  font-stretch: normal;
  font-style: normal;
  /* line-height: 1.43; */
  letter-spacing: normal;
  font-family: Rubik;
  font-size: 15px;
`;

function getSwipeTranslate(self, swiped) {
  if (!self || (self && swiped === "center")) {
    return "0px";
  } else if (swiped === "right") {
    return "80px";
  } else if (swiped === "left") {
    return "-80px";
  }
}

const ProfileCard = (props) => {
  const [swiped, setSwiped] = useState("center");
  const { block, keyItem, self, handleDeleteBlock, history } = props;

  const swipeControlLeft =
    swiped === "center" || swiped === "left" ? "left" : "center";
  const swipeControlRight =
    swiped === "center" || swiped === "right" ? "right" : "center";

  const handlers = useSwipeable({
    onSwipedLeft: () => setSwiped(swipeControlLeft),
    onSwipedRight: () => setSwiped(swipeControlRight),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const getSwipeTrans = getSwipeTranslate(self, swiped);

  const profileCardInn = (
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
  );

  const getPublicCardLink = () => {
    const { blockCategory } = block;
    var url = "";
    if (blockCategory && blockCategory.isMedia) {
      url = `https://oneplace.com/block/detail/${block && block._id}`;
    } else {
      url = getValidUrl(block && block.link);
    }
    return url;
  };
  console.log("publiccard", block);
  return (
    <ProfileCardWrapper
      {...handlers}
      keyItem={keyItem}
      shake={!self && block && block.isHighlight}
    >
      {self && (
        <React.Fragment>
          <Popconfirm
            title="Are you sure to delete this Card?"
            onConfirm={() => handleDeleteBlock(block && block._id)}
            onCancel={() => console.log("canceled")}
            okText="Yes"
            cancelText="No"
          >
            <IoTrashBinStylized />
          </Popconfirm>
          <AiFillEditStylized
            onClick={() => history.push(`/block/edit/${block && block._id}`)}
          />
        </React.Fragment>
      )}
      <ProfileCardInnerWrapper swiped={getSwipeTrans}>
        {self ? (
          <React.Fragment>{profileCardInn}</React.Fragment>
        ) : (
          <a
            style={{ display: "block" }}
            keyItem={keyItem}
            href={getPublicCardLink()}
            target={!self && "_blank"}
          >
            {profileCardInn}
          </a>
        )}
      </ProfileCardInnerWrapper>
    </ProfileCardWrapper>
  );
};

export default withTheme(ProfileCard);
