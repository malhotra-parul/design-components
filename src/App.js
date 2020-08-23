import React from 'react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";

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
        </div>
    )
}

export default App
