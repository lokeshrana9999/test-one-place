import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { message } from "antd";
import { WhiteSpace } from "../look/mobile";
import PageLayout from "../look/PageLayout";
import BlockForm from "./BlockForm";
import { withAddUserBlock } from "./BlockOperations";

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

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

const BlockAddView = (props) => {
  const { postBlock, history, match } = props;
  console.log("blockadd", props);
  const onSubmit = async (values) => {
    let modifiedValues = values;
    modifiedValues.blockCategory =
      match && match.params && match.params.blockCategoryId;
    console.log("addBlock", modifiedValues);
    try {
      message.loading({
        content: "Adding Card ...",
        duration: 0,
      });
      const sending = await postBlock(modifiedValues);
      console.log(sending);
      message.destroy();
      if (sending.status === true) {
        message.success({
          duration: 2,
          content: "Card Added",
        });
        history.push("/");
      } else {
        message.error({
          duration: 2,
          content: sending.data.message,
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
    <PageLayout>
      <WhiteSpace size="xl" />
      <PageHead>Add a new card</PageHead>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <BlockForm onSubmit={onSubmit} />
    </PageLayout>
  );
};
export default withAddUserBlock(withTheme(BlockAddView));
