import React, { Component } from "react";
import { List } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const ADListItem = List.Item;

const StyledADListItem = styled(ADListItem)`
  /* color: ${(props) => props.theme.brandSecondary} !important;
  background: ${(props) => props.theme.brandPrimary};
  border: 1px solid ${(props) => props.theme.brandPrimary} !important;

  ::before {
    border: 1px solid ${(props) => props.theme.brandPrimary} !important;
  } */
`;

const ListItem = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADListItem {...props} theme={theme}>
      {children}
    </StyledADListItem>
  );
};

export default withTheme(ListItem);
