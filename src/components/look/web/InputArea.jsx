import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input, Form } from "antd";
import styled, { withTheme } from "styled-components";

const ADTextArea = Input.TextArea;

const StyledADTextArea = styled(ADTextArea)`
  /* display:block; */
`;

const TextArea = ({ children, ...props }) => {
  const {
    formik: { setFieldValue, handleBlur },
    name,
    meta,
  } = props;
  return (
    <Form.Item
      validateStatus={meta.touched && meta.error && "error"}
      extra={meta.touched && meta.error}
    >
      <StyledADTextArea
        onBlur={handleBlur}
        {...props}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
      >
        {children}
      </StyledADTextArea>
    </Form.Item>
  );
};

TextArea.propTypes = {
  children: PropTypes.node,
};

export default withTheme(TextArea);
