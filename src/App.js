import React, { useState } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle, lightTheme, darkTheme } from "./utils";
import { ThemeProvider } from "styled-components";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "20px",
          height: "100vh",
          background: `${
            useDarkTheme ? darkTheme.secondaryColor : lightTheme.secondaryColor
          }`,
        }}
      >
        <PrimaryButton onClick={() => setUseDarkTheme(false)}>
          Light Theme
        </PrimaryButton>
        <SecondaryButton onClick={() => setUseDarkTheme(true)}>
          Dark Theme
        </SecondaryButton>
        <TertiaryButton>Submit</TertiaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
