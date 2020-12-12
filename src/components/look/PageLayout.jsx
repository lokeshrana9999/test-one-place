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

const PageLayoutContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
`;

const PageLayoutDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const PageLayoutContent = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.brandSecondary} !important;
  padding: 15px;
  overflow-y:scroll;
`;

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
      <PageLayoutDiv>
        <PageLayoutContent>{componentChildren}</PageLayoutContent>
      </PageLayoutDiv>
    );
  }

  render() {
    return (
      <PageLayoutContainer>
        <TabBar style={{ height: "30px" }} hidden={this.state.hidden}>
          <TabBarItem
            title="Stats"
            key="Stats"
            icon={<IoBarChartOutline size={25} />}
            selectedIcon={<IoBarChartSharp size={25} />}
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
            icon={<IoMailOutline size={25} />}
            selectedIcon={<IoMailSharp size={25} />}
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
            icon={<IoNotificationsOutline size={25} />}
            selectedIcon={<IoNotificationsSharp size={25} />}
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
      </PageLayoutContainer>
    );
  }
}

export default withTheme(PageLayout);
