import React from "react";
import styled, { withTheme } from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { WhiteSpace } from "@look/mobile";
// import BlockCard from "./BlockCard";

const PageHead = styled.h1`
  font-family: Rubik;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  /* word-spacing: -8px; */
  position: relative;
`;

const BlockDetailView = (props) => {
  const { history, navigation, blockCategoryList } = props;
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "grid",
        placeItems: "center",
        background: "white",
      }}
    >
      {" "}
      <div
        style={{
          padding: "15px 20px",
          maxWidth: "500px",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >block detail
      <WhiteSpace size="xl" />
      block detail
      <WhiteSpace size="xl" />
      block detail
      <WhiteSpace size="xl" />
      block detail
      <WhiteSpace size="xl" />
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
