import { useEffect } from "react";
import { useUpdatedConstraints } from "./contexts/UpdatedConstraintsContext";
import Home from "./pages/Home";

function App() {
  const { init } = useUpdatedConstraints();
  useEffect(() => {
    init();
  }, []);
  return <Home />;
}

export default App;
