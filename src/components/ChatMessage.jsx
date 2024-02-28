import React from "react";

function ChatMessage({ text, image }) {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Avatar"
            src={image}
          />
        </div>
      </div>
      <div className="chat-bubble">
        {text}
      </div>
    </div>
  );
}

export default ChatMessage;
