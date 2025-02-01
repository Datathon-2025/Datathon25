import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

export interface Port {
  id: string;
  label: string;
  type: 'input' | 'output';
  position?: Position;
  style?: React.CSSProperties;
}

interface BaseNodeProps extends NodeProps {
  icon?: React.ElementType;
  inputs?: Port[];
  outputs?: Port[];
}

const BaseNode: React.FC<BaseNodeProps> = ({
  data,
  icon: Icon,
  inputs = [{ id: 'default', label: '', type: 'input' }],
  outputs = [{ id: 'default', label: '', type: 'output' }],
}) => {
  const getPortPosition = (index: number, total: number) => {
    if (total === 1) return 50;
    if (total === 2) {
      return index === 0 ? 25 : 75;
    }
    const step = 100 / (total + 1);
    return (index + 1) * step;
  };

  return (
    <div className="relative flex flex-col items-center group">
      {inputs.map((input, index) => (
        <div
          key={input.id}
          className="absolute top-0 -left-3 h-full flex flex-col items-center"
          style={{
            top: `${getPortPosition(index, inputs.length)}%`,
            transform: 'translateY(-50%)',
          }}
        >
          <Handle
            id={input.id}
            type="target"
            position={Position.Left}
            className="handle"
            style={input.style}
            isConnectable={true}
          />
        </div>
      ))}

      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border border-gray-200 shadow-sm">
        {Icon && <Icon className="h-6 w-6 text-primary-500" />}
      </div>

      {outputs.map((output, index) => (
        <div
          key={output.id}
          className="absolute top-0 -right-3 h-full flex flex-col items-center"
          style={{
            top: `${getPortPosition(index, outputs.length)}%`,
            transform: 'translateY(-50%)',
          }}
        >
          <Handle
            id={output.id}
            type="source"
            position={Position.Right}
            className="handle"
            style={output.style}
            isConnectable={true}
          />
        </div>
      ))}
    </div>
  );
};

export default BaseNode;
