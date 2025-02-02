import React, { useState, useEffect } from "react";

export default function StatsCard({ campaignData }) {
  const [clicks, setClicks] = useState(0);
  const [impressions, setImpressions] = useState(0);
  const [cpc, setCpc] = useState(0);
  const [cpa, setCpa] = useState(0);

  useEffect(() => {
    if (campaignData.length > 0) {
      const totalClicks = campaignData.reduce((sum, campaign) => sum + campaign.campaign_performance.clicks, 0);
      const totalImpressions = campaignData.reduce((sum, campaign) => sum + campaign.campaign_performance.impressions, 0);
      const totalCost = campaignData.reduce((sum, campaign) => sum + campaign.campaign_performance.cost, 0);
      const totalConversions = campaignData.reduce((sum, campaign) => sum + campaign.campaign_performance.conversions, 0);
      const averageCpc = totalCost / totalClicks;
      const averageCpa = totalCost / (totalConversions || 1); // Avoid division by zero

      setClicks(totalClicks);
      setImpressions(totalImpressions);
      setCpc(averageCpc);
      setCpa(averageCpa);
    }
  }, [campaignData]);

  const stats = [
    { name: 'Number of clicks', value: clicks },
    { name: 'Average CPC', value: cpc.toFixed(2) },
    { name: 'Cost', value: cpa.toFixed(2) },
    { name: 'Impressions', value: impressions },
  ];

  return (
    <div className="bg-gray-900 rounded-lg shadow-md">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="p-4">
              <p className="text-sm font-medium text-gray-400">{stat.name}</p>
              <p className="mt-1 text-3xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
