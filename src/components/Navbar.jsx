import { Link } from "react-router-dom";
import { LayoutDashboard, SquarePen, House, Users, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4">
      <div className="flex gap-16 space-x-4">
        <Link to="/" className="text-white flex items-center space-x-2">
          <House size="24" color="white" />
          <span>Home</span>
        </Link>
        <Link to="/canvas" className="text-white flex items-center space-x-2">
          <SquarePen size="24" color="white" />
          <span>Canvas</span>
        </Link>
        <Link to="/dashboard" className="text-white flex items-center space-x-2">
          <LayoutDashboard size="24" color="white" />
          <span>Dashboard</span>
        </Link>
        <Link to="/campaign" className="text-white flex items-center space-x-2">
          <Users size="24" color="white" />
          <span>Campaign</span>
        </Link>
      </div>
      <Link to="/logout" className="text-white flex items-center space-x-2">
        <LogOut size="24" color="white" />
        <span>Logout</span>
      </Link>
    </nav>
  );
}
