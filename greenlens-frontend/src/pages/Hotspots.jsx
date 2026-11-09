import React from "react";

const Hotspots = () => {
  return (
    <div className="flex-1 bg-[#FAF5EF] flex flex-col p-10 overflow-y-auto w-full h-full">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-[#0C1707] mb-2">
          Detected Hotspots
        </h2>
        <p className="text-[#0C1707]/60 text-lg font-medium">
          Prioritized performance and energy bottlenecks
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#EBE5D9] p-6 rounded-xl border border-black/5 shadow-sm">
          <p className="text-sm text-[#0C1707]/70 font-bold mb-2">
            Total Hotspots
          </p>
          <p className="text-4xl font-extrabold text-[#0C1707]">4</p>
        </div>
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
          <p className="text-sm text-red-600 font-bold mb-2">High Severity</p>
          <p className="text-4xl font-extrabold text-red-700">1</p>
        </div>
        <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400 shadow-sm">
          <p className="text-sm text-orange-600 font-bold mb-2">
            Medium Severity
          </p>
          <p className="text-4xl font-extrabold text-orange-700">2</p>
        </div>
      </div>

      {/* Hotspots List */}
      <div className="bg-[#EBE5D9] p-8 rounded-xl border border-black/5 shadow-sm space-y-6">
        <h3 className="text-2xl font-bold text-[#0C1707] mb-6 flex items-center">
          <svg
            style={{ width: "28px", height: "28px", minWidth: "28px" }}
            className="mr-3 text-[#4A612F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Active Hotspot Registry
        </h3>

        {/* Hotspot Item 1 */}
        <div className="bg-[#FAF5EF] p-6 rounded-lg border-l-4 border-red-500 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-[#0C1707] text-xl">
                Nested DB query loop
              </span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                High Impact
              </span>
            </div>
            <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2.5 py-1 rounded inline-block mb-2">
              api/users/analytics.py:42
            </p>
            <p className="text-base text-[#0C1707]/80">
              The query executes inside a loop for each record, causing massive
              database round-trip overhead and CPU locking.
            </p>
          </div>
          <button className="bg-[#0C1707] hover:bg-[#4A612F] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
            Inspect Code
          </button>
        </div>

        {/* Hotspot Item 2 */}
        <div className="bg-[#FAF5EF] p-6 rounded-lg border-l-4 border-orange-400 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-[#0C1707] text-xl">
                Redundant re-computation
              </span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Medium
              </span>
            </div>
            <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2.5 py-1 rounded inline-block mb-2">
              services/report_gen.py:118
            </p>
            <p className="text-base text-[#0C1707]/80">
              Heavy mathematical formulas are re-calculated on every frame
              without utilizing cached lookup dictionaries.
            </p>
          </div>
          <button className="bg-[#0C1707] hover:bg-[#4A612F] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
            Inspect Code
          </button>
        </div>

        {/* Hotspot Item 3 */}
        <div className="bg-[#FAF5EF] p-6 rounded-lg border-l-4 border-orange-400 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-[#0C1707] text-xl">
                Unbounded cache growth
              </span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Medium
              </span>
            </div>
            <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2.5 py-1 rounded inline-block mb-2">
              utils/cache_manager.py:25
            </p>
            <p className="text-base text-[#0C1707]/80">
              In-memory dictionary stores session payloads indefinitely without
              an eviction policy, causing memory creep.
            </p>
          </div>
          <button className="bg-[#0C1707] hover:bg-[#4A612F] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
            Inspect Code
          </button>
        </div>

        {/* Hotspot Item 4 */}
        <div className="bg-[#FAF5EF] p-6 rounded-lg border-l-4 border-yellow-400 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-[#0C1707] text-xl">
                Inefficient JSON serialization
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Low
              </span>
            </div>
            <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2.5 py-1 rounded inline-block mb-2">
              models/base.py:89
            </p>
            <p className="text-base text-[#0C1707]/80">
              Large object graphs are converted to strings sequentially instead
              of streaming chunks.
            </p>
          </div>
          <button className="bg-[#0C1707] hover:bg-[#4A612F] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
            Inspect Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotspots;
