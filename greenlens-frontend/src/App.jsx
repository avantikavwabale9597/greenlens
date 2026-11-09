import React from "react";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/MainDashboard";

function App() {
  return (
    <div className="flex h-screen w-full bg-parchment text-onyx font-sans">
      <Sidebar />
      <MainDashboard />
    </div>
  );
}

export default App;
