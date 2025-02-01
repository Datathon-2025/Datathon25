import CampaignNode from "../nodes/Campaign/CampaignNode.tsx";
import PlatformMetricsNode from "../nodes/PlatformMetrics/PlatformMetricsNode.tsx";
import AudienceDemographicsNode from "../nodes/AudienceDemographics/AudienceDemographicsNode.tsx";
import BudgetAllocationNode from "../nodes/BudgetAllocation/BudgetAllocationNode.tsx";
import MarketTrendsNode from "../nodes/MarketTrends/MarketTrendsNode.tsx";
import AnalysisNode from "../nodes/Analysis/AnalysisNode.tsx";
import StartNode from "../nodes/Start/StartNode.tsx";
import ReplaceNode from "../nodes/Replace/ReplaceNode.tsx";

export const nodeTypes = {
  start: StartNode,
  replace: ReplaceNode,
  campaign: CampaignNode,
  platformMetrics: PlatformMetricsNode,
  audienceDemographics: AudienceDemographicsNode,
  budgetAllocation: BudgetAllocationNode,
  marketTrends: MarketTrendsNode,
  analysis: AnalysisNode,
};
