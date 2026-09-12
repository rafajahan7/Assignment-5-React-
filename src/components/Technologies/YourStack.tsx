import React from "react";
import type { ITech } from "../../types/Types";

interface YourStackProps {
  selectedTechs: ITech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {

  return (
    <aside className="card bg-base-100 border border-gray-200 rounded-xl shadow-none h-fit">

      <div className="card-body p-3">

        <h2 className="text-sm font-bold text-slate-900">
          Your Stack
        </h2>


        <p className="text-[8px] text-gray-400 -mt-1">

          {selectedTechs.length}

          {selectedTechs.length === 1
            ? " Technology Selected"
            : " Technologies Selected"
          }

        </p>


        {selectedTechs.length === 0 ? (

          <div className="flex justify-center items-center py-10">

            <p className="text-[9px] text-gray-400 text-center leading-4">
              No technologies selected yet.
              <br />
              Add technologies to build your stack.
            </p>

          </div>

        ) : (

          <div className="flex flex-col gap-2 mt-2">

            {selectedTechs.map((tech) => (

              <div
                key={tech.id}
                className="flex items-center gap-2 border border-gray-100 rounded-lg p-2"
              >

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain"
                />


                <div className="flex-1">

                  <p className="text-[9px] font-semibold text-slate-800">
                    {tech.name}
                  </p>

                  <p className="text-[7px] text-gray-400">
                    {tech.category}
                  </p>

                </div>

                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-300 hover:text-red-500 text-sm"
                >
                  ✕
                </button>

              </div>

            ))}

          </div>

        )}


        {/* Remove All */}
        <button
          onClick={onRemoveAll}
          disabled={selectedTechs.length === 0}
          className=" btn btn-xs w-full h-7 min-h-7 mt-4 text-[8px] text-red-500 bg-white hover:bg-red-50 border border-red-200 ">
          Remove All
        </button>

      </div>

    </aside>
  );
};

export default YourStack;