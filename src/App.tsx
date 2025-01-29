import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import { Nav } from "./components/nav";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Nav />
      <AppRoutes />
    </Router>
  );
}

export default App;
