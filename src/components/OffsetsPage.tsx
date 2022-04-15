import { MacroMemory } from "@cnc4me/fanuc-macro-b";
import React from "react";

import WorkCoordinates from "./WorkCoordinates";

export const OffsetsPage: React.FC<{ memory: MacroMemory }> = ({ memory }) => {
  return (
    <div className="container">
      <h1 className="px-2 py-3 text-3xl border-b shadow-neutral-800 bg-neutral-800 border-b-violet-600 text-violet-500">
        Work Coordinates
      </h1>
      <div className="flex flex-col">
        <div className="pb-4 border-t border-t-purple-600">
          <WorkCoordinates memory={memory} />
        </div>
      </div>
    </div>
  );
};