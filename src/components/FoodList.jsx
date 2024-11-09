import FoodItem from './FoodItem';

const FoodList = ({ foodItems }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {foodItems.map((item) => (
        <FoodItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default FoodList;
