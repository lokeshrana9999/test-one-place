import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

const PageHeadStyled = styled.h1`
  font-family: Rubik;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  /* word-spacing: -8px; */
  position: relative;
`;

const PageHead = ({ children, backButton, ...props }) => {
  return (
    <PageHeadStyled {...props}>
      {backButton}
      {children}
    </PageHeadStyled>
  );
};

export default withTheme(PageHead);
