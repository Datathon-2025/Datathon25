import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { BarChart } from "lucide-react"; // Replace with appropriate icon
import { handleStyles, nodeStyles } from "../../styles/nodeStyles";

export default function PlatformMetricsNode({ data }: NodeProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Handle
          type="target"
          position={Position.Left}
          className={handleStyles.source}
        />
        <div className={nodeStyles.startNode}>
          <BarChart className="h-6 w-6 text-primary-500" />
        </div>
        <Handle
          type="source"
          position={Position.Right}
          className={handleStyles.source}
        />
      </div>
    </div>
  );
}
