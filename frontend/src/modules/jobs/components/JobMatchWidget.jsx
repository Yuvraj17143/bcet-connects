import React from "react";

// TODO: Connect with AI/ML backend for skill match % per user
const JobMatchWidget = ({ matchScore = 0 }) => {
  return (
    <div className="bg-indigo-50 rounded-xl p-3 text-xs text-indigo-800">
      <div className="font-medium mb-1">AI Match Score</div>
      <div className="w-full bg-indigo-100 rounded-full h-2 mb-1">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${matchScore}%` }}
        />
      </div>
      <div>{matchScore}% match based on your skills</div>
    </div>
  );
};

export default JobMatchWidget;
