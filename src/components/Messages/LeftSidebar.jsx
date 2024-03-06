import React from "react";

const LeftSidebar = () => {
  const messageRequests = [
    {
      name: "Mark Graham",
      message: "Hey I see we both like rugby, I'd like to connect with you!",
    },
    {
      name: "Jane Rogers",
      message: "Hi there! Let's chat about knitting.",
    },
  ];

  return (
    <div className="sidebar p-1">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">
        Message Requests
      </h2>
      <p className="mb-4 text-gray-300">
        This section displays message requests from new profiles.
      </p>
      <div className="space-y-4">
        {messageRequests.map((request, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{request.name}</h3>
            <p className="text-gray-500">{request.message}</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Accept
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded ml-2">
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
