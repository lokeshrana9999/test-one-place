import React, { Component } from "react";
import { Typography } from "antd";
import styled, { withTheme } from "styled-components";

const ADParagraph = Typography.Paragraph;

const StyledADParagraph = styled(ADParagraph)`
  font-family: Rubik;
`;

const Paragraph = ({ children, theme, ...props }) => {
  return <StyledADParagraph theme={theme}>{children}</StyledADParagraph>;
};

export default withTheme(Paragraph);
