import React from "react";
import TopCommunitiesSection from "../components/Community/TopCommunitiesSection";
import MeeScoreSection from "../components/Community/MeeScoreSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Community = () => {
  return (
    <div className="bg-gray-700">
      <Navbar />
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-4 pt-6">
        Communities
      </h1>
      <div className="container mx-auto p-6">
        <div className="flex gap-8">
          <TopCommunitiesSection />

          <MeeScoreSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
