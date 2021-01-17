import React, { Component } from "react";
import { Typography } from "antd";
import styled, { withTheme } from "styled-components";

const ADText = Typography.Text;

const StyledADText = styled(ADText)`
  font-family: Rubik;
`;

const Text = ({ children, theme, ...props }) => {
  return <StyledADText theme={theme}>{children}</StyledADText>;
};

export default withTheme(Text);
