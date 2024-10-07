import FoodItem from './FoodItem';

const foodItems = [
  { name: 'Tomato', quantity: 20, image: '/src/assets/images/tomato.png' },
  { name: 'Rice', quantity: 11, image: '/src/assets/images/rice.png' },
  { name: 'Potato', quantity: 16, image: '/src/assets/images/potato.png' },
];

const FoodList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {foodItems.map((item, index) => (
        <FoodItem key={index} name={item.name} quantity={item.quantity} image={item.image} />
      ))}
    </div>
  );
};

export default FoodList;
