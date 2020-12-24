import React, { Component } from "react";
import { Switch as ADSwitch } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADSwitch = styled(ADSwitch)`
  /* .am-picker-popup-body {
    background: ${(props) => props.theme.brandSecondary};
    color: ${(props) => props.theme.textColor};
    .am-picker-col-mask {
      background-image: none;
    }
    .am-picker-col-indicator {
      border-top: 1px solid ${(props) => props.theme.brandPrimary};
      border-bottom: 1px solid ${(props) => props.theme.brandPrimary};
    }
    .am-picker-col-item {
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
  } */
`;

const Switch = ({ children, theme, ...props }) => {
  return (
    <StyledADSwitch {...props} theme={theme}>
      {children}
    </StyledADSwitch>
  );
};

export default withTheme(Switch);
