import React from "react";
import { format } from "date-fns";

const CalendarDay = ({ date, dayEvents, currentMonth, hasEvents }) => {
  const dayInCurrentMonth = format(date, "MM") === format(currentMonth, "MM");
  const dayClassNames = dayInCurrentMonth
    ? "flex flex-col border border-gray-200"
    : "flex flex-col border border-gray-200 text-gray-400";

  const eventHighlightClass = hasEvents ? "bg-yellow-200" : "";

  return (
    <div className={`${dayClassNames} ${eventHighlightClass}`}>
      <div className="p-2 text-sm font-bold">{format(date, "d")}</div>
      {dayEvents && (
        <div className="flex-1 p-2 overflow-y-auto">
          {dayEvents.map((event, index) => (
            <div key={index} className="text-xs mb-2 last:mb-0">
              <p className="font-bold">{event.title}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
