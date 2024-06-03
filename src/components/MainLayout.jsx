import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main>
      <Header />
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default MainLayout;
