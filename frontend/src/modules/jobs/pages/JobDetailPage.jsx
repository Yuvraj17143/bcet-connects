import React from "react";
import { useParams } from "react-router-dom";
import JobMatchWidget from "../components/JobMatchWidget.jsx";

// TODO: Fetch job details from API
const dummyJob = {
  id: 1,
  title: "React Intern",
  company: "TechCorp",
  location: "Mumbai",
  type: "Internship",
  description: "Work with React, Redux, and Tailwind to build amazing apps.",
  postedAgo: "2d",
};

const JobDetailPage = () => {
  const { jobId } = useParams();
  // TODO: Fetch job by jobId

  const job = dummyJob;

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
        <header className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <span className="text-xs text-slate-500">{job.type}</span>
        </header>
        <p className="text-sm text-slate-700">{job.company} - {job.location}</p>
        <p className="text-sm text-slate-600 mt-2">{job.description}</p>
      </div>
      <JobMatchWidget matchScore={75} />
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetailPage;
