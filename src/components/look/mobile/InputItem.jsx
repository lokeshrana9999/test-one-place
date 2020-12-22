import React, { Component } from "react";
import { InputItem as ADInputItem } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADInputItem = styled(ADInputItem)`
  /* color: ${(props) => props.theme.brandSecondary} !important;
  background: ${(props) => props.theme.brandPrimary};
  border: 1px solid ${(props) => props.theme.brandPrimary} !important;

  ::before {
    border: 1px solid ${(props) => props.theme.brandPrimary} !important;
  } */
`;

const InputItem = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADInputItem {...props} theme={theme}>
      {children}
    </StyledADInputItem>
  );
};

export default withTheme(InputItem);
