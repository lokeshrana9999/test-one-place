import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Modal } from "antd";
import { getValidUrl } from "../../../../helper";

const StyledStatusModal = styled(Modal)`
  .ant-modal-content {
    width: 320px;
    height: 249px;
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

const CheckoutStatusModal = ({ visible, changeVisibility, link }) => {
  const onClose = () => {
    changeVisibility();
  };
  return (
    <StyledStatusModal
      footer={null}
      closable
      centered
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
    >
      <p>
        Don’t forget to upload screenshot of your payment here once it’s done !
      </p>
      <a href={getValidUrl(link)} onClick={onClose} target="_blank">
        Continue Payment{" "}
        <AiOutlineArrowRight
          style={{ color: "white", fontSize: "30px", marginBottom: "-10px" }}
        />
      </a>
    </StyledStatusModal>
  );
};

export default CheckoutStatusModal;
