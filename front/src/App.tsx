import { AppBar, Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { AffectationTable } from "./components/AffectationsTable";
import SideMenu from "./components/SideMenu";
import { VersionComponent } from "./components/Version";
import { theme } from "./theme";

import AddIcon from "@mui/icons-material/Add";

function App() {

  const [versions, setVersions] = useState(1);



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
            pl: 2,
          }}
        >
          Hospital Planning
        </AppBar>
        <Box
          sx={{
            display: "flex",
            height: "calc(100vh - 60px)",
          }}
        >
          <SideMenu />
          <Box sx={{ p: 4, overflowX: "scroll" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {Array.from({length: versions}).map((_, index) => (
                <VersionComponent
                  versionNumber={index + 1}
                  selectedVersion={index === versions - 1}
                  key={index}
                />
              ))}
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  height: "100%",
                  margin: "0 10px",
                  aspectRatio: "1/1",
                }}

                onClick={() => setVersions(versions + 1)}
              >
                <AddIcon fontSize="large" />
              </Button>
            </Box>
            <AffectationTable />
            <Button variant="contained" sx={{ mt: 2 }}>
              Ajouter une contrainte
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
