import React, { useState } from 'react';

const RightSidebar = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Rock Climbing @ Rocking Center', info: 'This Friday night rock climbing at the local rock climbing center, all invited.' },
        { id: 2, message: 'Notification 2', info: 'This is more detailed information about Notification 2.' },
        { id: 3, message: 'Notification 3', info: 'This is more detailed information about Notification 3.' },
    ]);

    const dismissNotification = (id) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };

    return (
        <div className="right-sidebar p-4 space-y-4 bg-gray-200">
            {notifications.map(notification => (
                <div 
                    key={notification.id} 
                    className="notification flex justify-between items-start w-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 relative"
                >
                    <div className="flex-1">
                        <span className="font-semibold block">{notification.message}</span>
                        <p className="text-sm text-gray-600 mt-2">{notification.info}</p>
                    </div>
                    <button 
                        onClick={e => {
                            e.stopPropagation(); // Prevents click from triggering any parent click handlers
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
