import React, { Component } from "react";
import { TabBar as ADTabBar } from "antd-mobile";

const ADTabBarItem = ADTabBar.Item;

const TabBarItem = ({children, ...props}) => {

  return <ADTabBarItem {...props}>{children}</ADTabBarItem>;
};

export default TabBarItem;
