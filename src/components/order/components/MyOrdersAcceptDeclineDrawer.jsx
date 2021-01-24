import React, { useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Drawer, Card, Avatar, Image, message } from "antd";
import { withEditOrder } from "../OrderOperations";

import MyOrdersAcceptDeclineForm from "./MyOrdersAcceptDeclineForm";
import { orderStates } from "../constants";

const { Meta } = Card;

const StyledUploadDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    height: 90vh !important;
    .ant-drawer-content {
      height: 90vh;
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
const CheckoutUploadDrawer = ({ order, setModalOrder, putOrder }) => {
  const onClose = () => {
    setModalOrder(null);
  };
  const block = order && order.block;
  const name = order && order.name;
  console.log("orderacceptdecline", order);
  const visible = order ? true : false;
  const handleSubmit = async (val) => {
    // var formVal = formValues;

    console.log("handleSSSubmit", val);
    setModalOrder(null);
    try {
      message.loading({
        content: "Changing Status ...",
        duration: 0,
      });
      const sending = await putOrder(val);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "Order Status Updated",
        });
      } else {
        message.error({
          duration: 2,
          content: sending && sending.data && sending.data.message,
        });
      }
      return sending;
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

  return (
    <StyledUploadDrawer
      title=""
      placement="bottom"
      closable={true}
      onClose={onClose}
      visible={visible}
      // getContainer={false}
      style={{ position: "absolute" }}
    >
      <StyledCardUploadDrawer bordered={false}>
        <Card.Grid hoverable={false} style={{ width: "70%" }}>
          <Meta
            description={block && block.title}
            title={name}
            avatar={
              <Avatar src={order && order.avatarUrl} size={46} shape="circle" />
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
      <div align="center">
        <Image
          width={250}
          height={200}
          src={order && order.paymentScreenshot && order.paymentScreenshot.url}
        />
      </div>
      {order && order.status === orderStates.PENDING && (
        <MyOrdersAcceptDeclineForm onSubmit={handleSubmit} />
      )}
    </StyledUploadDrawer>
  );
};

export default withEditOrder(CheckoutUploadDrawer);
