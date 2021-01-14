import React, { Component } from "react";
import { Switch as ADSwitch } from "antd-mobile";
import styled, { withTheme } from "styled-components";
import { Form } from "antd";

const StyledADSwitch = styled(ADSwitch)`
  /* background:green; */
  input[type="checkbox"]:checked + .checkbox {
    background: ${(props) => props.theme.brandPrimary};
  }
  .checkbox {
    /* background:red; */
    :before {
      height: 28px !important;
      border-radius: 28px !important;
    }
    :after {
      width: 28px !important;
      height: 28px !important;
      border-radius: 28px !important;
      box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.2),
        0 2px 11.5px 0 rgba(0, 0, 0, 0.08), -1px 2px 2px 0 rgba(0, 0, 0, 0.1);
    }
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
