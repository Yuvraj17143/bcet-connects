import React, { useState } from "react";

// TODO: Replace with dynamic API filter options
const departments = ["Computer Science", "Electronics", "Mechanical", "Civil"];
const roles = ["STUDENT", "ALUMNI", "FACULTY"];

const DirectoryFilters = ({ filters, setFilters }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setFilters({ ...filters, search: e.target.value });
  };

  const handleRoleChange = (role) => {
    setFilters({ ...filters, role });
  };

  const handleDepartmentChange = (dept) => {
    setFilters({ ...filters, department: dept });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <input
        type="text"
        placeholder="Search by name or skill..."
        value={search}
        onChange={handleSearchChange}
        className="px-3 py-1.5 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
      />
      <select
        value={filters.role || ""}
        onChange={(e) => handleRoleChange(e.target.value)}
        className="px-3 py-1.5 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Roles</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <select
        value={filters.department || ""}
        onChange={(e) => handleDepartmentChange(e.target.value)}
        className="px-3 py-1.5 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DirectoryFilters;
