import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input as ADInput } from "antd";
import styled, { withTheme } from "styled-components";

const StyledADInput = styled(ADInput)`
  /* display:block; */
`;

const Input = ({ children, ...props }) => {
  console.log("input", props);
  const {
    formik: { setFieldValue },
    name,
  } = props;

  return (
    <StyledADInput
      {...props}
      onChange={(e) => {
        setFieldValue(name, e.target.value);
      }}
    >
      {children}
    </StyledADInput>
  );
};

Input.propTypes = {
  children: PropTypes.node,
};

export default withTheme(Input);
