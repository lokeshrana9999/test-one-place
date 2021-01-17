import React from "react";
import PropTypes from "prop-types";
import { Button as ADButton } from "antd";
import styled, { withTheme } from "styled-components";

const StyledADButtonWrapper = styled.div`
  /* .am-button.am-button-primary {
    color: ${(props) => props.theme.brandSecondary};
    background: ${(props) => props.theme.brandPrimary};
    border: 1px solid ${(props) => props.theme.brandPrimary};

    ::before {
      border: 1px solid ${(props) => props.theme.brandPrimary};
    }
  } */
`;

const Button = ({ children, type, theme, ...props }) => {
  return (
    <StyledADButtonWrapper theme={theme}>
      <ADButton type={type} {...props}>
        {children}
      </ADButton>
    </StyledADButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default withTheme(Button);
