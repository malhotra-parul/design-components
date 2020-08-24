import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
        small: ({ props }) => `
                padding: 8px;
                font-size: ${typeScale.helperText};
        `,
        large: ({ props }) => `
                padding: 16px 24px;
                font-size: ${typeScale.header2};       
        `,
        warning: ({ props }) => `
                background: none;
                outline-offset: 2px;
                outline : 1px solid transparent;
                color: ${props.theme.status.warningColor};

                &:hover, &:focus{
                        outline-color: ${props.theme.status.warningColorHover};
                        border: 1px solid ${props.theme.status.warningColor};
                        background: ${props.theme.status.warningColorHover};
                        color: ${props.theme.status.textColorInverted}
                }

                &:active{
                        background: ${props.theme.status.warningColorActive};
                }
        `,
        warningPrimary: ({ props }) =>`
                background-color: ${props.theme.status.warningColor};
                color: ${props.theme.textColorInverted};
                border: none;
        `,
        warningSecondary: ({ props }) => `
                border: 1px solid ${props.theme.status.warningColor};
                color: ${props.theme.status.textColorInverted};
        `,
        error: ({ props }) => `
                background: none;
                outline-offset: 2px;
                outline : 1px solid transparent;
                color: ${props.theme.status.errorColor};

                &:hover, &:focus{
                        outline-color: ${props.theme.status.errorColorHover};
                        border: 1px solid ${props.theme.status.errorColor};
                        background: ${props.theme.status.errorColorHover};
                        color: ${props.theme.status.textColorInverted}
                }

                &:active{
                        background: ${props.theme.status.errorColorActive};
                }
        `,
        errorPrimary: ({ props }) =>`
                background-color: ${props.theme.status.errorColor};
                color: ${props.theme.textColorInverted};
                border: none;
        `,
        errorSecondary: ({ props }) => `
                border: 1px solid ${props.theme.status.errorColor};
                color: ${props.theme.status.textColorInverted};
        `,
        success: ({ props }) => `
                background: none;
                outline-offset: 2px;
                outline : 1px solid transparent;
                color: ${props.theme.status.successColor};

                &:hover, &:focus{
                        outline-color: ${props.theme.status.successColorHover};
                        border: 1px solid ${props.theme.status.successColor};
                        background: ${props.theme.status.successColorHover};
                        color: ${props.theme.status.textColorInverted}
                }

                &:active{
                        background: ${props.theme.status.successColorActive};
                }
        `,
        successPrimary: ({ props }) =>`
                background-color: ${props.theme.status.successColor};
                color: ${props.theme.textColorInverted};
                border: none;
        `,
        successSecondary: ({ props }) => `
                border: 1px solid ${props.theme.status.successColor};
                color: ${props.theme.status.textColorInverted};
        `,


}


const Button = styled.button`
       
        outline: none;
        padding: 10px 30px;
        border-radius: 5px;
        font-size: ${typeScale.paragraph};
        cursor: pointer;
        font-family: ${props => props.theme.primaryFont};
        min-width: 100px;
        border: 0 solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
        transition: all 0.1s ease-out;

        &:hover, &:active, &:focus {
                box-shadow: inset 0 0 5px rgba(255, 255, 255, .5), 0 0 5px rgba(255, 255, 255, .2);
        }

        &:hover{
                background: ${props => props.theme.primaryColorHover};
                
        }

        &:focus, &:active{
                background: ${props => props.theme.primaryColorActive};
        }
        
        &:disabled{
                background: ${props => props.theme.primaryColorDisabled};
                color: ${props => props.theme.textColorInverted};
                cursor: not-allowed;
        }

    `;

export const PrimaryButton = styled(Button)`
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.textColorInverted};
        border: 1px solid ${props => props.theme.primaryColor};
        /* filter: drop-shadow(0px 0px 1px ${props => props.theme.primaryColor} ); */

        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
        background: none;
        color: ${props => props.theme.primaryColor};
        border: 1px solid ${props => props.theme.primaryColor};
        &:hover, &:active, &:focus{
                color: ${props => props.theme.textColorInverted}
        }


        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
        background: none;
        color: ${props => props.theme.primaryColor};
        border: none;
        &:hover, &:active, &:focus{
                color: ${props => props.theme.textColorInverted}
        }


        ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
