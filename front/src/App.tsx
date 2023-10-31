import React from "react";
import SideMenu from "./components/SideMenu";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SideMenu />
            </ThemeProvider>
        </>
    );
}

export default App;
