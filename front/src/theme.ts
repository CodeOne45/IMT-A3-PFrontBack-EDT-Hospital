import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
        customPalette: {
            tertiary: string;
            morning: string;
            day: string;
            evening: string;
            rest: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        customPalette?: {
            tertiary?: string;
            morning?: string;
            day?: string;
            evening?: string;
            rest?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#07485C",
        },
        secondary: {
            main: "#E12355",
        },
        background: {
            default: "#FFFFFF",
        },
        text: {
            primary: "#1C1C1C",
            secondary: "#F2F2F2",
        },
    },
    customPalette: {
        tertiary: "#3C8080",
        morning: "#F4E2FF",
        day: "#E2F6FF",
        evening: "#FFECCF",
        rest: "#EFEFEF",
    },
});
