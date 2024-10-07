const DonationFilters = () => {
    return (
      <div className="bg-gray-900 p-6 rounded-lg mb-6 text-white">
        <h3 className="text-lg font-bold mb-4">Filters</h3>
  
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Filter by Category</label>
          <select className="w-full p-2 bg-gray-700 text-white rounded-lg">
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Filter by Location</label>
          <input
            type="text"
            placeholder="City or Region"
            className="w-full p-2 bg-gray-700 text-white rounded-lg"
          />
        </div>
  
        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
          Apply Filters
        </button>
      </div>
    );
  };
  
  export default DonationFilters;
  