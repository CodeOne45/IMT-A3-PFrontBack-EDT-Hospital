import React from "react";
import SideMenu from "./components/SideMenu";
import { AffectationTable } from "./components/AffectationsTable";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ display: "flex" }}>
                    <SideMenu />
                    <AffectationTable />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;
