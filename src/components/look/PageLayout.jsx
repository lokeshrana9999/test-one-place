import React, {useState, Component} from "react";
import { TabBar, Switch } from "antd-mobile";
import {
  IoMailOutline,
  IoMailSharp,
  IoBarChartOutline,
  IoBarChartSharp,
  IoNotificationsOutline,
  IoNotificationsSharp,
} from "react-icons/io5";
// import  "../../styles/layout.less";
// import  "../../styles/theme-dark.less";

const ThemeSwitch = (props) => {
  const [on, setOn] = useState(false);


  return (
    <Switch
      checked={on}
      onChange={() => {
        setOn(!on);
      }}
    />
  );
};

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
      <div className={'pageLayout'}>
        <div className={'pageLayoutContent'}>
          <div style={{ position: "absolute", top: "10px", zIndex:'10' }}>
            <ThemeSwitch />
          </div>
          {componentChildren}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={'pageLayoutContainer'}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          style={{ height: "30px" }}
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Stats"
            key="Stats"
            icon={<IoBarChartOutline size={35} />}
            selectedIcon={<IoBarChartSharp size={35} />}
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
          </TabBar.Item>
          <TabBar.Item
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
          </TabBar.Item>
          <TabBar.Item
            icon={<IoMailOutline size={35} />}
            selectedIcon={<IoMailSharp size={35} />}
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
          </TabBar.Item>
          <TabBar.Item
            icon={<IoNotificationsOutline size={35} />}
            selectedIcon={<IoNotificationsSharp size={35} />}
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
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default PageLayout;
