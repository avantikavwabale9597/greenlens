import React from "react";

const MetricCard = ({ title, value, unit, trend, icon }) => {
  return (
    <div className="bg-[#EBE5D9] p-6 rounded-xl shadow-sm border border-black/5 relative overflow-hidden">
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm text-onyx/70 font-medium">{title}</p>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-4xl font-extrabold text-onyx tracking-tight">
            {value} <span className="text-2xl font-bold">{unit}</span>
          </p>
          {trend && (
            <p className="text-xs text-onyx font-semibold mt-3">
              {trend}{" "}
              <span className="font-normal text-onyx/70">from last run</span>
            </p>
          )}
        </div>

        {/* Icon Circle */}
        <div className="w-14 h-14 bg-parchment rounded-full flex items-center justify-center border border-black/5 shadow-sm">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
