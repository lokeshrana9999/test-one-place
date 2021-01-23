import React, { useState, Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { IoMailOutline, IoMailSharp } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { FaCompass, FaRegCompass } from "react-icons/fa";
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
      selectedTab: "/profile",
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
    console.log("pagelayout", this.props);
    const {
      match: { path },
      history,
    } = this.props;
    return (
      <div>
        <PageLayoutContainer>
          <StyledTabBar style={{ height: "83px" }} hidden={this.state.hidden}>
            <TabBarItem
              title="Stats"
              key="Stats"
              icon={<IoBarChartOutline size={30} color="grey" />}
              selectedIcon={<IoBarChartOutline size={30} color="white" />}
              selected={path === "/statistics"}
              // badge={1}
              onPress={() => {
                history.push("/statistics");
                this.setState({ selectedTab: "/statistics" });
              }}
              data-seed="logId"
            >
              {this.renderContent(this.props.children)}
            </TabBarItem>

            <TabBarItem
              icon={<FaCompass size={30} color="grey" />}
              selectedIcon={<FaCompass size={30} color="white" />}
              title="OnePlace"
              key="OnePlace"
              // badge={"new"}
              selected={path === "/profile"}
              onPress={() => {
                history.push("/profile");
                this.setState({ selectedTab: "/profile" });
              }}
              data-seed="logId1"
            >
              {this.renderContent(this.props.children)}
            </TabBarItem>

            <TabBarItem
              icon={<IoPulse size={30} color="grey" />}
              selectedIcon={<IoPulse size={30} color="white" />}
              title="Orders"
              key="Order"
              // dot
              selected={path === "/order/my"}
              onPress={() => {
                history.push("/order/my");
                this.setState({ selectedTab: "/order/my" });
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

export default withRouter(withTheme(PageLayout));
