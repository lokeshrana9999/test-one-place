import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input as ADInput, Form } from "antd";
import styled, { withTheme } from "styled-components";

const StyledADInput = styled(ADInput)`
  /* display:block; */
`;

const Input = ({ children, ...props }) => {
  const {
    formik: { setFieldValue },
    name,
    meta,
  } = props;

  return (
    <Form.Item validateStatus={meta.error && "error"} extra={meta.error}>
      <StyledADInput
        {...props}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
      >
        {children}
      </StyledADInput>
    </Form.Item>
  );
};

Input.propTypes = {
  children: PropTypes.node,
};

export default withTheme(Input);
