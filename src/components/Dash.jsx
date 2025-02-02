import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import StatsCard from "./StatsCard";
import CampaignCard from "./CampaignCard";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const generateSyntheticData = () => {
  return [
    {
      campaign_name: "Campaign #1",
      campaign_id: "22144159181",
      campaign_start_date: "2025-01-22",
      campaign_end_date: "2025-02-02",
      campaign_performance: {
        clicks: 266,
        impressions: 683,
        ctr: 0.389458,
        average_cpc: 5.4725,
        cost: 1456.177703,
        conversions: 10,
        conversion_rate: 0.05,
        cpa: 145.6177703,
        roas: 2.5,
      },
    },
    {
      campaign_name: "Campaign #2",
      campaign_id: "22144159182",
      campaign_start_date: "2025-01-23",
      campaign_end_date: "2025-02-03",
      campaign_performance: {
        clicks: 300,
        impressions: 800,
        ctr: 0.375,
        average_cpc: 4.5,
        cost: 1350,
        conversions: 15,
        conversion_rate: 0.05,
        cpa: 90,
        roas: 3.0,
      },
    },
    {
      campaign_name: "Campaign #3",
      campaign_id: "22144159183",
      campaign_start_date: "2025-01-24",
      campaign_end_date: "2025-02-04",
      campaign_performance: {
        clicks: 400,
        impressions: 1000,
        ctr: 0.4,
        average_cpc: 6.0,
        cost: 2400,
        conversions: 20,
        conversion_rate: 0.05,
        cpa: 120,
        roas: 2.0,
      },
    },
  ];
};

const Dash = () => {
  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    const fetchCampaignData = async () => {
      try {
        const response = await axios.get("http://13.61.152.203:5000/get_campaigns");
        setCampaignData(response.data);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
        // Use synthetic data in case of error
        setCampaignData(generateSyntheticData());
      }
    };

    fetchCampaignData();
  }, []);

  return (
    <>
      <div className="p-4">
        <StatsCard />
      </div>
      <div className="p-4 rounded-xl shadow-md">
        <CampaignCard />
      </div>
      <div className="p-6 bg-gray-100 min-h-screen grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Performance Analytics */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Performance Analytics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={campaignData.map(campaign => ({
                name: campaign.campaign_name,
                CTR: campaign.campaign_performance.ctr,
                Impressions: campaign.campaign_performance.impressions,
                Clicks: campaign.campaign_performance.clicks,
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CTR" stroke="#0088FE" />
                <Line type="monotone" dataKey="Impressions" stroke="#00C49F" />
                <Line type="monotone" dataKey="Clicks" stroke="#FF8042" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Budget Allocation */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Budget Allocation</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={campaignData.map(campaign => ({
                  platform: campaign.campaign_name,
                  spend: campaign.campaign_performance.cost,
                }))} dataKey="spend" nameKey="platform" outerRadius={100}>
                  {campaignData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Customer Behavior Analysis */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Customer Behavior</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={campaignData.map(campaign => ({
                  name: campaign.campaign_name,
                  value: campaign.campaign_performance.conversions,
                }))} dataKey="value" nameKey="name" outerRadius={100}>
                  {campaignData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Market Trends */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Market Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignData.map(campaign => ({
                name: campaign.campaign_name,
                popularity: campaign.campaign_performance.impressions,
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="popularity" fill="#FFBB28" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white p-4 rounded-xl shadow-md lg:col-span-1 h-auto max-h-92 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">AI Recommendations</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Optimize your PPC campaigns based on peak engagement hours.</li>
            <li>Increase social media presence as trends show high engagement.</li>
            <li>Personalize email marketing for better conversions.</li>
            <li>Reduce bounce rate by improving landing page experience.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dash;
