import React from "react";
import { X } from "lucide-react";
import { useWorkflowStore } from "../../stores/workflowStore";
import { useSidebarStore } from "../../stores/sidebarStore";
import { Megaphone, BarChart, Users, DollarSign, TrendingUp, PieChart } from "lucide-react"; // Import appropriate icons

const nodeCategories = [
  {
    name: "Marketing",
    nodes: [
      {
        type: "campaign",
        label: "Campaign",
        icon: Megaphone,
        description: "Represents general campaign data",
      },
      {
        type: "platformMetrics",
        label: "Platform Metrics",
        icon: BarChart,
        description: "Contains metrics like CTR, CPC, CPA, etc.",
      },
      {
        type: "audienceDemographics",
        label: "Audience Demographics",
        icon: Users,
        description: "Stores age, gender, location, etc.",
      },
      {
        type: "budgetAllocation",
        label: "Budget Allocation",
        icon: DollarSign,
        description: "Manages daily spend, cumulative spend, ROI",
      },
      {
        type: "marketTrends",
        label: "Market Trends",
        icon: TrendingUp,
        description: "Handles keyword performance and benchmarks",
      },
      {
        type: "analysis",
        label: "Analysis",
        icon: PieChart,
        description: "Allows operations like filtering, aggregating, and calculating insights",
      },
    ],
  },
];

export default function NodeSidebar() {
  const { isOpen, selectedNodeId, closeSidebar } = useSidebarStore();

  const addNodeWithButton = useWorkflowStore(
    (state) => state.addNodeWithButton
  );

  const handleNodeSelect = (type: string) => {
    if (selectedNodeId) {
      const newNode = {
        id: `${selectedNodeId}`,
        type,
        position: { x: 0, y: 0 },
        data: {
          label: `New ${type}`,
          description: `Description for ${type}`,
        },
      };
      addNodeWithButton(newNode, selectedNodeId);
      closeSidebar();
    }
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
    >
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold">Add Node</h2>
          <button
            onClick={closeSidebar}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {nodeCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {category.name}
              </h3>
              <div className="space-y-2">
                {category.nodes.map((node) => (
                  <button
                    key={node.type}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all duration-200 text-left"
                    onClick={() => handleNodeSelect(node.type)}
                  >
                    <div className="flex items-center gap-3">
                      <node.icon className="h-5 w-5 text-primary-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {node.label}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {node.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
