import React from "react";

function ChatMessage({ text, image, time, user }) {
  return (
    <div className="p-1">
      <button className="w-full cursor-pointer bg-gray-700 hover:bg-gray-500 rounded-lg">
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src={image} />
            </div>
          </div>
          <div className="chat-header text-gray-300">
            {user}
            <time className="text-xs opacity-50">{time}</time>
          </div>
          <div className="chat-bubble w-full p-2 bg-gray-300 text-gray-800">
            <div>{text}</div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ChatMessage;
