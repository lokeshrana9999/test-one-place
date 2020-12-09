import React, { useState, Component } from "react";
import {
  IoMailOutline,
  IoMailSharp,
  IoBarChartOutline,
  IoBarChartSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
} from "react-icons/io5";
import styled, { withTheme } from "styled-components";
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
// import  "../../styles/layout.less";
// import  "../../styles/theme-dark.less";

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(componentChildren) {
    return (
      <div className={"pageLayout"}>
        <div className={"pageLayoutContent"}>{componentChildren}</div>
      </div>
    );
  }

  render() {
    return (
      <div className={"pageLayoutContainer"}>
        <TabBar style={{ height: "30px" }} hidden={this.state.hidden}>
          <TabBarItem
            title="Stats"
            key="Stats"
            icon={<IoBarChartOutline size={30} />}
            selectedIcon={<IoBarChartSharp size={30} />}
            selected={this.state.selectedTab === "blueTab"}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab",
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(this.props.children)}
          </TabBarItem>
          <TabBarItem
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="OnePlace"
            key="OnePlace"
            badge={"new"}
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab",
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(this.props.children)}
          </TabBarItem>
          <TabBarItem
            icon={<IoMailOutline size={30} />}
            selectedIcon={<IoMailSharp size={30} />}
            title="Messages"
            key="Messages"
            dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab",
              });
            }}
          >
            {this.renderContent(this.props.children)}
          </TabBarItem>
          <TabBarItem
            icon={<IoNotificationsOutline size={30} />}
            selectedIcon={<IoNotificationsSharp size={30} />}
            title="My"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab",
              });
            }}
          >
            {this.renderContent(this.props.children)}
          </TabBarItem>
        </TabBar>
      </div>
    );
  }
}

export default PageLayout;
