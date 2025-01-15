import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Home } from "./pages/home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"/> 
      </Routes>
    </Router>
  )
}

export default App
