export default function Canvas() {
  return (
    <div><h1>canvas</h1></div>
  )
}




// import { useCallback } from 'react';
// import ReactFlow, {
//   Background,
//   Controls,
//   MiniMap,
//   Connection,
//   addEdge,
//   useNodesState,
//   useEdgesState,
//   ReactFlowProvider,
// } from 'reactflow';
// import 'reactflow/dist/style.css';
//
// const MarketingNode = ({ data }) => {
//   return (
//     <div className="px-4 py-2 shadow-lg rounded-md bg-white border-2 border-blue-500 min-w-[150px]">
//       <div className="font-bold text-sm">{data.label}</div>
//       <div className="text-xs text-gray-500">{data.description}</div>
//     </div>
//   );
// };
//
// const nodeTypes = {
//   marketingNode: MarketingNode,
// };
//
// const initialNodes = [
//   {
//     id: '1',
//     type: 'marketingNode',
//     position: { x: 100, y: 100 },
//     data: { label: 'Data Collector', description: 'Collects marketing data' }
//   },
// ];
//
// export default function WorkflowCanvas() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//
//   const onConnect = useCallback(
//     (connection) => {
//       const newEdge = { ...connection, type: 'smoothstep' };
//       setEdges((eds) => addEdge(newEdge, eds));
//     },
//     [setEdges]
//   );
//
//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//
//       const type = event.dataTransfer.getData('application/reactflow');
//       const position = {
//         x: event.clientX - 250,
//         y: event.clientY - 100,
//       };
//
//       const newNode = {
//         id: `${type}-${Date.now()}`,
//         type: 'marketingNode',
//         position,
//         data: {
//           label: type.charAt(0).toUpperCase() + type.slice(1),
//           description: `${type} description`
//         },
//       };
//
//       setNodes((nds) => [...nds, newNode]);
//     },
//     []
//   );
//
//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);
//
//   return (
//     <div className="h-screen w-full">
//       <ReactFlowProvider>
//         <div className="h-full" onDrop={onDrop} onDragOver={onDragOver}>
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             nodeTypes={nodeTypes}
//             fitView
//             className="bg-gray-50"
//           >
//             <Background />
//             <Controls />
//             <MiniMap />
//           </ReactFlow>
//           <Sidebar />
//         </div>
//       </ReactFlowProvider>
//     </div>
//   );
// }
//
// function Sidebar() {
//   const onDragStart = (event, nodeType) => {
//     event.dataTransfer.setData('application/reactflow', nodeType);
//     event.dataTransfer.effectAllowed = 'move';
//   };
//
//   const nodeTypes = [
//     { type: 'dataCollector', label: 'Data Collector' },
//     { type: 'analytics', label: 'Analytics' },
//     { type: 'campaign', label: 'Campaign' },
//     { type: 'audience', label: 'Audience' },
//     { type: 'budget', label: 'Budget' },
//     { type: 'reporting', label: 'Reporting' }
//   ];
//
//   return (
//     <div className="absolute left-4 top-4 bg-white p-4 rounded-lg shadow-lg">
//       <div className="font-bold mb-4">Marketing Nodes</div>
//       <div className="space-y-2">
//         {nodeTypes.map((node) => (
//           <div
//             key={node.type}
//             draggable
//             onDragStart={(e) => onDragStart(e, node.type)}
//             className="bg-gray-50 p-2 rounded cursor-move hover:bg-gray-100 transition-colors"
//           >
//             {node.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
