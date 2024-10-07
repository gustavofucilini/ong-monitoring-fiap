const FoodItem = ({ name, quantity, image }) => {
    return (
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <img src={image} alt={name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
        <h3 className="text-white text-lg">{name}</h3>
        <p className="text-gray-400">{quantity} Bowls available</p>
      </div>
    );
  };
  
  export default FoodItem;
  