import React, { Component } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import styled, { withTheme } from "styled-components";

const ProfileCardWrapper = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: #2c2c2c;
  height: 100px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64);
`;

const ProfileCardText = styled.div`
  color: white;
  text-align: center;
`;

const ProfileCard = (props) => {
  const { block, key, self } = props;
  console.log('blockcomponent', block);
  return (
    <a
      key={key}
      href={self ? `/block/edit/${block && block._id}` : block && block.link}
      target={!self && "_blank"}
    >
      <ProfileCardWrapper>
        <Flex>
          <Flex.Item style={{ flex: 1 }}>
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
      </ProfileCardWrapper>
    </a>
  );
};

export default withTheme(ProfileCard);
