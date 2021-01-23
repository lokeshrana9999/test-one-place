import React from "react";
import styled from "styled-components";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Modal, Result } from "antd";
import { getValidUrl } from "../../../../helper";

const StyledStatusModal = styled(Modal)`
  .ant-modal-content {
    width: 320px;
    height: fit-content;
    background-color: #2c2c2c;
    border-radius: 22px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.64);
    margin: auto;
    .ant-modal-close-x {
      color: white;
    }
    .ant-modal-body {
      height: 100%;
      display: grid;
      place-items: center;
      padding: 50px;
      p {
        font-size: 15px;
        font-weight: 500;
        color: white;
        line-height: 1.27;
        text-align: center;
      }
      a {
        font-size: 18px;
        font-weight: 500;
        color: white;
        line-height: 1.27;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
`;

const StyledResult = styled(Result)`
  .ant-result-title {
    color: white;
    font-size: 15px;
  }
  .ant-result-subtitle {
    color: white;
    font-size: 15px;
  }
  .ant-result-extra {
    h4 {
      color: white;
      text-decoration:underline;
    }
  }
`;

const CheckoutStatusModal = ({ visible, block }) => {
  const onClose = () => {
    // changeVisibility();
  };
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
  const username = block && block.celebrity && block.celebrity.username;

  return (
    <StyledStatusModal
      footer={null}
      closable
      centered
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
    >
      <StyledResult
        icon={<IoMdCheckmarkCircleOutline color="white" size={100} />}
        status="success"
        title="Waiting for creator approval"
        subTitle="Your product will be emailed as soon 
        As the creator approves"
        extra={[
          <a href={`https://${username}.oneplace.me`}>
            <h4>Checkout {`${firstName} ${lastName}'s profile`}</h4>
          </a>,
        ]}
      />
    </StyledStatusModal>
  );
};

export default CheckoutStatusModal;
