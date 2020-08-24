import React from 'react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
    return (
        <div style={{display: "flex", 
                    justifyContent:"space-evenly", 
                    alignItems: "center", 
                    marginTop: "20px"}} >
        <PrimaryButton modifiers={["small", "warning", "warningPrimary"]}>
            Submit
        </PrimaryButton>
        <SecondaryButton modifiers={["large", "warning", "warningSecondary"]}>
            Submit
        </SecondaryButton>
        <TertiaryButton modifiers={["small", "warning"]}>
            Submit
        </TertiaryButton >
        <GlobalStyle />
        </div>
    )
}

export default App
