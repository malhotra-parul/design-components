import styled from "styled-components";

const primaryBlue="#2D41AD"; 
const secondaryBlue = "#ddebfd";

const Button = styled.button`
       
        outline: none;
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
        border: 1px solid ${primaryBlue};
        filter: drop-shadow(0px 0px 2px ${primaryBlue} );
`;

export const SecondaryButton = styled(Button)`
        background: none;
        color: ${primaryBlue};
        border: 1px solid ${primaryBlue};
`;

export const TertiaryButton = styled(Button)`
        background: none;
        color: ${primaryBlue};
        border: none;
`;
