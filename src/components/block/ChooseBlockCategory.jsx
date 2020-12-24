import React, { useContext, useState } from "react";
import styled, { withTheme } from "styled-components";
import { useGet } from "restful-react";
import { WhiteSpace, Loader } from "../look/mobile";
import { ApiContext, BlockApiUrls } from "../../api";
import BlockCard from "./BlockCard";

const PageHead = styled.h1`
  font-family: CircularStdBlack;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  word-spacing: -8px;
`;

const ChooseBlockCategoryView = (props) => {
  const defaultApiUrl = useContext(ApiContext);
  const apiUrl = defaultApiUrl + BlockApiUrls.getBlockCategory;
  const {
    data, 
    loading,
  } = useGet({
    path: apiUrl,
  });
  const blockCategoryList = data && data.blockCategoryList;

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
          padding: "20px",
          maxWidth: "500px",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <PageHead>Add a new card</PageHead>
        <WhiteSpace size="xl" />
        {loading ? (
          <Loader size="large" />
        ) : (
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
          </div>
        )}
      </div>
    </div>
  );
};

export default withTheme(ChooseBlockCategoryView);
