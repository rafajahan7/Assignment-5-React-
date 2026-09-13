import React from "react";
import type { ITech } from "../../types/Types";

interface TechnologyCardProps {
  tech: ITech;
  isAdded: boolean;
  onAdd: (tech: ITech) => void;
}

const TechnologyCard = ({
  tech,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="card bg-white border border-gray-200 rounded-xl shadow-none">

      <div className="card-body p-3">

        <div className="flex items-start justify-between h-7">

          <img
            src={tech.icon}
            alt={tech.name}
            className="w-7 h-7 object-contain"
          />

          <span className="badge badge-outline text-[8px] h-5 px-2">
            {tech.badge}
          </span>

        </div>

        <h2 className="text-sm font-bold text-slate-900 mt-1">
          {tech.name}
        </h2>

        <p className="text-[9px] leading-3.5 text-gray-400 min-h-[38px]">
          {tech.description}
        </p>

        <div className="flex items-center gap-1.5 mt-1">

          <span className="badge badge-ghost text-[7px] h-5 px-2">
            {tech.category}
          </span>

          <span className="badge badge-ghost text-[7px] h-5 px-2">
            {tech.difficulty}
          </span>

          <span className="ml-auto text-[8px] text-gray-500">
            <span className="text-yellow-400">
              ★
            </span>{" "}
            {tech.rating}
          </span>

        </div>

        <div className="card-actions mt-1">

          <button
            onClick={() => onAdd(tech)}
            disabled={isAdded}
            className={`
              btn btn-xs w-full h-7 min-h-7 text-[9px] font-medium border-none
              ${
                isAdded
                  ? "bg-green-100 text-green-600"
                  : "bg-slate-900 hover:bg-slate-800 text-white"
              }
            `}
          >
            {isAdded
              ? "✓ Added to Stack"
              : "Add to Stack"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default TechnologyCard;