import React, { useEffect, useState } from "react";
import ApprovalList from "../components/ApprovalList.jsx";

// TODO: replace with API
const dummyCommunities = [
  { id: "1", title: "React Developers" },
  { id: "2", title: "AI Enthusiasts" },
];

const CommunitiesManagementPage = () => {
  const [communities, setCommunities] = useState([]);
  useEffect(() => setCommunities(dummyCommunities), []);

  const handleApprove = (community) => alert("Approved " + community.title);
  const handleReject = (community) => alert("Rejected " + community.title);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-800">Communities Management</h1>
      <ApprovalList
        items={communities}
        type="Community"
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};

export default CommunitiesManagementPage;
