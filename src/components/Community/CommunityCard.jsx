import React from "react";

const CommunityCard = ({ community }) => (
  <div className="flex items-center p-4 bg-white shadow rounded-lg">
    <div className="text-3xl">{community.icon}</div>
    <div className="ml-4">
      <div className="font-semibold">{community.name}</div>
      <div className="text-sm text-gray-600">{community.members} members</div>
    </div>
  </div>
);

export default CommunityCard;
