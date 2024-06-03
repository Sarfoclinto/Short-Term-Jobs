import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Deals from "./components/Deals";
import Processing from "./components/Processing";
import Settings from "./components/Settings";
import Business from "./components/Business";
import SignUp from "./components/SignUp";
import Modal from "./Modals/Modal";
import ModalContextProvider from "./context/Modals";
import UsersContextProvider from "./context/Users";
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <ModalContextProvider>
        <UsersContextProvider>
          <div className="app w-full h-dvh p-2 dark-bg">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/main" element={<PrivateRoute />}>
                <Route element={<MainLayout />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="deals" element={<Deals />} />
                  <Route path="processing" element={<Processing />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="business" element={<Business />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </UsersContextProvider>
      </ModalContextProvider>
    </Router>
  );
}

export default App;
