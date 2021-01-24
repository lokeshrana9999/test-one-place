import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { IoMdTime, IoMdCheckmark, IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { orderStates } from "../constants";

const { Meta, Grid } = Card;
const StyledCard = styled(Card)`
  margin-bottom: 10px;
  border-radius: 7px;
  .ant-card-body {
    padding: 8px 16px !important;
    background: #f8f8f8;
    .ant-card-grid {
      padding: 0;
      box-shadow: none;
    }
  }
`;

const MyOrdersProfileComponent = ({ ...props }) => {
  console.log("myordersprofilecomponent", props);
  const { order, handleOpenModal, key } = props;
  const block = order && order.block;
  return (
    <StyledCard hoverable key={key} onClick={() => handleOpenModal(order)}>
      <Grid hoverable={false} style={{ width: "70%" }}>
        <Meta
          title={order && order.name}
          description={block && block.title}
          avatar={<Avatar size={46} src={order && order.avatarUrl} />}
        />
      </Grid>
      <Grid
        hoverable={false}
        style={{
          width: "30%",
          height: "40px",
        }}
        align="right"
      >
        <div
          style={{
            // width: "fit-content",
            height: "100%",
            display: "grid",
            placeItems: "center",
            width: "24px",
          }}
        >
          {order && order.status === orderStates.PENDING && (
            <IoMdTime color="#4b4ad5" size={24} />
          )}
          {order && order.status === orderStates.COMPLETED && (
            <IoMdCheckmark color="green" size={24} />
          )}
          {order && order.status === orderStates.DECLINED && (
            <IoMdClose color="red" size={24} />
          )}
        </div>
      </Grid>
    </StyledCard>
  );
};

export default MyOrdersProfileComponent;
