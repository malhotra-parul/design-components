import styled from "styled-components";
import { typeScale, lightTheme, darkTheme } from "../utils";

const theme = darkTheme;

const Button = styled.button`
       
        outline: none;
        padding: 10px 30px;
        border-radius: 5px;
        font-size: ${typeScale.paragraph};
        cursor: pointer;
        font-family: ${lightTheme.primaryFont};
        min-width: 100px;
    `;

export const PrimaryButton = styled(Button)`
        background: ${theme === darkTheme ? darkTheme.primaryColor : lightTheme.primaryColor};
        color: #F4F5F7;
        border: 1px solid ${theme === darkTheme ? darkTheme.primaryColor : lightTheme.primaryColor};
        filter: drop-shadow(0px 0px 1px ${lightTheme.primaryColor} );
`;

export const SecondaryButton = styled(Button)`
        background: none;
        color: ${theme === darkTheme ? darkTheme.primaryColor : lightTheme.primaryColor};
        border: 1px solid ${theme === darkTheme ? darkTheme.primaryColor : lightTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
        background: none;
        color: ${theme === darkTheme ? darkTheme.primaryColor : lightTheme.primaryColor};
        border: none;
`;
