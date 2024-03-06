import React, { useState } from "react";

const RightSidebar = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Rock Climbing @ Rocking Center",
      info: "This Friday night rock climbing at the local rock climbing center, all invited.",
    },
    {
      id: 2,
      message: "Man City vs Man UTD",
      info: "Emirates Stadium 03/03/24 Buy Tickets Now!",
    },
    {
      id: 3,
      message: "Big Knit Off",
      info: "All you knitters are welcome to the big knit off",
    },
  ]);

  const dismissNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="right-sidebar p-4 space-y-4 bg-gray-600">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="notification flex justify-between items-start w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 relative"
        >
          <div className="flex-1">
            <span className="font-semibold block">{notification.message}</span>
            <p className="text-sm text-gray-600 mt-2">{notification.info}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dismissNotification(notification.id);
            }}
            className="absolute top-0 right-0 m-2 text-red-500 hover:text-red-700"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
