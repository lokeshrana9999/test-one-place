import React, { Component } from "react";
import { Flex } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import { InputItem, ImagePicker, WhiteSpace } from "../look/mobile";
import {
  AiFillCheckCircle,
  AiOutlineEllipsis
} from "react-icons/ai";


const ProfileFormContainer = styled.div`
  color: white;
  padding: 50px 26px 32px;
  opacity: 0.88;
  border-radius:20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.89);
  background-color: #000000;
`;


const InputItemStylized = styled(InputItem)`
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height:60px !important;
  caret-color: white;
  color: white;
  .am-list-line {
    .am-input-extra{
      max-height:35px !important;
    }
    .am-input-control {
      input {
        color: white;
        font-family: CircularStdMedium;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
      }
    }
  }
`;

const ImagePickerStylized = styled(ImagePicker)`
  background: transparent;
  border-radius: 7px;
  border: solid 2px #d8d8d8;
  height:60px !important;
  caret-color: white;
  color: white;
  .am-list-line {
    .am-input-extra{
      max-height:35px !important;
    }
    .am-input-control {
      input {
        color: white;
        font-family: CircularStdMedium;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
      }
    }
  }
`;

const ProfileForm = (props) => {
  return (
    <ProfileFormContainer>
      <WhiteSpace size="xl" />
      <ImagePickerStylized/>
      <WhiteSpace size="xl" />
      <InputItemStylized extra={<AiFillCheckCircle size='32'  style={{color:'#32b264'}} /> || <AiOutlineEllipsis size='20' />} placeholder="Enter your OTP"></InputItemStylized>
    </ProfileFormContainer>
  );
};

export default withTheme(ProfileForm);
