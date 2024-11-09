import React, { useState } from 'react';

const RecentDonations = () => {
  const donations = [
    { name: "Arroz", dishes: "200 food Donated" },
    { name: "Feijão", dishes: "120 food Donated" },
    { name: "Maçãs", dishes: "80 food Donated" },
    { name: "Batatas", dishes: "150 food Donated" },
    { name: "Cenouras", dishes: "90 food Donated" },
    { name: "Leite", dishes: "100 food Donated" },
    { name: "Pão", dishes: "180 food Donated" },
    { name: "Ovos", dishes: "130 food Donated" }
  ];

  const [showAll, setShowAll] = useState(false);

  const displayedDonations = showAll ? donations : donations.slice(0, 3);

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white shadow-md">
      <h3 className="text-lg font-semibold">Recent Donations</h3>
      <ul className="mt-4 space-y-4">
        {displayedDonations.map((donation, index) => (
          <li key={index} className="flex justify-between">
            <span>{donation.name}</span>
            <span className="text-gray-400">{donation.dishes}</span>
          </li>
        ))}
      </ul>
      <button 
        className="mt-4 w-full text-center bg-orange-400 py-2 rounded-lg hover:bg-orange-500"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? 'Show Less' : 'View All'}
      </button>
    </div>
  );
};

export default RecentDonations;
  