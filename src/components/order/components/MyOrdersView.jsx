import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { Divider, Tabs } from "antd";
import { WhiteSpace } from "@look/mobile";
import PageLayout from "@look/PageLayout";
import MyOrdersQueryContainer from "../containers/MyOrdersQueryContainer";
import MyOrdersAcceptDeclineDrawer from "./MyOrdersAcceptDeclineDrawer";
import { orderStates } from "../constants";

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav::before {
    border-bottom: solid 1px #707070;
    opacity: 0.1;
  }
  .ant-tabs-nav-wrap {
    padding-left: 24px;
    .ant-tabs-nav-list {
      .ant-tabs-tab {
        padding: 0;
        .ant-tabs-tab-btn {
          font-size: 18px;
          padding-bottom: 10px;
        }
      }
    }
  }
`;

const PageSubTitles = styled.h2`
  font-size: 18px;
  margin-bottom: 0;
  /* word-spacing: -3px; */
`;

const StyledDivider = styled(Divider)`
  margin: 7px 0;
  border-top: solid 1px #707070;
  opacity: 0.1;

  /* word-spacing: -3px; */
`;

const PageHead = styled.h1`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-family: Rubik;
  font-size: 22px;
  /* word-spacing: -3px; */
`;

const MyOrdersListComponentWrapper = styled.div`
  padding: 0 15px;
  height: 30vh;
  overflow-y: hidden;
`;

const Profile = (props) => {
  const [modalOrder, setModalOrder] = useState(null);
  const { ordersList } = props;
  const handleOpenModal = (ord) => {
    setModalOrder(ord);
  };
  const handleSubmit = (val) => {
    console.log(val);
    setModalOrder(null);
  };
  return (
    <PageLayout>
      <PageHead>My Orders</PageHead>
      <MyOrdersAcceptDeclineDrawer
        order={modalOrder}
        orderId={modalOrder && modalOrder._id}
        setModalOrder={setModalOrder}
      />
      <WhiteSpace size="md" />
      <StyledDivider />
      <div style={{ padding: "0 24px" }}>
        <PageSubTitles>Pending</PageSubTitles>
      </div>
      <StyledDivider />
      <WhiteSpace size="md" />
      <MyOrdersListComponentWrapper
        id="my-orders-list-wrapper-pending"
        key="pendingwrapper"
      >
        <MyOrdersQueryContainer
          scrollableTarget="my-orders-list-wrapper-pending"
          handleOpenModal={handleOpenModal}
          type={orderStates.PENDING}
        />
      </MyOrdersListComponentWrapper>
      <WhiteSpace size="xl" />
      <StyledDivider />
      <StyledTabs defaultActiveKey="1">
        <TabPane tab="Accepted" key="accepted">
          <MyOrdersListComponentWrapper
            id="my-orders-list-wrapper"
            key="acceptedwrapper"
          >
            <MyOrdersQueryContainer
              handleOpenModal={handleOpenModal}
              type={orderStates.COMPLETED}
            />
          </MyOrdersListComponentWrapper>
        </TabPane>
        <TabPane tab="Declined" key="declined">
          <MyOrdersListComponentWrapper id="my-orders-list-wrapper">
            <MyOrdersQueryContainer
              key="declinedwrapper"
              handleOpenModal={handleOpenModal}
              type={orderStates.DECLINED}
            />
          </MyOrdersListComponentWrapper>
        </TabPane>
      </StyledTabs>
    </PageLayout>
  );
};

export default withTheme(Profile);
