import { Node, Edge } from 'reactflow';

interface WorkflowPayload {
  nodes: Node[];
  edges: Edge[];
  campaignData: any;
}

export async function executeWorkflow(payload: WorkflowPayload): Promise<any> {
  console.log('Executing workflow:', payload);
  const campaign = payload.nodes.find((node) => node.type === 'campaign');
  const platformMetrics = payload.nodes.find(
    (node) => node.type === 'platformMetrics'
  );
  console.log('Campaign:', campaign);
  console.log('Platform Metrics:', platformMetrics);
  if (!campaign || !platformMetrics) {
    throw new Error('Campaign and Platform Metrics nodes are required');
  }
  const edge = payload.edges.find(
    (edge) => edge.source === campaign.id && edge.target === platformMetrics.id
  );
  console.log('Edge:', edge);
  if (!edge) {
    throw new Error('Campaign and Platform Metrics nodes must be connected');
  }

  try {
    const response = await fetch("http://13.61.152.203:8000/google_metrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload.campaignData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to execute workflow');
    }
    const result = await response.text();
    const resultObj = JSON.parse(result);
    const resultObj2 = JSON.parse(resultObj);
    console.log("Result2:", resultObj2);
    return resultObj2;

  } catch (error) {
    console.error("Error submitting form:", error);
  }

  // const response = await fetch('http://localhost:3000/api/workflows/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(payload),
  // });

  
}