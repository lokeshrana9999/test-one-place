import React, { Component, useEffect, useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { connect } from "react-redux";
import { Card, message } from "antd";
import { getValidUrl } from "../../../helper";
import { Button, Switch, WhiteSpace } from "@look/mobile";
import { PageHead, PageContainer } from "@look";
import CheckoutForm from "./CheckoutForm";
import CheckoutUploadDrawer from "./checkout-components/CheckoutUploadDrawer";
import CheckoutWarningModal from "./checkout-components/CheckoutWarningModal";
import CheckoutStatusModal from "./checkout-components/CheckoutStatusModal";

// import { withCurrentUser } from "../auth/Auth";
// import CheckoutViewBlocks from "../../block/CheckoutViewBlocks";
// import { BigPlayButton } from "./CheckoutViewVideoPlayer";
import { setAccessTokene, setRefreshTokene } from "../../../store/appReducer";

const { Meta } = Card;

const CheckoutViewName = styled.h1`
  margin-top: 10px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-family: Rubik;
  font-size: 22px;
  /* word-spacing: -3px; */
`;

const PublicLinkWrapper = styled.div`
  /* color: ${(props) => props.theme.textColor}; */
  /* text-align: center; */
  border-radius: 7px;
  border: solid 1px #f2f2f2;
  background-color: #f8f8f8;
  height: 60px;
  font-family: Rubik;
  display: grid;
  place-items: center;
  padding: 0 15px;
  /* font-family: Rubik; */
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #686868;
`;

const CheckoutViewSmallText = styled.p`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.textColor};
  opacity: 0.7;
  margin-bottom: 0px;
  font-family: Rubik;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  /* word-spacing: -3px; */
`;

const StyledButton = styled(Button)`
  font-family: Rubik;
  /* font-size: 25px; */
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  font-size: 15px;
  background: #4643d3;
`;

const popoverConst = {
  WARNING: "warning",
  SCREESSHOT: "screenshot",
  STATUS: "status",
};

const CheckoutView = (props) => {
  const [formValues, setFormValues] = useState(null);
  const [popoverVisible, setPopoverVisible] = useState("");

  const { history, customerData, blockById, postOrder } = props;
  // const { username } = userData;
  console.log("formValuesContainer", props);

  // const PageContainer = self ? PageLayout : PageContainer;

  const handleFormSubmit = (values) => {
    setPopoverVisible(popoverConst.WARNING);
    setFormValues(values);
    console.log("formValues", values);
  };

  const handleContinuePayment = () => {
    setPopoverVisible(popoverConst.SCREESSHOT);
  };

  const handleScreenShotSubmit = async (ssVal) => {
    var formVal = formValues;
    formVal.paymentScreenshot =
      ssVal && ssVal.paymentScreenshot && ssVal.paymentScreenshot._id;
    formVal.celebrity = blockById && blockById.celebrity && blockById.celebrity._id;
    formVal.block = blockById && blockById._id;
    setFormValues(formVal);
    setPopoverVisible("");
    console.log("handleSSSubmit", formVal, ssVal);
    try {
      message.loading({
        content: "Placing Order ...",
        duration: 0,
      });
      const sending = await postOrder(formVal);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "Order Placed",
        });
        setPopoverVisible(popoverConst.STATUS);
      } else {
        message.error({
          duration: 2,
          content: sending && sending.data && sending.data.message,
        });
      }
      return sending;
    } catch (e) {
      message.destroy();
      console.log("error", e);
      if (e && e.data && e.data.message) {
        message.error({
          duration: 2,
          content: e && e.data && e.data.message,
        });
      }
    }
  };

  return (
    <PageContainer>
      <WhiteSpace size="xl" />
      <PageHead
        backButton={
          <AiOutlineArrowLeft
            style={{ position: "absolute", top: "-3px", left: 0 }}
            onClick={history.goBack}
          />
        }
      >
        Fill in these details
      </PageHead>
      <WhiteSpace size="xl" />
      <CheckoutForm
        block={blockById}
        onSubmit={handleFormSubmit}
        initialValues={{ ...customerData }}
      />
      <CheckoutWarningModal
        visible={popoverConst.WARNING === popoverVisible}
        changeVisibility={handleContinuePayment}
        link={blockById && blockById.link}
      />
      <CheckoutUploadDrawer
        block={blockById}
        visible={popoverConst.SCREESSHOT === popoverVisible}
        handleScreenShotSubmit={handleScreenShotSubmit}
      />
      <CheckoutStatusModal
        visible={popoverConst.STATUS === popoverVisible}
        // changeVisibility={handleContinuePayment}
        // link={blockById && blockById.link}
        block={blockById}
      />

    </PageContainer>
  );
};

const mapDispatchToProps = { setAccessTokene, setRefreshTokene };
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    accessToken: state.app.accessToken,
    refreshToken: state.app.refreshToken,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(CheckoutView));
