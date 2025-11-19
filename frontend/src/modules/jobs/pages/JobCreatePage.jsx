import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext.jsx";

const JobCreatePage = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-Time");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: await jobsApi.createJob({ title, company, location, type, description, createdBy: user.id });
      console.log("Job created:", { title, company, location, type, description });
      setTitle(""); setCompany(""); setLocation(""); setType("Full-Time"); setDescription("");
    } catch (err) {
      console.error("Error creating job:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 max-w-lg mx-auto">
      <h2 className="text-lg font-semibold mb-4">Create New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Job Title"
          className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
        <textarea
          rows={4}
          placeholder="Job Description"
          className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Job"}
        </button>
      </form>
    </div>
  );
};

export default JobCreatePage;
