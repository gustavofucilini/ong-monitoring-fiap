import SettingsMenu from '../components/SettingsMenu';
import DonatedFoodList from '../components/DonatedFoodList';
import { useState } from 'react';
import Donators from '@/components/Donators';
import ONGs from '@/components/ONGs';

const ONGsMonitoring = () => {
  const [selectedItem, setSelectedItem] = useState('Food Management');
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-900 text-white">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">ONGs Monitoring</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <SettingsMenu selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xl text-white font-semibold mb-4">Food Donated History</h2>
            {selectedItem === 'Food Management' && <DonatedFoodList />}
            {selectedItem === 'Donators' && <Donators />}
            {selectedItem === 'ONGs' && <ONGs />}
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Discard Changes
          </button>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ONGsMonitoring;
