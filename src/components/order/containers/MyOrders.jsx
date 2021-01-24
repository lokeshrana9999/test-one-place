import React from "react";
import { withEditOrder } from "../OrderOperations";
import MyOrdersView from "../components/MyOrdersView";

const MyOrders = (props) => {
  return (
    <>
    {/* <h1>MyOrders</h1> */}
      <MyOrdersView {...props} />
    </>
  );
};

export default MyOrders;
