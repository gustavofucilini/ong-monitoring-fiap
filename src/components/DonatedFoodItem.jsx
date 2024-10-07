const DonatedFoodItem = ({ name, quantity, image }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
        <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
        <h3 className="text-white text-lg">{name}</h3>
        <p className="text-gray-400">{quantity}</p>
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
          View Food
        </button>
      </div>
    );
  };
  
  export default DonatedFoodItem;
  