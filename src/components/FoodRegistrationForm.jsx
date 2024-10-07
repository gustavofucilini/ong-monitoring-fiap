const FoodRegistrationForm = () => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl text-white font-bold mb-6">Food #34562</h2>
  
        <form>
          <div className="mb-4">
            <label className="block text-gray-400">Food Name</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              placeholder="Tomato, Potato, Rice"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400">Quantity</label>
            <input
              type="number"
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              placeholder="0"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400">Expiration Date</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              placeholder="MM/YYYY"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400">Type of Food</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              placeholder="Vegetal, fruit, ..."
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-400">Additional Description</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded-lg text-white"
              placeholder="Vegetal, fruit, ..."
            />
          </div>
  
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Register Food
          </button>
        </form>
      </div>
    );
  };
  
  export default FoodRegistrationForm;
  