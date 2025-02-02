import React from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { Megaphone } from "lucide-react"; // Replace with appropriate icon
import { handleStyles, nodeStyles } from "../../styles/nodeStyles";


export default function CampaignNode({ data }: NodeProps) {
    console.log("DATA:" , data);
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className={nodeStyles.data}>
                  <div>Platform Metrics</div>
                  <div>
                      {
                          data?.apiResponse?.campaign_insights?.campaign_name
                      }
                  </div>
                  <div>
                        {
                          Object.keys(data?.apiResponse?.campaign_insights?.campaign_performance).map((key) => {
                                return (
                                    <div>
                                        {key}: {data?.apiResponse?.campaign_insights?.campaign_performance[key]}
                                    </div>
                                )
                            })
                        }
                  </div>
        </div>
      </div>
    </div>
  );
}
