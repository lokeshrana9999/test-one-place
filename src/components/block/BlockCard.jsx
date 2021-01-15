import React, { Component } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "@look/mobile";

const BlockCardWrapper = styled.div`
  padding: 20px;
  background-color: #2c2c2c;
  height: 107px;
  margin-bottom: 20px;
  border-radius: 7px;
  border: solid 1px #f2f2f2;
  background-color: #f8f8f8;
`;

const BlockCardTitle = styled.h2`
  font-family: Rubik;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const BlockCardDescription = styled.p`
  font-family: Rubik;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const BlockCardAvatarWrapper = styled.div`
  height: 55px;
  width: 55px;
  display: grid;
  place-items: center;
  background: white;
  border-radius: 55px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.09);
`;

const BlockCard = (props) => {
  const { blockCategory, key } = props;
  return (
    <Link key={key} to={`/block/add/${blockCategory._id}`}>
      <BlockCardWrapper key={key}>
        <Flex>
          <Flex.Item style={{ flex: 1 }}>
            <div
              style={{
                height: "100%",
                width: "fit-content",
                display: "grid",
                placeItems: "center",
              }}
            >
              <BlockCardAvatarWrapper>
                <Avatar
                  size="30"
                  src={
                    blockCategory &&
                    blockCategory.image &&
                    blockCategory.image.url
                  }
                />
              </BlockCardAvatarWrapper>
            </div>
          </Flex.Item>
          <Flex.Item style={{ flex: 3 }}>
            <BlockCardTitle className="one-line-limiter">
              {blockCategory && blockCategory.title}
            </BlockCardTitle>
            <WhiteSpace size="sm" />
            <BlockCardDescription className="two-line-limiter">
              {blockCategory && blockCategory.description}
            </BlockCardDescription>
          </Flex.Item>
        </Flex>
      </BlockCardWrapper>
    </Link>
  );
};

export default withTheme(BlockCard);
