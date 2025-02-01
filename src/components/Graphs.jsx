import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const Graphs = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Graphs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      visits: PropTypes.number.isRequired,
      sales: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Graphs;