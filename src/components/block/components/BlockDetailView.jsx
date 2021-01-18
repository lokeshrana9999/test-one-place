import React from "react";
import styled, { withTheme } from "styled-components";
import { WhiteSpace } from "@look/mobile";
import { Typography, Button } from "@look/web";
import  VideoComponent  from "@look/VideoComponent";
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
  const { history, navigation, blockCategoryList } = props;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        // display: "grid",
        // placeItems: "center",
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
            src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
          />
        </div>
        <div style={{ padding: "32px 34px" }}>
          <StyledHeading>Name of the Card</StyledHeading>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean test massa. Cum sociis natoque
            penatibus et magn men Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor. Aenean for massa.
            Cum sociis natoque penatibus et magn.
          </StyledParagraph>

          <StyledPriceDisplay>{`1000 INR`}</StyledPriceDisplay>
          <StyledPriceSubText>Per Request</StyledPriceSubText>
          <WhiteSpace size="xl" />
          <Button type="primary" block size="large">
            Continue
          </Button>
        </div>

        {/* <WhiteSpace size="xl" />
        <PageHead>
          {" "}
          <AiOutlineArrowLeft
            style={{ position: "absolute", top: "-3px", left: 0 }}
            onClick={history.goBack}
          />
          Add a new card
        </PageHead>
        <WhiteSpace size="xl" />

        <div>
          {blockCategoryList && blockCategoryList.length !== 0 ? (
            <div>
              {blockCategoryList.map((blockCat, key) => (
                <BlockCard blockCategory={blockCat} key={key} />
              ))}
            </div>
          ) : (
            <h3>No cards available</h3>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default withTheme(BlockDetailView);
