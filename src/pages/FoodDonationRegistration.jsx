import { useState } from 'react';
import FoodList from '../components/FoodList';
import FoodRegistrationForm from '../components/FoodRegistrationForm';

const FoodDonationRegistration = () => {
  const [foodItems, setFoodItems] = useState([
    { name: 'Tomato', quantity: 20, image: '/src/assets/images/tomato.png' },
    { name: 'Rice', quantity: 11, image: '/src/assets/images/rice.png' },
    { name: 'Potato', quantity: 16, image: '/src/assets/images/potato.png' },
  ]);

  const handleAddFood = (newFood) => {
    setFoodItems([...foodItems, { ...newFood, id: Date.now() }]);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-900 text-white">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Food Donation Registration</h1>
          <p className="text-gray-400">Tuesday, 2 Feb 2024</p>
        </header>

        <FoodList foodItems={foodItems} />
      </div>

      <div className="w-1/3 p-6 bg-gray-800">
        <FoodRegistrationForm onSubmit={handleAddFood} />
      </div>
    </div>
  );
};

export default FoodDonationRegistration;
