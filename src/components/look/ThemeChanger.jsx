import React from "react";
import styled, { withTheme } from "styled-components";

console.log(withTheme);

const ThemeChanger = ({ theme, themes, onChangeTheme }) => (
  <Container textColor={theme.primaryColor} background={theme.secondaryColor}>
    CHANGE THEME:{" "}
    <select onChange={e => onChangeTheme(e.target.value)}>
      {themes.map(themeName => (
        <option key={themeName} value={themeName}>
          {themeName}
        </option>
      ))}
    </select>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
  position:absolute;
  top:0;
  left:0;
  z-index:1000;
`;

export default withTheme(ThemeChanger);
