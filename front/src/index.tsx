import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecommandationsContextProvider } from "./contexts/RecommandationsContext";
import { SchedulesContextProvider } from "./contexts/SchedulesContext";
import { UpdatedConstraintsContextProvider } from "./contexts/UpdatedConstraintsContext";
import "./index.scss";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <SchedulesContextProvider>
      <RecommandationsContextProvider>
        <UpdatedConstraintsContextProvider>
          <CssBaseline />
          <App />
        </UpdatedConstraintsContextProvider>
      </RecommandationsContextProvider>
    </SchedulesContextProvider>
  </ThemeProvider>
  // <React.StrictMode>
  // </React.StrictMode>
);
