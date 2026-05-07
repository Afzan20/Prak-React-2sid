import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./layouts/Sidebar";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* CONTENT */}
      <div className="flex-1 p-5">

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;