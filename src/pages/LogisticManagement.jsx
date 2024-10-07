import Widget from "../components/Widget";
import DonationsReport from "../components/DonationsReport";
import RecentDonations from "../components/RecentOrders";

const LogisticManagement = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full bg-gray-900 text-white">
      <header className="flex justify-between items-center p-6 mb-8 w-full">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400">Tuesday 2 Feb, 2021</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 mb-8 w-full">
        <Widget
          title="Total Funds"
          value="$10,243.00"
          percentage="32.40%"
          status="up"
        />
        <Widget
          title="Total Food Registered"
          value="23,456"
          percentage="-12.40%"
          status="down"
        />
        <Widget
          title="Total Donators"
          value="1,234"
          percentage="2.40%"
          status="up"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full p-6 w-full">
        <div className="md:col-span-2 bg-gray-800 p-4 rounded-lg h-full w-full">
          <DonationsReport />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg space-y-6 h-full w-full">
          <RecentDonations />
        </div>
      </div>
    </div>
  );
};

export default LogisticManagement;
