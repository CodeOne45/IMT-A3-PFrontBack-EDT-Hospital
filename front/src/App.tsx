import { useUpdatedConstraints } from "./contexts/UpdatedConstraintsContext";
import Home from "./pages/Home";

function App() {
  const { init } = useUpdatedConstraints();
  init();
  return <Home />;
}

export default App;
