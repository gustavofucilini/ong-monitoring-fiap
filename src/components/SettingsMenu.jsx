const SettingsMenu = () => {
    const menuItems = [
      { name: 'ONGs', description: 'ONGs list' },
      { name: 'Donators', description: 'Manage your donators, etc' },
      { name: 'Food Management', description: 'Manage your product, pricing, etc' },
    ];
  
    return (
      <div className="bg-gray-900 text-white rounded-lg p-6 space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer ${item.name === 'Food Management' ? 'bg-orange-500' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default SettingsMenu;
  