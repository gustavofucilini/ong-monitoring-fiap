const Widget = ({ title, value, percentage, status }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg text-white shadow-md">
        <h3 className="text-sm text-gray-400">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-semibold">{value}</p>
          <div className={`text-sm ${status === "up" ? "text-green-400" : "text-red-400"}`}>
            {percentage} {status === "up" ? "↑" : "↓"}
          </div>
        </div>
      </div>
    );
  };
  
  export default Widget;
  