import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./pages/Home";
import { SchedulesContextProvider } from "./contexts/SchedulesContext";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SchedulesContextProvider>
          <CssBaseline />
          <Home />
        </SchedulesContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
