import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard.jsx";
import UpcomingEventsWidget from "../components/UpcomingEventsWidget.jsx";

// TODO: Replace with API call
const dummyEvents = [
  { id: 1, title: "Hackathon 2025", date: "25 Nov 2025", time: "10:00 AM", description: "24h coding competition", status: "Upcoming" },
  { id: 2, title: "Guest Lecture on AI", date: "30 Nov 2025", time: "4:00 PM", description: "AI trends & career guidance", status: "Upcoming" },
  { id: 3, title: "Alumni Meetup", date: "05 Dec 2025", time: "6:00 PM", description: "Networking & insights", status: "Upcoming" },
];

const EventsListPage = () => {
  const [events, setEvents] = useState(dummyEvents);

  useEffect(() => {
    // TODO: Fetch events from API
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* MAIN EVENTS LIST */}
      <div className="flex-1 space-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        {events.length === 0 && (
          <div className="text-center text-slate-500 py-6">
            No events available
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden lg:block w-80">
        <UpcomingEventsWidget />
      </aside>
    </div>
  );
};

export default EventsListPage;
