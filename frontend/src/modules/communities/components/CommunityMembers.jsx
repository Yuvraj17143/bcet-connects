import React from "react";

// TODO: Replace with API
const dummyMembers = [
  { id: 1, name: "Alumni A" },
  { id: 2, name: "Student B" },
  { id: 3, name: "Faculty C" },
];

const CommunityMembers = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3">
      <h4 className="text-sm font-semibold mb-2">Members</h4>
      <ul className="space-y-1 text-xs">
        {dummyMembers.map((member) => (
          <li key={member.id} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">
              {member.name[0]}
            </div>
            <span>{member.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityMembers;
