import { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Activity, DollarSign, Users, ShoppingCart } from "lucide-react";
import KPIMetrics from "../components/KPIMetrics";
import Graphs from "../components/Graphs";
import QuickActions from "../components/QuickActions";
import Notifications from "./NotificationsIcon";

// Mock data for the chart
const chartData = [
  { name: "Jan", visits: 4000, sales: 2400 },
  { name: "Feb", visits: 3000, sales: 1398 },
  { name: "Mar", visits: 2000, sales: 9800 },
  { name: "Apr", visits: 2780, sales: 3908 },
  { name: "May", visits: 1890, sales: 4800 },
  { name: "Jun", visits: 2390, sales: 3800 },
];

// Mock data for recent activities
const recentActivities = [
  { id: 1, action: "New sale", amount: "$250", customer: "John Doe" },
  { id: 2, action: "New customer", amount: null, customer: "Jane Smith" },
  { id: 3, action: "Refund processed", amount: "$50", customer: "Bob Johnson" },
];

// Mock data for notifications
const notifications = [
  "Campaign A is underperforming.",
  "Optimize budget for Campaign B.",
  "New recommendation available for Campaign C.",
];

function SummaryCard({ title, value, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export function Dash() {
  const [dateRange, setDateRange] = useState("7d");

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Marketing Dashboard</h1>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          title="Total Revenue"
          value="$54,231"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <SummaryCard title="Visitors" value="2,345" icon={<Users className="h-4 w-4 text-muted-foreground" />} />
        <SummaryCard
          title="Total Sales"
          value="1,234"
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        />
        <SummaryCard
          title="Conversion Rate"
          value="2.3%"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <KPIMetrics title="CTR" value="1.5%" change="+0.2%" changeType="increase" />
        <KPIMetrics title="Conversion Rate" value="2.3%" change="-0.1%" changeType="decrease" />
        <KPIMetrics title="ROI" value="150%" change="+10%" changeType="increase" />
        <KPIMetrics title="Ad Spend" value="$10,000" change="+5%" changeType="increase" />
        <KPIMetrics title="Engagement" value="75%" change="+3%" changeType="increase" />
      </div>

      <Graphs data={chartData} />

      <QuickActions />

      <Notifications notifications={notifications} />
    </div>
  );
}

export default Dash;