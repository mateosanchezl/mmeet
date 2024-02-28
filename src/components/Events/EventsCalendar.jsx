import React from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
} from "date-fns";
import CalendarDay from "./CalendarDay";

const EventsCalendar = ({ events, currentMonth }) => {
  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    formattedDate = format(day, "yyyy-MM-dd");
    const dayEvents = events[formattedDate];
    const hasEvents = dayEvents && dayEvents.length > 0;

    days.push(
      <CalendarDay
        key={day.toString()}
        date={day}
        dayEvents={dayEvents}
        currentMonth={currentMonth}
        hasEvents={hasEvents} // Pass whether the day has events
      />
    );

    day = addDays(day, 1);
  }

  return (
    <div className="grid grid-cols-7 gap-4 bg-white p-6 rounded-lg shadow-lg">
      {days}
    </div>
  );
};

export default EventsCalendar;
