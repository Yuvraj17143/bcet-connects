import React from "react";

// TODO: Replace with real API
const dummyChannels = [
  { id: 1, name: "General" },
  { id: 2, name: "Jobs & Internships" },
  { id: 3, name: "Projects" },
  { id: 4, name: "Events" },
];

const ChannelSidebar = ({ selectedChannel, setSelectedChannel }) => {
  return (
    <aside className="w-60 border-r border-slate-200 bg-white p-3">
      <h4 className="text-sm font-semibold mb-2">Channels</h4>
      <ul className="space-y-1 text-xs">
        {dummyChannels.map((channel) => (
          <li
            key={channel.id}
            onClick={() => setSelectedChannel(channel.name)}
            className={`cursor-pointer px-2 py-1 rounded hover:bg-indigo-50 transition ${
              selectedChannel === channel.name ? "bg-indigo-100 font-medium" : ""
            }`}
          >
            #{channel.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChannelSidebar;
