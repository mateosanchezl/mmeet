import React from "react";
import TrendingImages from "./TrendingImages";

import dirtbikepic from "../../assets/trendingimages/dirtbikes.jpg";
import donutspic from "../../assets/trendingimages/donuts.jpg";
import flowerspic from "../../assets/trendingimages/flowers.jpg";
import sailboatpic from "../../assets/trendingimages/sailboat.jpg";
import surfingpic from "../../assets/trendingimages/surfing.jpg";

const trendingItems = [
  {
    title: "Dirt Biking in Welshpool Wales",
    description: "Adventurous dirt biking in the mountains",
    imageUrl: dirtbikepic,
  },
  {
    title: "Baking Meetup at the Bakery",
    description: "Come join us for a fun baking session",
    imageUrl: donutspic,
  },
  {
    title: "Gardening Club Meetup",
    description: "Gardening tips and tricks for beginners",
    imageUrl: flowerspic,
  },
  {
    title: "Sailing Chat",
    description: "Meetup for sailing enthusiasts, all levels welcome",
    imageUrl: sailboatpic,
  },
  {
    title: "Surfing Excursion Planning",
    description: "Let's plan our next surfing trip together!",
    imageUrl: surfingpic,
  },
];

const Trending = ({ trends }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl">
      <h2 className="text-lg font-bold mb-2">Trending Today</h2>
      <TrendingImages items={trendingItems} />
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
