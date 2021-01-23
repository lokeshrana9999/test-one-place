import React from "react";
import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "@look/mobile";
import { Typography, Button } from "@look/web";
import VideoComponent from "@look/VideoComponent";
import GoogleLoginButon from "@auth/GoogleLoginButton";
// import BlockCard from "./BlockCard";

const { Title, Text, Paragraph } = Typography;

const StyledHeading = styled(Title)`
  font-size: 22px !important;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  color: #000000;
  position: relative;
  margin-bottom: 13px !important;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 41px !important;
`;

const StyledPriceDisplay = styled(Text)`
  font-size: 25px;
  color: #4643d3;
  font-weight: bold;
  line-height: 1;
  display: block;
  margin-bottom: 0;
`;

const StyledPriceSubText = styled(Text)`
  font-size: 17px;
  opacity: 0.5;

  color: #4643d3;
  font-weight: bold;
  line-height: 1.47;
  margin-bottom: 0;
`;

const BlockDetailView = (props) => {
  const { history, navigation, blockById } = props;
  console.log("blockdetailview", props);
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        placeItems: "center",
        background: "white",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          // marginTop: "50vh",
          maxWidth: "500px",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ width: "100%", height: "50vh" }}>
          <VideoComponent
            fluid={false}
            width="100%"
            height="100%"
            src={blockById && blockById.media && blockById.media.url}
          />
        </div>
        <div style={{ padding: "32px 34px" }}>
          <StyledHeading>{blockById && blockById.title}</StyledHeading>
          <StyledParagraph>
            {blockById && blockById.description}
          </StyledParagraph>

          {blockById && blockById.isPaymentEnabled && (
            <React.Fragment>
              <StyledPriceDisplay>{`${
                blockById && blockById.price
              } INR`}</StyledPriceDisplay>
              <StyledPriceSubText>Per Request</StyledPriceSubText>
            </React.Fragment>
          )}
          <WhiteSpace size="xl" />
          <GoogleLoginButon
            buttonText="Continue with google"
            redirect={`/order/checkout/${blockById && blockById._id}`}
          />
        </div>
      </div>
    </div>
  );
};

export default withTheme(BlockDetailView);
