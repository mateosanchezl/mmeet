import React from "react";

const MeeScoreCard = ({ community }) => (
  <div className="p-4 bg-white shadow rounded-lg">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">{community.name}</h3>
      <span className="text-lg font-bold">{community.meeScore}% Mee Score</span>
    </div>
    <p className="text-sm text-gray-600 mt-2">{community.description}</p>
    <div className="text-sm text-gray-500 mt-4">
      Organized by {community.organizer}
    </div>
  </div>
);

export default MeeScoreCard;
