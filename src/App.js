import React, { useState } from "react";
import { SignUpModal } from "./components/index";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { GlobalStyle, lightTheme, darkTheme } from "./utils";
import { ThemeProvider } from "styled-components";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [ showModal, setShowModal ] = useState(false);

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
        <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>Toggle Theme</PrimaryButton>
        <SecondaryButton onClick={() => setShowModal(!showModal)}>Toggle Modal</SecondaryButton>
        <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
