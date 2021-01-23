import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  background: white;
`;

const PageContent = styled.div`
  padding: 15px 20px;
  max-width: 500px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position:relative;
`;

const PageContainer = ({ children, ...props }) => {
  return (
    <PageWrapper {...props}>
      <PageContent>{children}</PageContent>
    </PageWrapper>
  );
};

export default withTheme(PageContainer);
