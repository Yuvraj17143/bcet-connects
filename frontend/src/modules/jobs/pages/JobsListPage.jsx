import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard.jsx";
import JobFilters from "../components/JobFilters.jsx";

// TODO: Replace with real API
const dummyJobs = [
  { id: 1, title: "React Intern", company: "TechCorp", location: "Mumbai", type: "Internship", postedAgo: "2d" },
  { id: 2, title: "Fullstack Developer", company: "InnovateX", location: "Delhi", type: "Full-Time", postedAgo: "5d" },
];

const JobsListPage = () => {
  const [jobs, setJobs] = useState(dummyJobs);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // TODO: Fetch jobs from API based on filter
    console.log("Fetching jobs for filter:", filter);
    // setJobs(filteredJobs)
  }, [filter]);

  return (
    <div className="space-y-4">
      <JobFilters onChange={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        {jobs.length === 0 && (
          <div className="text-center text-slate-500 col-span-full py-6">
            No jobs available for selected filter
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsListPage;
