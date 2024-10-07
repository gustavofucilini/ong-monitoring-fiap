import { NavLink } from "react-router-dom";
import {
  Home,
  Store,
  Settings,
  PieChart,
  LogOut,
  Map,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-20 bg-gray-900 text-white flex flex-col justify-between py-4 items-center">
      <div className="flex flex-col space-y-8 items-center">
        <NavLink
          to="/food-donation"
          className={({ isActive }) =>
            `p-2 rounded-lg ${
              isActive
                ? "bg-gray-600 text-orange-400"
                : "bg-gray-700 hover:bg-gray-600"
            }`
          }
        >
          <Store className="w-6 h-6" />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-lg ${
              isActive
                ? "bg-gray-600 text-orange-400"
                : "bg-gray-700 hover:bg-gray-600"
            }`
          }
        >
          <Home className="w-6 h-6" />
        </NavLink>

        <NavLink
          to="/ongs-monitoring"
          className={({ isActive }) =>
            `p-2 rounded-lg ${
              isActive
                ? "bg-gray-600 text-orange-400"
                : "bg-gray-700 hover:bg-gray-600"
            }`
          }
        >
          <PieChart className="w-6 h-6" />
        </NavLink>

        <NavLink
          to="/distribution-map"
          className={({ isActive }) =>
            `p-2 rounded-lg ${
              isActive
                ? "bg-gray-600 text-orange-400"
                : "bg-gray-700 hover:bg-gray-600"
            }`
          }
        >
          <Map className="w-6 h-6" />
        </NavLink>
      </div>

      <div className="flex flex-col space-y-4 items-center">
        <NavLink className={`p-2 rounded-lg  'bg-gray-700 hover:bg-gray-600`}>
          <Settings className="w-6 h-6" />
        </NavLink>

        <NavLink className={`p-2 rounded-lg  'bg-gray-700 hover:bg-gray-600`}>
          <LogOut className="w-6 h-6" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
