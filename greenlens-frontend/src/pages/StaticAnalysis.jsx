import React from "react";

const StaticAnalysis = () => {
  return (
    <div className="flex-1 bg-[#FAF5EF] flex flex-col p-10 overflow-y-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-[#0C1707] mb-2">
          Static Analysis
        </h2>
        <p className="text-[#0C1707]/60 text-lg font-medium">
          Powered by Python AST & Ruff
        </p>
      </div>

      {/* Summary Metrics - Strict Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#EBE5D9] p-6 rounded-xl border border-black/5 shadow-sm">
          <p className="text-sm text-[#0C1707]/70 font-bold mb-2">
            Files Scanned
          </p>
          <p className="text-4xl font-extrabold text-[#0C1707]">42</p>
        </div>
        <div className="bg-[#EBE5D9] p-6 rounded-xl border border-black/5 shadow-sm">
          <p className="text-sm text-[#0C1707]/70 font-bold mb-2">
            Lines of Code
          </p>
          <p className="text-4xl font-extrabold text-[#0C1707]">12,450</p>
        </div>
        <div className="bg-[#EBE5D9] p-6 rounded-xl border border-black/5 shadow-sm">
          <p className="text-sm text-[#0C1707]/70 font-bold mb-2">
            AST Nodes Parsed
          </p>
          <p className="text-4xl font-extrabold text-[#0C1707]">89,201</p>
        </div>

        {/* Fixed Inefficiencies Box using standard Tailwind Red */}
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
          <p className="text-sm text-red-600 font-bold mb-2">
            Inefficiencies Found
          </p>
          <p className="text-4xl font-extrabold text-red-700">18</p>
        </div>
      </div>

      {/* Main Content - Strict 50/50 Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Detected Patterns List */}
        <div className="bg-[#EBE5D9] p-8 rounded-xl border border-black/5 shadow-sm">
          <h3 className="text-2xl font-bold text-[#0C1707] mb-6 flex items-center">
            {/* Hardcoded pixel size to prevent the SVG from ever blowing up again */}
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Detected Code Patterns
          </h3>

          <div className="space-y-4">
            <div className="bg-[#FAF5EF] p-5 rounded-lg border-l-4 border-red-500 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="font-bold text-[#0C1707] text-lg">
                  N+1 Database Query Pattern
                </span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  High Impact
                </span>
              </div>
              <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2 py-1 rounded inline-block mb-3">
                api/users/analytics.py:42
              </p>
              <p className="text-base text-[#0C1707]/80">
                Loop contains database call. Causes high latency and energy
                drain at scale.
              </p>
            </div>

            <div className="bg-[#FAF5EF] p-5 rounded-lg border-l-4 border-orange-400 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="font-bold text-[#0C1707] text-lg">
                  Nested Iteration O(N²)
                </span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Medium
                </span>
              </div>
              <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2 py-1 rounded inline-block mb-3">
                services/report_gen.py:118
              </p>
              <p className="text-base text-[#0C1707]/80">
                Inefficient array traversal. Consider vectorization or list
                comprehensions.
              </p>
            </div>

            <div className="bg-[#FAF5EF] p-5 rounded-lg border-l-4 border-yellow-400 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="font-bold text-[#0C1707] text-lg">
                  Unnecessary Object Instantiation
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Low
                </span>
              </div>
              <p className="text-sm font-mono text-[#0C1707]/80 bg-[#EBE5D9] px-2 py-1 rounded inline-block mb-3">
                utils/formatters.py:34
              </p>
              <p className="text-base text-[#0C1707]/80">
                Object is created inside a loop but never modified. Move outside
                the loop.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Code Inspector Mockup (Using Standard Tailwind colors for safety) */}
        <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border border-black/20 text-gray-300 font-mono text-sm flex flex-col">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400 font-semibold tracking-wide">
              api/users/analytics.py
            </span>
          </div>

          <div className="flex-1 overflow-x-auto">
            <pre className="leading-loose whitespace-pre-wrap break-words text-base">
              <code>
                <span className="text-gray-500 mr-4">40 |</span>
                <span className="text-blue-400 font-bold">def</span>{" "}
                <span className="text-yellow-300">generate_user_report</span>
                (user_ids):
                <br />
                <span className="text-gray-500 mr-4">41 |</span> report_data =
                []
                <br />
                <span className="text-gray-500 mr-4">42 |</span>{" "}
                <span className="text-pink-400 font-bold">for</span> uid{" "}
                <span className="text-pink-400 font-bold">in</span> user_ids:
                <br />
                <div className="bg-red-900/40 block border-l-4 border-red-500 w-full py-1 mb-1">
                  <span className="text-gray-500 mr-4 ml-2">43 |</span>{" "}
                  <span className="text-green-400 italic">
                    # Warning: N+1 Query Detected
                  </span>
                </div>
                <div className="bg-red-900/40 block border-l-4 border-red-500 w-full py-1 mb-1">
                  <span className="text-gray-500 mr-4 ml-2">44 |</span> user =
                  db.query(User).filter_by(id=uid).first()
                </div>
                <span className="text-gray-500 mr-4">45 |</span>{" "}
                report_data.append(user.serialize())
                <br />
                <span className="text-gray-500 mr-4">46 |</span>{" "}
                <span className="text-pink-400 font-bold">return</span>{" "}
                report_data
              </code>
            </pre>
          </div>

          <div className="mt-6 p-4 bg-red-950/50 border border-red-600/50 rounded-lg text-red-200 text-base leading-relaxed w-full shadow-inner">
            <strong className="text-red-400 block mb-2 text-lg">
              Ruff Analysis:
            </strong>
            Line 44 - Database call inside loop. Refactor to use: <br />
            <code className="bg-black/50 px-2 py-1 rounded text-red-100 mt-2 block border border-red-900">
              db.query(User).filter(User.id.in_(user_ids)).all()
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticAnalysis;
