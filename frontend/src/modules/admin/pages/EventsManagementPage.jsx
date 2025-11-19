import React, { useState, useEffect } from "react";
import ApprovalList from "../components/ApprovalList.jsx";

// TODO: replace with API
const dummyEvents = [
  { id: "1", title: "AI Workshop" },
  { id: "2", title: "Hackathon 2025" },
];

const EventsManagementPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => setEvents(dummyEvents), []);

  const handleApprove = (event) => alert("Approved " + event.title);
  const handleReject = (event) => alert("Rejected " + event.title);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-800">Events Management</h1>
      <ApprovalList
        items={events}
        type="Event"
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default EventsManagementPage;
