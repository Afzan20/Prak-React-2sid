import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Sidebar({ activeMenu, setActiveMenu }) {

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/",
      icon: <FaTachometerAlt className="mr-4 text-xl" />,
    },
    {
      id: "orders",
      label: "Orders",
      path: "/orders",
      icon: <FaShoppingCart className="mr-4 text-xl" />,
    },
    {
      id: "customers",
      label: "Customers",
      path: "/customers",
      icon: <FaUsers className="mr-4 text-xl" />,
    },
  ];

  return (
    <div className="flex min-h-screen w-[320px] flex-col bg-white p-10 shadow-lg dark:bg-gray-900">

      {/* LOGO */}
      <div className="flex flex-col">
        <span className="text-[48px] font-extrabold leading-tight text-gray-900 dark:text-white">
          Sedap<b className="text-green-500">.</b>
        </span>

        <p className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </p>
      </div>

      {/* MENU */}
      <div className="mt-10">
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                onClick={() => setActiveMenu(item.id)}
                className={`flex items-center rounded-xl p-4 font-medium transition-all duration-200 ${
                  activeMenu === item.id
                    ? "bg-green-100 text-green-600 font-bold"
                    : "text-gray-600 hover:bg-green-100 hover:text-green-600"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* FOOTER */}
      <div className="mt-auto pt-10">
        <span className="block text-sm font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>

        <p className="text-sm text-gray-400">
          © 2025 All Right Reserved
        </p>
      </div>

    </div>
  );
}