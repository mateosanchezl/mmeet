import React from "react";

const TrendingImages = ({ items }) => {
  return (
    <div className="flex overflow-x-auto gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <img
            src={item.imageUrl}
            alt={`Trending topic ${index + 1}`}
            className="rounded-lg shadow-md w-80 h-40 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
            <h3 className="text-white text-lg font-bold">{item.title}</h3>
            <p className="text-white text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingImages;
