import React from "react";
import CommunityCard from "./CommunityCard";

const communities = {
  topMembers: [
    { name: "Fitness and wellbeing", icon: "🏋️", members: 467 },
    { name: "Chinese Exchange Students", icon: "🇨🇳", members: 412 },
    { name: "Poetry and Literature", icon: "📚", members: 389 },
    { name: "Environmental Advocates", icon: "🌱", members: 350 },
  ],
  mostActive: [
    { name: "Caffeine Addicts", icon: "☕", members: 14 },
    { name: "League Of Legends", icon: "🎮", members: 212 },
    { name: "Indie Filmmakers", icon: "🎥", members: 180 },
    { name: "Street Photography", icon: "📷", members: 165 },
  ],
  fastestGrowing: [
    { name: "Dungeons and Dragons", icon: "🐉", members: 98 },
    { name: "Gym Rats", icon: "🏋️", members: 47 },
    { name: "AI Enthusiasts", icon: "🤖", members: 120 },
    { name: "Amateur Chefs", icon: "👩‍🍳", members: 105 },
  ],
};

function TopCommunitiesSection() {
  return (
    <div className="w-2/3 space-y-4">
      <input
        type="text"
        placeholder="Search a community"
        className="w-full p-2 border-2 border-gray-200 rounded"
      />
      {Object.entries(communities).map(([key, value]) => (
        <div key={key}>
          <h2 className="text-xl font-bold capitalize text-gray-300">
            {key.replace(/([A-Z])/g, " $1")}
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {value.map((community) => (
              <CommunityCard key={community.name} community={community} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopCommunitiesSection;
