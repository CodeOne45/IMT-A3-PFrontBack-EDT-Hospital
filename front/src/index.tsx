import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecommandationsContextProvider } from "./contexts/RecommandationsContext";
import { SchedulesContextProvider } from "./contexts/SchedulesContext";
import { UpdatedConstraintsContextProvider } from "./contexts/UpdatedConstraintsContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <SchedulesContextProvider>
    <RecommandationsContextProvider>
      <UpdatedConstraintsContextProvider>
        <CssBaseline />
        <App />
      </UpdatedConstraintsContextProvider>
    </RecommandationsContextProvider>
  </SchedulesContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>
);
