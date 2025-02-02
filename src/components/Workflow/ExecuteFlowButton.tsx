import React from 'react';
import { Play } from 'lucide-react';
import { Panel } from 'reactflow';
import { useWorkflowStore } from '../../stores/workflowStore';
import { executeWorkflow } from '../../utils/apiUtils';

export default function ExecuteFlowButton() {
  const { nodes, edges, campaignData, addNodeWithButton } = useWorkflowStore();
  const [isExecuting, setIsExecuting] = React.useState(false);

  const handleExecute = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      setIsExecuting(true);
      const response = await executeWorkflow({ nodes, edges, campaignData });

      if (!response) {
        throw new Error('Empty response from API');
      }

      const campaign = nodes.find((node) => node.type === 'campaign');
      const platformMetrics = nodes.find(
        (node) => node.type === 'platformMetrics'
      );

      const newNodeId = `data-${Date.now()}`;

      if (!campaign || !platformMetrics) {
        throw new Error('Campaign and Platform Metrics nodes are required');
      }
      
      const newPosition = {
        x: campaign.position.x + 100,
        y: platformMetrics.position.y + 100,
      };

      const newNode = {
        id: newNodeId,
        type: "data",
        position: newPosition,
        data: {
          label: `API Response`,
          description: `Workflow execution results`,
          apiResponse: response // Store the complete response
        },
      };

      addNodeWithButton(newNode);
  
    } catch (error) {
      console.error('Failed to execute workflow:', error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <Panel position="bottom-center">
      <button
        onClick={handleExecute}
        disabled={isExecuting}
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="w-5 h-5" />
        {isExecuting ? 'Executing...' : 'Execute Flow'}
      </button>
    </Panel>
  );
}
