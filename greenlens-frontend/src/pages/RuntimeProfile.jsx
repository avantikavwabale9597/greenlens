import React, { useState, useEffect } from "react";

const RuntimeProfile = () => {
  // Simulate live data ticking for the prototype presentation
  const [cpuUsage, setCpuUsage] = useState(85);
  const [memoryUsage, setMemoryUsage] = useState(62);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) =>
        Math.min(100, Math.max(0, prev + (Math.random() * 10 - 5))),
      );
      setMemoryUsage((prev) =>
        Math.min(100, Math.max(0, prev + (Math.random() * 4 - 2))),
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 bg-[#FAF5EF] flex flex-col p-10 overflow-y-auto w-full h-full">
      {/* Header with Live Pulse */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-[#0C1707] mb-2">
            Runtime Profile
          </h2>
          <p className="text-[#0C1707]/60 text-lg font-medium">
            Docker Sandbox Environment
          </p>
        </div>
        <div className="flex items-center bg-[#EBE5D9] px-4 py-2 rounded-full border border-black/10">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
          <span className="text-sm font-bold text-[#0C1707]">
            PROFILING ACTIVE
          </span>
        </div>
      </div>

      {/* Hardware Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* CPU Monitor */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-black/20 flex flex-col justify-between">
          <p className="text-sm text-gray-400 font-bold mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-blue-400"
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
            Live CPU Utilization
          </p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-5xl font-extrabold text-white">
              {cpuUsage.toFixed(1)}%
            </span>
            <span className="text-blue-400 text-sm font-mono mb-1">
              Peak: 94.2%
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${cpuUsage}%` }}
            ></div>
          </div>
        </div>

        {/* Memory Monitor */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-black/20 flex flex-col justify-between">
          <p className="text-sm text-gray-400 font-bold mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            Memory Footprint
          </p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-5xl font-extrabold text-white">
              {memoryUsage.toFixed(1)}
            </span>
            <span className="text-purple-400 text-sm font-mono mb-1">
              MB / 128 MB
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div
              className="bg-purple-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(memoryUsage / 128) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Energy Monitor */}
        <div className="bg-[#EBE5D9] p-6 rounded-xl shadow-sm border border-black/5 flex flex-col justify-between">
          <p className="text-sm text-[#0C1707]/70 font-bold mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-[#4A612F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Real-time Energy Drain
          </p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-5xl font-extrabold text-[#0C1707]">14.2</span>
            <span className="text-[#4A612F] text-sm font-bold mb-1">Watts</span>
          </div>
          <p className="text-xs text-[#0C1707]/60 mt-2 border-t border-black/10 pt-2">
            Estimated Carbon Rate:{" "}
            <span className="font-bold text-red-600">High (2.4g / min)</span>
          </p>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="bg-[#0C1707] p-6 rounded-xl shadow-lg border border-black/20 flex-1 flex flex-col min-h-[300px]">
        <div className="flex items-center border-b border-white/10 pb-3 mb-4">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          </div>
          <span className="text-xs text-white/50 font-mono tracking-wider">
            docker/greenlens-sandbox:latest
          </span>
        </div>
        <div className="flex-1 overflow-y-auto font-mono text-sm text-green-400 space-y-2">
          <p className="text-gray-400">
            [SYSTEM]{" "}
            <span className="text-white">
              Initializing isolated container...
            </span>
          </p>
          <p className="text-gray-400">
            [SYSTEM]{" "}
            <span className="text-white">
              Mounting user payload: api/users/analytics.py
            </span>
          </p>
          <p className="text-gray-400">
            [PROFILER]{" "}
            <span className="text-blue-400">
              Attaching psutil hooks to PID 4492...
            </span>
          </p>
          <p className="text-gray-400">
            [EXEC]{" "}
            <span className="text-white">
              Running payload iteration 1/50...
            </span>
          </p>
          <p className="text-gray-400">
            [WARN]{" "}
            <span className="text-yellow-400">
              Database I/O spike detected (Latency: 245ms)
            </span>
          </p>
          <p className="text-gray-400">
            [WARN]{" "}
            <span className="text-red-400">CPU thread locked for 1.2s</span>
          </p>
          <p className="text-gray-400">
            [EXEC]{" "}
            <span className="text-white">
              Running payload iteration 2/50...
            </span>
          </p>
          <p className="text-gray-400">
            [METRICS]{" "}
            <span className="text-green-400">
              Logging snapshot to time-series DB...
            </span>
          </p>
          <p className="text-gray-400 animate-pulse mt-4">_</p>
        </div>
      </div>
    </div>
  );
};

export default RuntimeProfile;
