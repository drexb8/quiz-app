import React from "react";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900/90 to-slate-900">
      <Outlet />
    </div>
  );
}

export default AppLayout;
