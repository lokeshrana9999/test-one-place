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
import LoginForm from "./LoginForm";
import {ApiContext} from '../../api';

const PageHead = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-weight:bold;
`;

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
  
`;

class LoginView extends Component {
  
  state = {
    self: true,
  };
  static contextType = ApiContext;

  render() {
    console.log('loginview', this.context);
    return (
      <div
        style={{
          padding: "20px 0",
          width: "100%",
          minHeight: "100vh",
          position: "relative",
          display:'grid',
          placeItems:'center',
          background:'white'
        }}
      >
        <div style={{maxWidth:'500px', height:'100%', width:'100%'}}>
        <PageHead>OnePlace Universe</PageHead>
        <WhiteSpace size="xl" />
        <div align="center">
          <img
            src="https://onelinkie.s3.ap-south-1.amazonaws.com/76f5d642-2efe-4bc0-8743-df58baf1b740-login_banner_cropped2.png"
            width="80%"
            alt="login_banner"
          />
        </div>
        <WhiteSpace size="xl" />
        <FormWrapper>
          <img width='100%' src="https://onelinkie.s3.ap-south-1.amazonaws.com/6f2b3bbc-8868-4865-a606-744335070a61-login_form_bc_cropped.png" alt=""/>
          <div style={{position:'absolute', top:'70px', left:'30px', right:'30px'}}>
          <LoginForm />
          </div>
        </FormWrapper></div>
      </div>
    );
  }
}
export default withTheme(LoginView);
