import React from 'react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
    return (
        <div style={{display: "flex", 
                    justifyContent:"space-evenly", 
                    alignItems: "center", 
                    marginTop: "20px"}} >
        <PrimaryButton modifiers="small">
            Submit
        </PrimaryButton>
        <SecondaryButton modifiers="large">
            Submit
        </SecondaryButton>
        <TertiaryButton modifiers={["small"]}>
            Submit
        </TertiaryButton >
        <GlobalStyle />
        </div>
    )
}

export default App
