import React, { useCallback, useRef, useState, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Connection,
  addEdge,
  useNodesState,
  useEdgesState,
  ReactFlowInstance,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import { useWorkflowStore } from "../../stores/workflowStore";
import { useModalStore } from "../../stores/modalStore";
import NodeSidebar from "./NodeSidebar";
import ExecuteFlowButton from "./ExecuteFlowButton";
import CustomEdge from "./edges/CustomEdge";
import { nodeTypes } from "./nodes"; // Import nodeTypes from index.ts

// Import modal components
import CampaignNodeModal from "../Workflow/nodes/Campaign/CampaignModal.tsx";
import PlatformMetricsNodeModal from "../Workflow/nodes/PlatformMetrics/PlatformMetricsModal.tsx";
import AudienceDemographicsNodeModal from "../Workflow/nodes/AudienceDemographics/AudienceDemographicsModal.tsx";
import BudgetAllocationNodeModal from "../Workflow/nodes/BudgetAllocation/BudgetAllocationModal.tsx";
import MarketTrendsNodeModal from "../Workflow/nodes/MarketTrends/MarketTrendsModal.tsx";
import AnalysisNodeModal from "../Workflow/nodes/Analysis/AnalysisModal.tsx";
import axios from "axios";

const edgeTypes = {
  smoothstep: CustomEdge,
};

// Map node types to their corresponding modal types
const nodeToModalType = {
  start: "start",
  campaign: "campaign",
  platformMetrics: "platformMetrics",
  audienceDemographics: "audienceDemographics",
  budgetAllocation: "budgetAllocation",
  marketTrends: "marketTrends",
  analysis: "analysis",
} as const;

export default function WorkflowCanvas() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const store = useWorkflowStore();
  const openModal = useModalStore((state) => state.openModal);
  const [nodes, setNodes, onNodesChange] = useNodesState(store.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(store.edges);
  const [campaignData, setCampaignData] = useState<any>(null);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await axios.get("http://13.61.152.203:5000/get_campaigns", {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const data = JSON.parse(response.data);
        setCampaignData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchCampaignData();
  }, []);

  const [reactFlowInstance, setReactFlowInstance] =
    React.useState<ReactFlowInstance | null>(null);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = { ...connection, type: "smoothstep" };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowWrapper.current || !reactFlowInstance) {
        return;
      }

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: `${type}-${Date.now()}`,
        type: "custom", // Use custom node type
        position,
        data: {
          label: type === "conditional" ? "If Condition" : `New ${type}`,
          description:
            type === "conditional"
              ? "Define your condition"
              : `Description for ${type}`,
          condition: type === "conditional" ? "value > 0" : undefined,
        },
      };

      store.addNodeWithButton(newNode);
    },
    [reactFlowInstance, store]
  );

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    if (node.type === "replace") return;

    const modalType =
      nodeToModalType[node.type as keyof typeof nodeToModalType];
    if (modalType) {
      openModal(node, modalType);
    } else {
      openModal(node, "edit");
    }
  };

  React.useEffect(() => {
    setNodes(store.nodes);
    setEdges(store.edges);
  }, [store.nodes, store.edges, setNodes, setEdges]);

  return (
    <div ref={reactFlowWrapper} className="h-[92vh] w-full bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={{
          type: "smoothstep",
        }}
        fitView
      >
        <Background gap={12} size={1} color="#94a3b8" />
        <Controls />
        <MiniMap />
        <ExecuteFlowButton />
      </ReactFlow>
      <NodeSidebar />
      <CampaignNodeModal campaignData={campaignData} />
      <PlatformMetricsNodeModal />
      <AudienceDemographicsNodeModal />
      <BudgetAllocationNodeModal />
      <MarketTrendsNodeModal />
      <AnalysisNodeModal />
    </div>
  );
}
