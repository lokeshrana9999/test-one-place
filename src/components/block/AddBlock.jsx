import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { message } from "antd";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { WhiteSpace } from "@look/mobile";
import PageLayout from "@look/PageLayout";
import BlockForm from "./BlockForm";
import { withAddUserBlock, withBlockCategoryById } from "./BlockOperations";

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

const FormWrapper = styled.div`
  color: ${(props) => props.theme.textColor};
  position: relative;
`;

const BlockAddView = (props) => {
  const { postBlock, history, match, blockCategory } = props;
  const onSubmit = async (values) => {
    let modifiedValues = values;
    modifiedValues.blockCategory =
      match && match.params && match.params.blockCategoryId;
    try {
      message.loading({
        content: "Adding Card ...",
        duration: 0,
      });
      const sending = await postBlock(modifiedValues);
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
      <PageHead>
        <AiOutlineArrowLeft
          style={{ position: "absolute", top: "-3px", left: 0 }}
          onClick={history.goBack}
        />
        Add a new card
      </PageHead>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <BlockForm onSubmit={onSubmit} blockCategory={blockCategory} />
    </PageLayout>
  );
};
export default withAddUserBlock(withBlockCategoryById(withTheme(BlockAddView)));
