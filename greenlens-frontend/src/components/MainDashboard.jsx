import React, { useState, useEffect } from "react";
import MetricCard from "./MetricCard";

const MainDashboard = () => {
  // State to hold our live data
  const [loading, setLoading] = useState(false);
  const [benchmarkData, setBenchmarkData] = useState({
    energy_kwh: 0.42,
    co2e_g: 168,
    hotspots_count: 7,
    cpu_before: 90,
    cpu_after: 40,
    memory_before: 80,
    memory_after: 60,
    runtime_before: 95,
    runtime_after: 30,
  });
  const [hotspots, setHotspots] = useState([
    {
      id: 1,
      name: "Nested DB query loop",
      file: "api/users/analytics.py:42",
      color: "red-500",
    },
    {
      id: 2,
      name: "Redundant re-computation",
      file: "services/report_gen.py:118",
      color: "orange-400",
    },
    {
      id: 3,
      name: "Unbounded cache growth",
      file: "utils/cache_manager.py:25",
      color: "orange-400",
    },
    {
      id: 4,
      name: "Inefficient JSON serialization",
      file: "models/base.py:89",
      color: "yellow-400",
    },
  ]);

  // Function to fetch data from our FastAPI backend
  const fetchLiveData = async () => {
    setLoading(true);
    try {
      const benchRes = await fetch("http://localhost:8000/api/benchmark");
      const benchData = await benchRes.json();
      setBenchmarkData(benchData);

      const spotRes = await fetch("http://localhost:8000/api/hotspots");
      const spotData = await spotRes.json();
      setHotspots(spotData);
    } catch (error) {
      console.error("Error fetching live data:", error);
    }
    setLoading(false);
  };

  // Fetch data automatically when the dashboard first loads
  useEffect(() => {
    fetchLiveData();
  }, []);

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-parchment">
      <div className="p-10 max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-onyx">
              Project:{" "}
              <span className="font-medium text-onyx/80">greenlens-api</span>
            </h2>
            <p className="text-sm text-onyx/60 mt-2">
              {loading
                ? "Running benchmark..."
                : "Last Benchmark Run: Just now"}
            </p>
          </div>
          <button
            onClick={fetchLiveData}
            disabled={loading}
            className={`${loading ? "bg-onyx/50" : "bg-olive hover:bg-[#3D5226]"} text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center`}
          >
            <svg
              className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {loading ? "Processing..." : "Re-benchmark"}
          </button>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <MetricCard
            title="Estimated Energy"
            value={benchmarkData.energy_kwh}
            unit="kWh"
            trend="-12%"
            icon={
              <svg
                className="w-7 h-7 text-onyx"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
          <MetricCard
            title="Estimated CO2e"
            value={benchmarkData.co2e_g}
            unit="g"
            trend="-14%"
            icon={
              <svg
                className="w-7 h-7 text-onyx"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            }
          />
          <MetricCard
            title="Hotspots Detected"
            value={benchmarkData.hotspots_count}
            unit=""
            icon={
              <svg
                className="w-7 h-7 text-onyx"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            }
          />
        </div>

        {/* Charts Container */}
        <div className="bg-[#EBE5D9] p-8 rounded-xl shadow-sm border border-black/5 mb-10">
          <h3 className="text-lg font-bold text-onyx mb-10 flex items-center">
            <svg
              className="w-5 h-5 mr-3 text-olive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            Before vs. After Optimization
          </h3>

          <div className="flex justify-around items-end h-32 border-b border-black/10 pb-2 mb-6">
            <div className="flex space-x-2 items-end h-full transition-all duration-500">
              <div
                className="w-4 bg-[#F28B82] rounded-t-sm transition-all duration-500"
                style={{ height: `${benchmarkData.cpu_before}%` }}
              ></div>
              <div
                className="w-4 bg-matcha rounded-t-sm transition-all duration-500"
                style={{ height: `${benchmarkData.cpu_after}%` }}
              ></div>
            </div>
            <div className="flex space-x-2 items-end h-full transition-all duration-500">
              <div
                className="w-4 bg-[#F28B82] rounded-t-sm transition-all duration-500"
                style={{ height: `${benchmarkData.memory_before}%` }}
              ></div>
              <div
                className="w-4 bg-matcha rounded-t-sm transition-all duration-500"
                style={{ height: `${benchmarkData.memory_after}%` }}
              ></div>
            </div>
            <div className="flex space-x-2 items-end h-full transition-all duration-500">
              <div
                className="w-4 bg-[#F28B82] rounded-t-sm transition-all duration-500"
                style={{ height: `${benchmarkData.runtime_before}%` }}
              ></div>
              <div
                className="w-4 bg-matcha rounded-t-sm transition-all duration-500"
                style={{ height: `${benchmarkData.runtime_after}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-around text-xs font-bold text-onyx mb-6">
            <span>CPU Time</span>
            <span>Memory Peak</span>
            <span>Runtime</span>
          </div>

          <div className="flex justify-center items-center space-x-8 text-sm font-medium text-onyx">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#F28B82] rounded-full mr-2"></div>{" "}
              Before
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-matcha rounded-full mr-2"></div> After
              (Estimated)
            </div>
          </div>
        </div>

        {/* Top Hotspots */}
        <div className="bg-[#EBE5D9] p-8 rounded-xl shadow-sm border border-black/5 mb-10">
          <h3 className="text-lg font-bold text-onyx mb-6 flex items-center">
            <svg
              className="w-5 h-5 mr-3 text-olive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Top Hotspots
          </h3>
          <div className="space-y-4">
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="bg-parchment p-4 rounded-lg border border-black/5 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div
                    className={`w-2.5 h-2.5 bg-${spot.color} rounded-full mr-3`}
                  ></div>
                  <span className="font-semibold text-onyx">{spot.name}</span>
                </div>
                <span className="bg-[#EBE5D9] px-3 py-1 text-xs font-mono text-onyx rounded-md">
                  {spot.file}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-[#EBE5D9] p-8 rounded-xl shadow-sm border border-black/5">
          <h3 className="text-xl font-bold text-onyx mb-6 flex items-center">
            <div className="w-10 h-10 bg-parchment rounded-full flex items-center justify-center mr-4 border border-black/5">
              <svg
                className="w-5 h-5 text-olive"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            AI Optimization Recommendation
          </h3>

          <div className="bg-parchment p-6 rounded-lg border border-black/5 mb-6">
            <p className="text-onyx mb-4 text-base">
              Hotspot Found in{" "}
              <span className="bg-[#EBE5D9] px-2 py-0.5 text-sm font-mono rounded">
                api/users/analytics.py:42
              </span>{" "}
              :<br />
              The query executes inside a loop for each record, causing high
              latency and excessive database load (N+1 query problem).
            </p>
            <p className="text-onyx text-base font-medium">
              Recommendation:{" "}
              <span className="font-normal">
                Batch the query outside the loop using{" "}
                <span className="bg-[#EBE5D9] px-2 py-0.5 text-sm font-mono rounded">
                  .in_()
                </span>{" "}
                clause to cut database round-trips by ~90%, significantly
                reducing CPU time and energy consumption.
              </span>
            </p>
          </div>

          <div className="flex space-x-4">
            <button className="bg-onyx hover:bg-[#1a2e11] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Patch Applied
            </button>
            <button
              onClick={fetchLiveData}
              className="bg-matcha hover:bg-olive text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Re-run Benchmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
