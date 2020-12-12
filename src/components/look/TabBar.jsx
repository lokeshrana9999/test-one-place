import React from "react";
import { TabBar as ADTabBar } from "antd-mobile";
import styled, { withTheme } from "styled-components";


const StyledADTabBar = styled(ADTabBar)`
  box-shadow: 2px 2px 10px ${(props) => props.theme.brandSecondary};
`;

const TabBar = ({ children, theme, ...props }) => {
  return (
    <StyledADTabBar
      unselectedTintColor={theme.color1}
      tintColor={theme.color1}
      barTintColor={theme.brandSecondary}
      {...props}
    >
      {children}
    </StyledADTabBar>
  );
};

export default withTheme(TabBar);
