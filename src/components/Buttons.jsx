import styled from "styled-components";
import { typeScale, lightTheme, darkTheme } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
        small: () => `
                padding: 8px;
                font-size: ${typeScale.helperText};
        `,
        large: () => `
                padding: 16px 24px;
                font-size: ${typeScale.header2};       
        `,
        warning: () => `
                background: none;
                outline-offset: 2px;
                outline : 1px solid transparent;
                color: ${lightTheme.status.warningColor};

                &:hover, &:focus{
                        outline-color: ${lightTheme.status.warningColorHover};
                        border: 1px solid ${lightTheme.status.warningColor};
                        background: ${lightTheme.status.warningColorHover};
                        color: ${lightTheme.status.textColorInverted}
                }

                &:active{
                        background: ${lightTheme.status.warningColorActive};
                }
        `,
        warningPrimary: () =>`
                background-color: ${lightTheme.status.warningColor};
                color: ${lightTheme.textColorInverted};
                border: none;
        `,
        warningSecondary: () => `
                border: 1px solid ${lightTheme.status.warningColor};
                color: ${lightTheme.status.textColorInverted};
        `,

}


const Button = styled.button`
       
        outline: none;
        padding: 10px 30px;
        border-radius: 5px;
        font-size: ${typeScale.paragraph};
        cursor: pointer;
        font-family: ${lightTheme.primaryFont};
        min-width: 100px;
        border: 0 solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        transition: all 0.1s ease-out;

        &:hover, &:active, &:focus {
                box-shadow: inset 0 0 5px rgba(255, 255, 255, .5), 0 0 5px rgba(255, 255, 255, .2);
        }

        &:hover{
                background: ${lightTheme.primaryColorHover};
                
        }

        &:focus, &:active{
                background: ${lightTheme.primaryColorActive};
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
        /* filter: drop-shadow(0px 0px 1px ${lightTheme.primaryColor} ); */

        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
        background: none;
        color: ${lightTheme.primaryColor};
        border: 1px solid ${lightTheme.primaryColor};
        &:hover, &:active, &:focus{
                color: ${lightTheme.textColorInverted}
        }


        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
        background: none;
        color: ${lightTheme.primaryColor};
        border: none;
        &:hover, &:active, &:focus{
                color: ${lightTheme.textColorInverted}
        }


        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
