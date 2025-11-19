import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">{event.title}</h3>
          <p className="text-[10px] text-slate-400">{event.date} | {event.time}</p>
        </div>
        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
          event.status === "Upcoming" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
        }`}>
          {event.status}
        </span>
      </div>
      <p className="text-xs text-slate-500 mb-2">{event.description}</p>
      <Link
        to={`/events/${event.id}`}
        className="text-xs text-indigo-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
