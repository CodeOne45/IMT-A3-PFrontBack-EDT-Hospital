import React from "react";
import SideMenu from "./components/SideMenu";
import { AffectationTable } from "./components/AffectationsTable";
import { AppBar, Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar
                    position="static"
                    sx={{
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                    }}
                >
                    Hospital Planning
                </AppBar>
                <Box sx={{ display: "flex", height: "calc(100vh - 60px)" }}>
                    <SideMenu />
                    <AffectationTable />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default App;
