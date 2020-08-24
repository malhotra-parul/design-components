import styled from "styled-components";
import { typeScale, lightTheme, darkTheme } from "../utils";


const Button = styled.button`
       
        outline: none;
        padding: 10px 30px;
        border-radius: 5px;
        font-size: ${typeScale.paragraph};
        cursor: pointer;
        font-family: ${lightTheme.primaryFont};
        min-width: 100px;

        &:hover, &:focus{
                background: ${lightTheme.primaryColorHover};
        }
        &:active{
                background: ${lightTheme.primaryColorActive}
        }
        &:disabled{
                background: ${lightTheme.primaryColorDisabled};
                color: ${lightTheme.textColorInverted};
                cursor: not-allowed;
        }
    `;

export const PrimaryButton = styled(Button)`
        background: ${lightTheme.primaryColor};
        color: #F4F5F7;
        border: 1px solid ${lightTheme.primaryColor};
        filter: drop-shadow(0px 0px 1px ${lightTheme.primaryColor} );
`;

export const SecondaryButton = styled(Button)`
        background: none;
        color: ${lightTheme.primaryColor};
        border: 1px solid ${lightTheme.primaryColor};
        &:hover, &:active, &:focus{
                color: ${lightTheme.textColorInverted}
        }
`;

export const TertiaryButton = styled(Button)`
        background: none;
        color: ${lightTheme.primaryColor};
        border: none;
        &:hover, &:active, &:focus{
                color: ${lightTheme.textColorInverted}
        }
`;
