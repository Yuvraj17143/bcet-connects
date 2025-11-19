import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";

const RightSidebar = () => {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <aside className="hidden xl:block w-80 border-l border-slate-200 bg-white">
      <div className="p-4 border-b border-slate-200">
        <div className="font-semibold text-sm">AI Suggestions</div>
        <p className="text-xs text-slate-500">
          Personalized jobs, mentors, events and learning based on your profile.
        </p>
      </div>
      <div className="p-4 space-y-4">
        {/* TODO: RecommendedJobsWidget, RecommendedMentorsWidget, EventsWidget */}
        <div className="p-3 rounded-lg bg-indigo-50 text-xs text-indigo-800">
          AI Match Score & Skill Gap widgets will be displayed here
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
