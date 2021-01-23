import React, { Component, useEffect, useState } from "react";
import { Flex } from "antd-mobile";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { connect } from "react-redux";
import { Modal, Drawer, Card, Avatar } from "antd";
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

const CheckoutView = (props) => {
  const [formValues, setFormValues] = useState(null);
  const [modalWarningVisible, setModalWarningVisible] = useState(false);
  const [drawerSSVisible, setDrawerSSVisible] = useState(false);
  const [modalStatusVisible, setModalStatusVisible] = useState(false);

  const { history, customerData, blockById } = props;
  // const { username } = userData;
  console.log("formValuesContainer", formValues);

  // const PageContainer = self ? PageLayout : PageContainer;

  const handleFormSubmit = (values) => {
    setModalWarningVisible(true);
    setFormValues(values);
    console.log("formValues", values);
  };

  const handleContinuePayment = () => {
    setModalWarningVisible(false);
    setDrawerSSVisible(true);
  };

  const handleScreenShotSubmit = (ssVal) => {
    var formVal = formValues;
    formVal.image = ssVal.image;
    setFormValues(formVal);
    setDrawerSSVisible(false);
    setModalStatusVisible(true);
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
        visible={modalWarningVisible}
        changeVisibility={handleContinuePayment}
        link={blockById && blockById.link}
      />
      <CheckoutUploadDrawer
        block={blockById}
        visible={drawerSSVisible}
        handleScreenShotSubmit={handleScreenShotSubmit}
      />
      <CheckoutStatusModal
        visible={modalStatusVisible}
        changeVisibility={handleContinuePayment}
        link={blockById && blockById.link}
      />
      {/* {self && <PageHead>OnePlace Universe</PageHead>}

        {self && (
          <a target='_blank' href={`https://${username}.oneplace.me`}>
            <PublicLinkWrapper>
              <Flex justify="between" style={{ width: "100%" }}>
                <Flex.Item
                  style={{ flex: 4 }}
                >{`${username}.oneplace.me`}</Flex.Item>{" "}
                <Flex.Item align="right" style={{ paddingTop: "6px" }}>
                  <IoPaperPlaneOutline size={30} />
                </Flex.Item>
              </Flex>
            </PublicLinkWrapper>
          </a>
        )}
        <div
          style={{
            position: "relative",
            width: "fit-content",
            margin: "20px auto 0",
          }}
          align="center"
        >
          {self && (
            <Link to="/profile/edit">
              <Button
                type="primary"
                style={{
                  background: "#4643D3",
                  position: "absolute",
                  bottom: "-10px",
                  right: "-10px",
                  zIndex: "10",
                  width: "40px",
                  height: "40px",
                  borderRadius: "40px",
                }}
              >
                <AiFillEdit size="20" />
              </Button>
            </Link>
          )}
          <Avatar
            size="150"
            style={{ borderRadius: "20px", overflow: "hidden" }}
            src={
              userData &&
              userData.userCheckoutView &&
              userData.userCheckoutView.profileImage &&
              userData.userCheckoutView.profileImage.url
            }
          />
        </div>
        <CheckoutViewName>
          {userData && userData.userCheckoutView && userData.userCheckoutView.firstName}{" "}
          {userData && userData.userCheckoutView && userData.userCheckoutView.lastName}
        </CheckoutViewName>
        <CheckoutViewSmallText>
          {userData && userData.userCheckoutView && userData.userCheckoutView.bio}
        </CheckoutViewSmallText>
        <br />
        <div align="center">
          <Flex justify="center" style={{ width: "60%" }}>
            {userData &&
              userData.userCheckoutView &&
              userData.userCheckoutView.socialMediaLinks &&
              userData.userCheckoutView.socialMediaLinks.map((socia, key) => (
                <a
                  href={getValidUrl(socia && socia.link)}
                  target="_blank"
                  key={key}
                >
                  <div align="center" style={{ margin: "0 5px" }}>
                    <img
                      height="30px"
                      width="30px"
                      src={
                        socia &&
                        socia.category &&
                        socia.category.image &&
                        socia.category.image.url
                      }
                      alt=""
                    />
                  </div>
                </a>
              ))}
          </Flex>
        </div>

        <br />
        <CheckoutViewBlocks self={self} username={username} history={history} />
        <br />
        {self && (
          <StyledButton
            type="primary"
            icon={<AiOutlineLogout style={{ fontSize: "20px" }} />}
            onClick={() => {
              setAccessTokene("");
              setRefreshTokene("");
            }}
          >
            Log Out
          </StyledButton>
        )} */}
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
