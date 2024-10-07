const DonationsReport = () => {
    const data = [
      { customer: "Eren Jaegar", menu: "Spicy seasoned seafood noodles", status: "Completed" },
      { customer: "Reiner Braun", menu: "Salted Pasta with mushroom sauce", status: "Preparing" },
      { customer: "Levi Ackerman", menu: "Beef dumpling in hot and sour soup", status: "Pending" },
    ];
  
    const statusStyles = {
      Completed: "bg-green-500",
      Preparing: "bg-blue-500",
      Pending: "bg-orange-500",
    };
  
    return (
      <div className="bg-gray-800 p-4 rounded-lg text-white shadow-md">
        <h3 className="text-lg font-semibold">Donations Report</h3>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left text-gray-400">
              <th>Customer</th>
              <th>Menu</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">{item.customer}</td>
                <td>{item.menu}</td>
                <td>
                  <span className={`px-2 py-1 text-xs rounded-lg ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DonationsReport;
  