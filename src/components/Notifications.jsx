import PropTypes from "prop-types";

const Notifications = ({ notifications }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">Notifications</h3>
      <ul className="space-y-2">
        {notifications.map((notification, index) => (
          <li key={index} className="text-sm text-gray-700">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Notifications;