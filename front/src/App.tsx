import { ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { useUpdatedConstraints } from "./contexts/UpdatedConstraintsContext";
import Home from "./pages/Home";
import { theme } from "./theme";

function App() {
  const { init } = useUpdatedConstraints();
  useEffect(() => {
    init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
