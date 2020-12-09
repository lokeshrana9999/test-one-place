import React, { Component } from "react";
import { TabBar as ADTabBar } from "antd-mobile";
import styled, { withTheme } from "styled-components";

const TabBar = ({ children, theme, ...props }) => {
  return (
    <ADTabBar
      unselectedTintColor={theme.color1}
      tintColor={theme.color1}
      barTintColor={theme.brandSecondary}
      {...props}
    >
      {children}
    </ADTabBar>
  );
};

export default withTheme(TabBar);
