import React, { Component, useEffect, useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Drawer, Card, Avatar } from "antd";
import CheckoutConfirmationUploadForm from "./CheckoutConfirmationUploadForm";

const { Meta } = Card;

const StyledUploadDrawer = styled(Drawer)`
  .ant-drawer-content {
    height: 300px;
    background: transparent;
    .ant-drawer-wrapper-body {
      background: transparent;
      .ant-drawer-body {
        background-color: #141414;
        padding: 14px 39.5px 37px 46px;
        border-radius: 20px 20px 0 0;
      }
    }
  }
`;

const StyledCardUploadDrawer = styled(Card)`
  background: transparent;
  .ant-card-body {
    padding: 5px 0 0 0;
    background: transparent;
    .ant-card-grid {
      border: 0;
      padding: 5px 0 0 0;
      box-shadow: none;
      p {
        font-size: 25px;
        color: white;
      }
      .ant-card-meta {
        .ant-card-meta-detail {
          color: white;
          .ant-card-meta-title {
            padding-top: 5px;
            color: inherit;
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 0;
          }
          .ant-card-meta-description {
            color: inherit;
            margin-top: 0px;
            font-size: 10px;
          }
        }
      }
    }
  }
`;
const CheckoutUploadDrawer = ({ handleScreenShotSubmit, block, visible }) => {
  const onClose = () => {
    // handleScreenShotSubmit();
  };
  const onSubmit = (values) => {
    console.log("onSubmitUpload", values);
    handleScreenShotSubmit(values);
  };
  console.log("upload drawer", block);
  const firstName =
    block &&
    block.celebrity &&
    block.celebrity.userProfile &&
    block.celebrity.userProfile.firstName;

  const lastName =
    block &&
    block.celebrity &&
    block.celebrity.userProfile &&
    block.celebrity.userProfile.lastName;

  return (
    <StyledUploadDrawer
      title=""
      placement="bottom"
      closable={true}
      onClose={onClose}
      visible={visible}
      getContainer={false}
      style={{ position: "absolute" }}
    >
      <StyledCardUploadDrawer bordered={false}>
        <Card.Grid hoverable={false} style={{ width: "70%" }}>
          <Meta
            description={block && block.title}
            title={`${firstName} ${lastName}`}
            avatar={
              <Avatar
                src={
                  block &&
                  block.celebrity &&
                  block.celebrity.userProfile &&
                  block.celebrity.userProfile.profileImage &&
                  block.celebrity.userProfile.profileImage.url
                }
                size={46}
                shape="circle"
              />
            }
          />
        </Card.Grid>
        <Card.Grid
          hoverable={false}
          style={{ width: "30%", textAlign: "center" }}
        >
          <p>&#x20B9; {block && block.price}</p>
        </Card.Grid>
      </StyledCardUploadDrawer>
      <CheckoutConfirmationUploadForm onSubmit={onSubmit} />
    </StyledUploadDrawer>
  );
};

export default CheckoutUploadDrawer;
