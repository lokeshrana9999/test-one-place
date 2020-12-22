import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import Button from "./mobile/Button";
import Picker from "./mobile/Picker";
import { themes } from "../../styles/themes";

console.log(withTheme);

const ThemeChanger = ({ theme, onChangeTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(theme);

  var themesArr = Object.values(themes);

  themesArr = themesArr.map((tA) => {
    const returnObj = {
      label: (
        <div>
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              width: "16px",
              height: "16px",
              marginRight: "10px",
              backgroundColor: tA.brandPrimary,
            }}
          />
          <span>{tA.title}</span>
        </div>
      ),
      value: tA.value,
    };
    return returnObj;
  });

  return (
    <Container textColor={theme.primaryColor} background={theme.secondaryColor}>
      <Picker
        cols={1}
        data={themesArr}
        title="Slide to select Theme"
        okText="Apply"
        dismissText="Cancel"
        value={selectedTheme}
        onChange={setSelectedTheme}
        onOk={(v) => onChangeTheme(v)}
        onDismiss={(e) => console.log("dismiss", e)}
      >
        <Button> Choose Theme</Button>
      </Picker>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.background};
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;


export default withTheme(ThemeChanger);
