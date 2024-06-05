import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className=" flex w-ful h-full bg-outlet">
      <div className=" w-1/6">
        <Sidebar />
      </div>
      <div id="content" className="w-5/6">
        <div id="header" className="">
          <Header />
        </div>
        <div id="outlet" className="">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
