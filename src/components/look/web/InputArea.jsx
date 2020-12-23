import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import styled, { withTheme } from "styled-components";

const ADTextArea = Input.TextArea

const StyledADTextArea = styled(ADTextArea)`
  /* display:block; */
`;

const TextArea = ({ children, ...props }) => {
  console.log("input", props);
  const {
    formik: { setFieldValue },
    name,
  } = props;

  return (
    <StyledADTextArea
      {...props}
      onChange={(e) => {
        setFieldValue(name, e.target.value);
      }}
    >
      {children}
    </StyledADTextArea>
  );
};

TextArea.propTypes = {
  children: PropTypes.node,
};

export default withTheme(TextArea);
