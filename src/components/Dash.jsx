import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const performanceData = [
  { name: "Jan", CTR: 3.2, Impressions: 5000, BounceRate: 40 },
  { name: "Feb", CTR: 4.1, Impressions: 6200, BounceRate: 38 },
  { name: "Mar", CTR: 5.0, Impressions: 7500, BounceRate: 35 },
  { name: "Apr", CTR: 4.7, Impressions: 7000, BounceRate: 37 },
];

const budgetData = [
  { platform: "Google Ads", spend: 5000 },
  { platform: "Facebook Ads", spend: 3000 },
  { platform: "Instagram", spend: 2000 },
  { platform: "LinkedIn", spend: 1500 },
];

const behaviorData = [
  { name: "Returning Customers", value: 65 },
  { name: "New Customers", value: 35 },
];

const marketTrendsData = [
  { name: "SEO", popularity: 78 },
  { name: "PPC", popularity: 65 },
  { name: "Social Media", popularity: 85 },
  { name: "Email Marketing", popularity: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Performance Analytics */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Performance Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="CTR" stroke="#0088FE" />
            <Line type="monotone" dataKey="Impressions" stroke="#00C49F" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Budget Allocation */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Budget Allocation</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={budgetData} dataKey="spend" nameKey="platform" outerRadius={100}>
              {budgetData.map((entry, index) => (
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
            <Pie data={behaviorData} dataKey="value" nameKey="name" outerRadius={100}>
              {behaviorData.map((entry, index) => (
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
          <BarChart data={marketTrendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="popularity" fill="#FFBB28" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white p-4 rounded-xl shadow-md col-span-1 md:col-span-2 lg:col-span-3">
        <h2 className="text-xl font-semibold mb-2">AI Recommendations</h2>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Optimize your PPC campaigns based on peak engagement hours.</li>
          <li>Increase social media presence as trends show high engagement.</li>
          <li>Personalize email marketing for better conversions.</li>
          <li>Reduce bounce rate by improving landing page experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;