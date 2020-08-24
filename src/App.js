import React, { useState } from "react";
import { SignUpModal } from "./components/index";
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
        <SignUpModal />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
