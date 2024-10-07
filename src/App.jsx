import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogisticManagement from "./pages/LogisticManagement";
import Sidebar from "./_navBar";
import FoodDonationRegistration from "./pages/FoodDonationRegistration";
import ONGsMonitoring from "./pages/ONGsMonitoring";
import DistributionMapScreen from "./pages/DistributionMapScreen";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Router>
        <Sidebar />

        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<LogisticManagement />} />
            <Route path="/food-donation" element={<FoodDonationRegistration />} />
            <Route path="/ongs-monitoring" element={<ONGsMonitoring />} />
            <Route path="/distribution-map" element={<DistributionMapScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
