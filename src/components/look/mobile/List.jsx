import React, { Component } from "react";
import { List as ADList } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADList = styled(ADList)`
  /* color: ${(props) => props.theme.brandSecondary} !important;
  background: ${(props) => props.theme.brandPrimary};
  border: 1px solid ${(props) => props.theme.brandPrimary} !important;

  ::before {
    border: 1px solid ${(props) => props.theme.brandPrimary} !important;
  } */
`;

const List = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADList {...props} theme={theme}>
      {children}
    </StyledADList>
  );
};

export default withTheme(List);
