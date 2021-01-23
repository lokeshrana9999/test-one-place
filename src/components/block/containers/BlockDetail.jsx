import React from "react";
import { withBlockById } from "../BlockOperations";
import BlockDetailView from "../components/BlockDetailView";

const ChooseBlockCategoryView = (props) => {
  return <BlockDetailView {...props} />;
};

export default withBlockById(ChooseBlockCategoryView);
