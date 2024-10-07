import DonatedFoodItem from './DonatedFoodItem';

const donatedItems = [
  { name: 'Rice', quantity: 20, image: '/src/assets/images/rice.png' },
  { name: 'Beans', quantity: 30, image: '/src/assets/images/beans.png' },
  { name: 'Apple', quantity: 30, image: '/src/assets/images/apple.png' },
];

const DonatedFoodList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {donatedItems.map((item, index) => (
        <DonatedFoodItem key={index} name={item.name} quantity={item.quantity} image={item.image} />
      ))}
    </div>
  );
};

export default DonatedFoodList;
