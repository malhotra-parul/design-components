import React from 'react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
    return (
        <div style={{display: "flex", 
                    justifyContent:"space-evenly", 
                    alignItems: "center", 
                    marginTop: "20px"}} >
        <PrimaryButton>
            Submit
        </PrimaryButton>
        <SecondaryButton modifiers={["large", "success", "successSecondary"]}>
            Submit
        </SecondaryButton>
        <TertiaryButton modifiers={["small", "success"]}>
            Submit
        </TertiaryButton >
        <GlobalStyle />
        </div>
    )
}

export default App
