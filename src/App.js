import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landingPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
