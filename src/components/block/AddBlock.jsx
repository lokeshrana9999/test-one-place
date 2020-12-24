import React, { Component } from "react";
// import Avatar from "react-avatar";
// import { Flex } from "antd-mobile";
// import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
// import Loadable from "react-loadable";
// import {
//   AiFillFacebook,
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiOutlineWhatsApp,
//   AiFillEdit,
//   AiOutlinePlusCircle,
// } from "react-icons/ai";
import { WhiteSpace } from "../look/mobile";
import PageLayout from "../look/PageLayout";
import BlockForm from "./BlockForm";

const PageHead = styled.h1`
  font-family: CircularStdBlack;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  word-spacing: -8px;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

class BlockAddView extends Component {
  state = {
    self: true,
  };

  render() {
    return (
      <PageLayout>
        <WhiteSpace size="xl" />
        <PageHead>Add a new card</PageHead>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <BlockForm />
      </PageLayout>
    );
  }
}
export default withTheme(BlockAddView);
