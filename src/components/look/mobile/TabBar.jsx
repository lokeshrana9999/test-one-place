import React from "react";
import { TabBar as ADTabBar } from "antd-mobile";
import styled, { withTheme } from "styled-components";


const StyledADTabBar = styled(ADTabBar)`

`;

const TabBar = ({ children, theme, ...props }) => {
  return (
    <StyledADTabBar
      unselectedTintColor={'#3e4249'}
      tintColor={'#ffffff'}
      barTintColor={'#141414'}
      style={{height:'83px'}}
      {...props}
    >
      {children}
    </StyledADTabBar>
  );
};

export default withTheme(TabBar);
