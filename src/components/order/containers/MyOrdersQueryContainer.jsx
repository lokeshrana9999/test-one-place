import React from "react";
// import { connect } from "react-redux";
// import { useGet } from "restful-react";
// import { PageLoader } from "@look/mobile";
// import { withBlockById } from "../../block/BlockOperations";
// import { withUserOrders } from "../OrderOperations";
import MyOrdersListComponent from "../components/MyOrdersListComponent";

const MyOrdersPending = (props) => {
  return (
    <>
      <MyOrdersListComponent {...props} />
    </>
  );
};

export default MyOrdersPending;
