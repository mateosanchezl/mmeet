import React from "react";
import MeeScoreCard from "./MeeScoreCard";
import logo from "../../assets/mee.png";

const meeScoreCommunities = [
  {
    name: "Tech Innovators",
    meeScore: 97,
    members: 300,
    description:
      "Explore the latest in technology, share your innovative ideas, and collaborate on exciting new projects.",
    organizer: "Zaid",
  },
  {
    name: "Digital Artists",
    meeScore: 93,
    members: 180,
    description:
      "A hub for digital artists to showcase their work, share tips, and engage in creative collaborations.",
    organizer: "Mohammed",
  },
  {
    name: "Fight Club",
    meeScore: 90,
    members: 130,
    description:
      "The first rule about fight club is that we don't talk about fight club...",
    organizer: "Mateo Sanchez",
  },
  {
    name: "Fitness and wellbeing",
    meeScore: 89,
    members: 467,
    description:
      "We organize Runs and Marathons in and around greater Manchester...",
    organizer: "Daniel Gonzalez",
  },
  {
    name: "Bookworms United",
    meeScore: 87,
    members: 200,
    description:
      "A community for avid readers to discuss and exchange books. Monthly book club meetings and discussions!",
    organizer: "Kawith S.",
  },
  {
    name: "Startup Founders",
    meeScore: 85,
    members: 250,
    description:
      "Connect with fellow entrepreneurs, share your startup stories, seek advice, and find investors.",
    organizer: "Mark Graham",
  },
];

function MeeScoreSection() {
  return (
    <div className="w-1/3 space-y-4">
      <div className="flex items-center ">
        <img src={logo} width="140" height="140" alt="MMeet Logo" />
        <h2 className="text-6xl font-bold text-gray-200 pr-6">Score</h2>
      </div>
      <p className="text-yellow-400 text-sm font-semibold">
        Your <span className="text-yellow-300 font-bold">Mee Score</span> is a
        way of measuring your compatibility with communities. <br />
        Here are some communities we think fit you.
      </p>
      {meeScoreCommunities.map((community) => (
        <MeeScoreCard key={community.name} community={community} />
      ))}
    </div>
  );
}

export default MeeScoreSection;
