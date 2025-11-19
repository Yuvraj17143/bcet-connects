import React, { useState, useEffect } from "react";
import MentorCard from "../components/MentorCard.jsx";
import MentorFilters from "../components/MentorFilters.jsx";

// TODO: Replace with real API
const dummyMentors = [
  { id: 1, name: "Dr. Sharma", department: "Computer Science", expertise: ["React", "AI"], available: true },
  { id: 2, name: "Prof. Gupta", department: "Electrical", expertise: ["Power Systems"], available: false },
  { id: 3, name: "Dr. Rao", department: "Mechanical", expertise: ["Robotics"], available: true },
];

const MentorsPage = () => {
  const [mentors, setMentors] = useState(dummyMentors);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // TODO: Fetch mentors from API based on filter
    console.log("Filtering mentors by department:", filter);
    // setMentors(filteredMentors)
  }, [filter]);

  return (
    <div className="space-y-4">
      <MentorFilters onChange={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
        {mentors.length === 0 && (
          <div className="text-center text-slate-500 col-span-full py-6">
            No mentors available for selected filter
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorsPage;
