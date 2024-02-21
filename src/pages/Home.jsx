import React from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/Sidenav";
import FeedItem from "../components/FeedItem";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

const trendingTopics = [
  "Machine Learning Projects",
  "Sustainable Architecture",
  "Digital Marketing Strategies",
  "Psychology Research Findings",
];

const mockPosts = [
  {
    title: "Join Our Weekly Coding Bootcamp!",
    author: "ProfJameson",
    timestamp: "1 day ago",
    content:
      "Excited to announce a weekly coding bootcamp for beginners and intermediate learners alike. We'll cover everything from Python basics to web development. Great opportunity to enhance your skills!",
  },
  {
    title: "Study Group for Machine Learning Exam",
    author: "AliceStudent",
    timestamp: "3 hours ago",
    content:
      "Hey everyone, I'm organizing a study group for the upcoming Machine Learning exam. We plan to meet in the library room 204, every Tuesday and Thursday at 5 pm. All are welcome!",
  },
  {
    title: "Volunteers Needed for University Open Day",
    author: "AdminDept",
    timestamp: "2 days ago",
    content:
      "We're looking for enthusiastic volunteers to help out during the University Open Day next month. It's a great way to meet prospective students and help them discover what Manchester Metropolitan has to offer. Plus, free lunch!",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <SideNav />
        <div className="flex-1 p-4 bg-gray-700">
          <Trending trends={trendingTopics} />
          <div className="pt-4">
            {mockPosts.map((post, index) => (
              <FeedItem key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
