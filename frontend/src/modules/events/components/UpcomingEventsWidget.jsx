import React from "react";
import { Link } from "react-router-dom";

// TODO: Replace with real API
const upcomingEvents = [
  { id: 1, title: "Hackathon 2025", date: "25 Nov 2025" },
  { id: 2, title: "Guest Lecture on AI", date: "30 Nov 2025" },
  { id: 3, title: "Alumni Meetup", date: "05 Dec 2025" },
];

const UpcomingEventsWidget = () => {
  return (
    <div className="bg-indigo-50 rounded-2xl p-4">
      <h4 className="text-sm font-semibold mb-2">Upcoming Events</h4>
      <ul className="space-y-2 text-xs text-slate-700">
        {upcomingEvents.map((event) => (
          <li key={event.id} className="flex justify-between items-center">
            <span>{event.title}</span>
            <span className="text-[10px] text-slate-500">{event.date}</span>
            <Link to={`/events/${event.id}`} className="text-indigo-600 hover:underline text-[10px]">
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEventsWidget;
