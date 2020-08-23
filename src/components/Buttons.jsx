import styled from "styled-components";

const primaryBlue="#2D41AD"; 
const secondaryBlue = "#F4F5F7";
const secondaryTextColor = "#000";
const tertiaryBorder = "#746FC0";

const Button = styled.button`
       
        margin: none;
        padding: 10px 30px;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        font-family: "Roboto Mono", monospace;
        min-width: 100px;
    `;

export const PrimaryButton = styled(Button)`
        background: ${primaryBlue};
        color: #F4F5F7;
        border-color: ${primaryBlue};
        filter: drop-shadow(0px 0px 2px ${primaryBlue} );
`;

export const SecondaryButton = styled(Button)`
        background: ${secondaryBlue};
        color: ${secondaryTextColor};
        border-color: ${primaryBlue};
        filter: drop-shadow(0px 0px 2px ${primaryBlue} );
`;

export const TertiaryButton = styled(Button)`
        background: ${secondaryBlue};
        color: ${secondaryTextColor};
        border-color: ${tertiaryBorder};
        filter: drop-shadow(0px 0px 2px ${tertiaryBorder} );
`;
