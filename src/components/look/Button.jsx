import React, { Component } from "react";
import { Button as ADButton } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADButtonWrapper = styled.div`
  .am-button.am-button-primary {
    color: ${(props) => props.theme.brandSecondary};
    background: ${(props) => props.theme.brandPrimary};
    border: 1px solid ${(props) => props.theme.brandPrimary};

    ::before {
      border: 1px solid ${(props) => props.theme.brandPrimary};
    }
  }
`;

const Button = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADButtonWrapper theme={theme}>
      <ADButton {...props}>
        {children}
      </ADButton>
    </StyledADButtonWrapper>
  );
};

export default withTheme(Button);
