import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaDrawPolygon } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const onClickLogout = () => {
    localStorage.removeItem("access_token");
  };
  return (
    <nav className="flex justify-between bg-gray-800 p-4">
      <div className="flex gap-16 space-x-4">
        <Link to="/" className="text-white flex items-center space-x-2">
          <FaHome size="24" color="white" />
          <span>Home</span>
        </Link>
        <Link to="/canvas" className="text-white flex items-center space-x-2">
          <FaDrawPolygon size="24" color="white" />
          <span>Canvas</span>
        </Link>
        <Link to="/dashboard" className="text-white flex items-center space-x-2">
          <MdSpaceDashboard size="24" color="white" />
          <span>Dashboard</span>
        </Link>
        <Link to="/campaign" className="text-white flex items-center space-x-2">
          <MdCampaign size="24" color="white" />
          <span>Campaign</span>
        </Link>
      </div>
      <Link to="/" className="text-white flex items-center space-x-2" onClick={onClickLogout}>
        <FiLogOut size="26" color="white" />
        <span >Logout</span>
      </Link>
    </nav>
  );
}
