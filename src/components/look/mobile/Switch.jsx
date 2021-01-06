import React, { Component } from "react";
import { Switch as ADSwitch } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import { Form } from "antd";

const StyledADSwitch = styled(ADSwitch)`
  input[type="checkbox"]:checked + .checkbox {
    background: ${(props) => props.theme.brandPrimary};
  }
  /* .am-picker-popup-body {
    background: ${(props) => props.theme.brandSecondary};
    color: ${(props) => props.theme.textColor};
    .am-picker-col-mask {
      background-image: none;
    }
    .am-picker-col-indicator {
      border-top: 1px solid ${(props) => props.theme.brandPrimary};
      border-bottom: 1px solid ${(props) => props.theme.brandPrimary};
    }
    .am-picker-col-item {
      div {
        color: ${(props) => props.theme.textColor};
      }
    }
    .am-picker-popup-header-left,
    .am-picker-popup-header-right {
      background: ${(props) => props.theme.brandPrimary};
      color: ${(props) => props.theme.brandSecondary};
    }
    .am-picker-popup-title {
      color: ${(props) => props.theme.textColor};
    }
  } */
`;

const Switch = ({ children, theme, ...props }) => {
  const {
    formik: { setFieldValue, handleBlur },
    name,
    meta,
    value,
    label,
  } = props;
  return (
    <Form.Item
      validateStatus={meta.touched && meta.error && "error"}
      extra={meta.touched && meta.error}
      label={label}
    >
      <StyledADSwitch
        {...props}
        theme={theme}
        onChange={(e) => {
          setFieldValue(name, e);
        }}
        checked={value}
      >
        {children}
      </StyledADSwitch>
    </Form.Item>
  );
};

export default withTheme(Switch);
