const RecentDonations = () => {
    const donations = [
      { name: "Rice", dishes: "200 food Donated" },
      { name: "Beans", dishes: "120 food Donated" },
      { name: "Apples", dishes: "80 food Donated" },
    ];
  
    return (
      <div className="bg-gray-800 p-4 rounded-lg text-white shadow-md">
        <h3 className="text-lg font-semibold">Recent Donations</h3>
        <ul className="mt-4 space-y-4">
          {donations.map((donation, index) => (
            <li key={index} className="flex justify-between">
              <span>{donation.name}</span>
              <span className="text-gray-400">{donation.dishes}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full text-center bg-orange-400 py-2 rounded-lg hover:bg-orange-500">
          View All
        </button>
      </div>
    );
  };
  
  export default RecentDonations;
  