import React, { Component } from "react";
import { WhiteSpace as ADWhiteSpace } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADWhiteSpace = styled(ADWhiteSpace)`
  /* color: ${(props) => props.theme.brandSecondary} !important;
  background: ${(props) => props.theme.brandPrimary};
  border: 1px solid ${(props) => props.theme.brandPrimary} !important;

  ::before {
    border: 1px solid ${(props) => props.theme.brandPrimary} !important;
  } */
`;

const WhiteSpace = ({ children, theme, ...props }) => {
  return (
    <StyledADWhiteSpace {...props} theme={theme}>
      {children}
    </StyledADWhiteSpace>
  );
};

export default withTheme(WhiteSpace);
