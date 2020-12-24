import React, { Component } from "react";
import { ActivityIndicator as ADActivityIndicator } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const StyledADActivityIndicatorWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

const ActivityIndicator = ({ children, theme, ...props }) => {
  console.log("theme", theme);
  return (
    <StyledADActivityIndicatorWrapper theme={theme}>
      <ADActivityIndicator {...props}>{children}</ADActivityIndicator>
    </StyledADActivityIndicatorWrapper>
  );
};

export default withTheme(ActivityIndicator);
