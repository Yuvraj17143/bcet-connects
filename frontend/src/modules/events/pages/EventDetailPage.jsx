import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// TODO: Replace with API
const dummyEvent = {
  id: 1,
  title: "Hackathon 2025",
  date: "25 Nov 2025",
  time: "10:00 AM",
  description: "24-hour coding competition for students.",
  location: "Main Campus Auditorium",
  organizer: "BCET Coding Club",
  attendees: 120,
  status: "Upcoming"
};

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(dummyEvent);

  useEffect(() => {
    // TODO: Fetch event detail by eventId from API
  }, [eventId]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">{event.title}</h2>
      <p className="text-sm text-slate-500">{event.date} | {event.time}</p>
      <p className="text-sm text-slate-500">Location: {event.location}</p>
      <p className="text-sm text-slate-500">Organizer: {event.organizer}</p>
      <p className="text-sm text-slate-500">Attendees: {event.attendees}</p>
      <p className="text-sm text-slate-700">{event.description}</p>

      {/* CTA Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-1 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 text-sm">
          Register
        </button>
        <button className="px-4 py-1 rounded-full border border-slate-300 hover:bg-slate-100 text-sm">
          Share
        </button>
      </div>
    </div>
  );
};

export default EventDetailPage;
