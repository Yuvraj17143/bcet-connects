import React, { useEffect, useState } from "react";
import DirectoryFilters from "../components/DirectoryFilters.jsx";
import UserCard from "../components/UserCard.jsx";

// TODO: Replace with API call
const dummyUsers = [
  {
    id: 1,
    name: "Alumni A",
    role: "ALUMNI",
    skills: ["React", "Node.js"],
    department: "Computer Science",
    year: "2018",
  },
  {
    id: 2,
    name: "Student B",
    role: "STUDENT",
    skills: ["Python", "DSA"],
    department: "Electronics",
    year: "3rd Year",
  },
  {
    id: 3,
    name: "Faculty C",
    role: "FACULTY",
    skills: ["ML", "AI"],
    department: "Computer Science",
  },
];

const DirectoryPage = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [filters, setFilters] = useState({ search: "", role: "", department: "" });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      filters.search === "" ||
      user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      user.skills?.some((skill) => skill.toLowerCase().includes(filters.search.toLowerCase()));
    const matchesRole = filters.role === "" || user.role === filters.role;
    const matchesDept = filters.department === "" || user.department === filters.department;

    return matchesSearch && matchesRole && matchesDept;
  });

  useEffect(() => {
    // TODO: Fetch users from API using filters
  }, [filters]);

  return (
    <div className="space-y-4">
      <DirectoryFilters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-slate-500 text-sm">No users found</p>
        )}
      </div>
    </div>
  );
};

export default DirectoryPage;
