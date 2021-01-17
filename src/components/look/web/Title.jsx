import React, { Component } from "react";
import { Typography } from "antd";
import styled, { withTheme } from "styled-components";

const ADTitle = Typography.Title;

const StyledADTitle = styled(ADTitle)`
  /* font-family: Rubik; */
`;

const Title = ({ children, theme, ...props }) => {
  return <StyledADTitle theme={theme}>{children}</StyledADTitle>;
};

export default withTheme(Title);
