import React, { Component } from "react";
import { Picker as ADPicker } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADPicker = styled(ADPicker)`
  .am-picker-popup-body {
    background: ${(props) => props.theme.brandSecondary};
    color: ${(props) => props.theme.textColor};
    .am-picker-col-mask {
      background-image: none;
    }
    .am-picker-col-indicator {
      /* height:60px; */
      border-top: 1px solid ${(props) => props.theme.brandPrimary};
      border-bottom: 1px solid ${(props) => props.theme.brandPrimary};
    }
    .am-picker-col-item {
      /* height:60px; */
      div {
        color: ${(props) => props.theme.textColor};
      }
    }
    .am-picker-popup-header-left,
    .am-picker-popup-header-right {
      background: ${(props) => props.theme.brandPrimary};
      color: ${(props) => props.theme.brandSecondary};
    }
    .am-picker-popup-title {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const Picker = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADPicker {...props} theme={theme}>
      {children}
    </StyledADPicker>
  );
};

export default withTheme(Picker);
