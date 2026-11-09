import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/MainDashboard";
import StaticAnalysis from "./pages/StaticAnalysis";
import RuntimeProfile from "./pages/RuntimeProfile";
import Hotspots from "./pages/Hotspots";

const PlaceholderPage = ({ title }) => (
  <div className="flex-1 bg-parchment flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-onyx mb-4">{title}</h2>
      <p className="text-onyx/60">This module is under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex h-screen w-full bg-parchment text-onyx font-sans">
        <Sidebar />

        <Routes>
          {/* Main Overview Page */}
          <Route path="/" element={<MainDashboard />} />

          {/* Your newly created dedicated page */}
          <Route path="/static-analysis" element={<StaticAnalysis />} />

          {/* Placeholder pages */}
          <Route path="/runtime-profile" element={<RuntimeProfile />} />
          <Route path="/hotspots" element={<Hotspots />} />
          <Route
            path="/ai-recommendations"
            element={<PlaceholderPage title="AI Recommendations" />}
          />
          <Route
            path="/before-after"
            element={<PlaceholderPage title="Before / After" />}
          />
          <Route
            path="/reports"
            element={<PlaceholderPage title="Reports" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
