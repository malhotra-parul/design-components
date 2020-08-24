import { blue, neutral } from "./colors.js";
import { primaryFont } from "./typography";

export const lightTheme = {
    primaryColor: blue[300],
    primaryColorHover: blue[200],
    primaryColorActive: blue[100],
    primaryColorDisabled: neutral[400],
    textColorOnPrimary: neutral[100],
    textColor: neutral[500],
    textColorInverted: neutral[100],
    primaryFont
};

export const darkTheme = {
    primaryColor: neutral[500],
    primaryColorHover: neutral[400],
    primaryColorActive: neutral[300],
    textColorOnPrimary: neutral[100],
    primaryColorDisabled: neutral[600],
    textColor: neutral[100],
    textColorInverted: neutral[600],
    primaryFont
};