import React from "react";

const Trending = ({ trends }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl">
      <h2 className="text-lg font-bold mb-2">Trending Today</h2>
      <div className="flex overflow-x-auto gap-4">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="min-w-max bg-gray-700 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-600"
          >
            <span>{trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
