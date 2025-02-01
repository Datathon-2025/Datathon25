import PropTypes from "prop-types";

const KPIMetrics = ({ title, value, change, changeType }) => {
  const changeClass = changeType === "increase" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
      <p className={`text-sm ${changeClass}`}>{change}</p>
    </div>
  );
};

KPIMetrics.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  changeType: PropTypes.oneOf(["increase", "decrease"]).isRequired,
};

export default KPIMetrics;