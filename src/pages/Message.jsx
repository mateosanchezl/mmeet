import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatMessage from "../components/ChatMessage";
import LeftSidebar from "../components/Messages/LeftSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import profilepic1 from "../assets/profilepics/profilepic1.jpg";
import profilepic2 from "../assets/profilepics/profilepic2.jpg";
import profilepic3 from "../assets/profilepics/profilepic3.jpg";

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const messages = [
  {
    id: 1,
    text: "This was the original concept for the login screen. After seeing Mateo Sanchez Lopez more modern prototype of the landing page, we decided it best to use that one.",
    image: profilepic1,
    time: " 10:15",
    user: "Kawith Nethaka Samarasekara",
  },
  {
    id: 2,
    text: "This is the main home screen of the app, inside and contains widgets for quick access,",
    image: profilepic2,
    time: " 12:45",
    user: "Mark Graham",
  },
  {
    id: 3,
    text: "Brainstorm from introduction up to Sprint one.",
    image: profilepic3,
    time: " 04:00",
    user: "Muhammad Zaid Razzaq Saira",
  },
];

function Message() {
  return (
    <div className="wrapper min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex min-h-0">
        {/* Left Sidebar */}
        <div className="w-1/6 bg-gray-200">
          {/* Left sidebar content goes here */}
          <p>Left Side Bar Content</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center p-4">
            <button className="text-gray-600 hover:text-gray-900 border border-black bg-gray-800 hover:bg-blue-600 rounded-lg p-2">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="text-white text-lg"
              />
            </button>
            <button className="ml-4 text-gray-600 hover:text-gray-900 border border-black bg-gray-800 hover:bg-blue-600 rounded-lg p-2">
              <FontAwesomeIcon icon={faPlus} className="text-white text-lg" />
            </button>
            <button className="ml-4 text-gray-600 hover:text-gray-900 border border-black bg-gray-800 hover:bg-blue-600 rounded-lg p-2">
              <FontAwesomeIcon icon={faSearch} className="text-white text-lg" />
            </button>
          </div>
          <div className="p-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                text={message.text}
                image={message.image}
                time={message.time}
                user={message.user}
              />
            ))}
          </div>
          <div className="flex-grow"></div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/6 bg-gray-200">
          {/* Right sidebar content goes here */}
          <p>Right Side Bar Content</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Message;
