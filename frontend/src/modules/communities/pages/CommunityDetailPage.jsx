import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelSidebar from "../components/ChannelSidebar.jsx";
import CommunityFeed from "../components/CommunityFeed.jsx";
import CommunityMembers from "../components/CommunityMembers.jsx";

// TODO: Replace with API
const dummyCommunity = {
  id: 1,
  name: "Coding Club",
  description: "All about coding!",
};

const CommunityDetailPage = () => {
  const { communityId } = useParams();
  const [community, setCommunity] = useState(dummyCommunity);
  const [selectedChannel, setSelectedChannel] = useState("General");

  useEffect(() => {
    // TODO: Fetch community details from API
  }, [communityId]);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* CHANNELS SIDEBAR */}
      <ChannelSidebar selectedChannel={selectedChannel} setSelectedChannel={setSelectedChannel} />

      {/* MAIN FEED */}
      <main className="flex-1 space-y-4">
        <h2 className="text-lg font-semibold text-slate-800">{community.name}</h2>
        <p className="text-sm text-slate-500 mb-4">{community.description}</p>
        <CommunityFeed />
      </main>

      {/* MEMBERS SIDEBAR */}
      <aside className="hidden lg:block w-64">
        <CommunityMembers />
      </aside>
    </div>
  );
};

export default CommunityDetailPage;
