import React from 'react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
    return (
        <div style={{display: "flex", justifyContent:"space-evenly"}}>
        <PrimaryButton>
            Submit
        </PrimaryButton>
        <SecondaryButton>
            Submit
        </SecondaryButton>
        <TertiaryButton>
            Submit
        </TertiaryButton>
        <GlobalStyle />
        </div>
    )
}

export default App
