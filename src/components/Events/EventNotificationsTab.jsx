import React from "react";

const EventNotificationsTab = ({ notifications }) => (
  <div className=" w-72 p-4 bg-white rounded-lg shadow space-y-4 overflow-y-auto">
    <h2 className="text-xl font-bold">Event Notifications</h2>
    {notifications.map((notification, index) => (
      <div key={index} className="bg-gray-100 p-2 rounded-lg">
        <p className="text-lg font-semibold">{notification.title}</p>
        <p className="text-sm">{notification.date}</p>
        <p className="text-sm">{notification.description}</p>
      </div>
    ))}
  </div>
);

export default EventNotificationsTab;
