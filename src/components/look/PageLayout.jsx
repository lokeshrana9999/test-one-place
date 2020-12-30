import React, { useState, Component } from "react";
import { IoMailOutline, IoMailSharp } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { FaCompass, FaChartBar } from "react-icons/fa";
import { CgSignal } from "react-icons/cg";

import { IoPulse, IoBarChartOutline } from "react-icons/io5";

import styled, { withTheme } from "styled-components";
import TabBar from "./mobile/TabBar";
import TabBarItem from "./mobile/TabBarItem";

const PageLayoutContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
  margin: auto;
  max-width: 500px;
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
  overflow-y: scroll;
`;

const StyledTabBar = styled(TabBar)`
  .am-tabs-tab-bar-wrap {
    width: 414px;
    height: 83px;
    margin: 95px 0 0;
    padding: 12px 45px 18px 49px;
    background-color: #141414;
  }
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
      <div >
      <PageLayoutContainer>
        <StyledTabBar style={{ height: "83px" }} hidden={this.state.hidden}>
          <TabBarItem
            title="Stats"
            key="Stats"
            icon={<IoBarChartOutline size={30} />}
            selectedIcon={<IoBarChartOutline size={30} />}
            selected={this.state.selectedTab === "blueTab"}
            // badge={1}
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
            icon={<FaCompass size={30} />}
            selectedIcon={<FaCompass size={30} />}
            title="OnePlace"
            key="OnePlace"
            // badge={"new"}
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
            icon={<IoPulse size={30} />}
            selectedIcon={<IoPulse size={30} />}
            title="Orders"
            key="Orders"
            // dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab",
              });
            }}
          >
            {this.renderContent(this.props.children)}
          </TabBarItem>
        </StyledTabBar>
      </PageLayoutContainer>
      </div>
    );
  }
}

export default withTheme(PageLayout);
