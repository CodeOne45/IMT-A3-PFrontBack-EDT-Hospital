import { CssBaseline, ThemeProvider } from "@mui/material";
import { RecommandationsContextProvider } from "./contexts/RecommandationsContext";
import { SchedulesContextProvider } from "./contexts/SchedulesContext";
import Home from "./pages/Home";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SchedulesContextProvider>
          <RecommandationsContextProvider>
            <CssBaseline />
            <Home />
          </RecommandationsContextProvider>
        </SchedulesContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
