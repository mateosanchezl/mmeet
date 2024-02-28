import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatMessage from "../components/ChatMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

const messages = [
  {
    id: 1,
    text: "It was said that you would, destroy the Sith, not join them.",
    image:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  },
];

function Message() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center p-4">
        <button className="text-gray-600 hover:text-gray-900 border border-black bg-gray-800 hover:bg-blue-600 rounded-lg p-2">
          <FontAwesomeIcon icon={faPlus} className="text-white text-lg" />
        </button>
        <button className="ml-4 text-gray-600 hover:text-gray-900 border border-black bg-gray-800 hover:bg-blue-600 rounded-lg p-2">
          <FontAwesomeIcon icon={faBell} className="text-white text-lg" />
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
          />
        ))}
      </div>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default Message;
