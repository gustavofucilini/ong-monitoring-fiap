import DistributionMap from '../components/DistributionMap';
import DonationFilters from '../components/DonationFilters';

const DistributionMapScreen = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-900 text-white">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Distribution Map</h1>
          <p className="text-gray-400">See where donations are distributed</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <DonationFilters />
          </div>

          <div className="md:col-span-2 h-[500px] md:h-full">
            <DistributionMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionMapScreen;
