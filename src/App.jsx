import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Deals from "./components/Deals";
import Processing from "./components/Processing";
import Settings from "./components/Settings";
import Business from "./components/Business";

function App() {
  return (
    <div className="app w-full h-dvh p-2 dark-bg">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={PrivateRoute}>
            <Route path="deals" element={<Deals />} />
            <Route path="processing" element={<Processing />} />
            <Route path="settings" element={<Settings />} />
            <Route path="bussiness" element={<Business />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
