import React, { Component } from "react";
import { Button as ADButton } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADButton = styled(ADButton)`
  color: ${(props) => props.theme.brandSecondary} !important;
  background: ${(props) => props.theme.brandPrimary};
  border: 1px solid ${(props) => props.theme.brandPrimary} !important;

  ::before {
    border: 1px solid ${(props) => props.theme.brandPrimary} !important;
  }
`;

const Button = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADButton {...props} theme={theme}>
      {children}
    </StyledADButton>
  );
};

export default withTheme(Button);
