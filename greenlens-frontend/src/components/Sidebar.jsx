import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // This function automatically styles the active tab vs inactive tabs
  const navClass = ({ isActive }) =>
    isActive
      ? "flex items-center px-6 py-3.5 bg-olive text-white font-semibold rounded-r-2xl mr-4 shadow-sm"
      : "flex items-center px-6 py-3.5 hover:bg-olive/20 hover:text-white transition-colors text-cream rounded-r-2xl mr-4 font-medium";

  return (
    <div className="w-64 bg-onyx flex flex-col h-full border-r border-black/20">
      {/* Brand Header */}
      <div className="p-6 flex items-center mb-2 mt-2">
        <svg
          className="w-7 h-7 text-matcha mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          GreenLens
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-2">
        <ul className="space-y-1">
          <li>
            <NavLink to="/" className={navClass}>
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Overview
            </NavLink>
          </li>

          <li>
            <NavLink to="/static-analysis" className={navClass}>
              <span className="font-bold mr-4 text-lg">{"<>"}</span>
              Static Analysis
            </NavLink>
          </li>

          <li>
            <NavLink to="/runtime-profile" className={navClass}>
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              Runtime Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/hotspots" className={navClass}>
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Hotspots
            </NavLink>
          </li>

          <li>
            <NavLink to="/ai-recommendations" className={navClass}>
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              AI Recommendations
            </NavLink>
          </li>

          <li>
            <NavLink to="/before-after" className={navClass}>
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              Before / After
            </NavLink>
          </li>

          <li>
            <NavLink to="/reports" className={navClass}>
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
