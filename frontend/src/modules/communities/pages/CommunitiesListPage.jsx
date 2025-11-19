import React, { useEffect, useState } from "react";
import CommunityCard from "../components/CommunityCard.jsx";

// TODO: Replace with API
const dummyCommunities = [
  { id: 1, name: "Coding Club", description: "All about coding!", membersCount: 120 },
  { id: 2, name: "AI & ML", description: "AI discussions and projects", membersCount: 85 },
  { id: 3, name: "Design Hub", description: "UI/UX enthusiasts", membersCount: 60 },
];

const CommunitiesListPage = () => {
  const [communities, setCommunities] = useState(dummyCommunities);

  useEffect(() => {
    // TODO: Fetch communities from API
  }, []);

  return (
    <div className="space-y-4">
      {communities.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
      {communities.length === 0 && (
        <div className="text-center text-slate-500 py-6">
          No communities found
        </div>
      )}
    </div>
  );
};

export default CommunitiesListPage;
