import { blue, neutral, yellow, red, green } from "./colors.js";
import { primaryFont } from "./typography";

export const lightTheme = {
    primaryColor: blue[300],
    secondaryColor: neutral[100],
    primaryColorHover: blue[200],
    primaryColorActive: blue[100],
    primaryColorDisabled: neutral[400],
    textColorOnPrimary: neutral[100],
    formElementBgColor: neutral[200],
    textOnFormElement: neutral[600],
    textColor: neutral[500],
    textColorInverted: neutral[100],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
};

export const darkTheme = {
    primaryColor: neutral[100],
    secondaryColor: neutral[500],
    primaryColorHover: neutral[200],
    primaryColorActive: neutral[300],
    textColorOnPrimary: neutral[600],
    formElementBgColor: neutral[500],
    textOnFormElement: neutral[100],
    primaryColorDisabled: neutral[600],
    textColor: neutral[600],
    textColorInverted: neutral[600],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
};