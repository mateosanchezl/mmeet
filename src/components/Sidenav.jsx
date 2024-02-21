import React from "react";
import { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const topics = [
    "Music",
    "Gaming",
    "Coding",
    "Hiking",
    "Reading",
    "Traveling",
    "Cooking",
    "Sports",
    "Anime",
    "Manga",
    "Fitness",
    "Yoga",
    "Meditation",
    "Photography",
    "Film Making",
    "Graphic Design",
    "Web Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Virtual Reality",
    "Augmented Reality",
    "DIY Projects",
    "Gardening",
    "Creative Writing",
    "Poetry",
    "Dance",
    "Fashion",
    "Beauty",
    "Interior Design",
  ];

  return (
    <aside className="w-64 h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 h-full">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-2 text-sm font-semibold text-left text-gray-900 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span className="text-xl">Topics</span>
            <span>{isOpen ? "-" : "+"}</span>
          </button>
          {isOpen && (
            <ul className="space-y-2 mt-2">
              {topics.map((topic, index) => (
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-sm font-semibold text-gray-900 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="mr-3">{topic[0]}</span>
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
