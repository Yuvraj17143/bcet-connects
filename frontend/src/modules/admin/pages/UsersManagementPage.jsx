import React, { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable.jsx";

// TODO: replace with API
const dummyUsers = [
  { id: "1", name: "Alice", email: "alice@example.com", role: "STUDENT", active: true },
  { id: "2", name: "Bob", email: "bob@example.com", role: "ALUMNI", active: true },
];

const UsersManagementPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch users API
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-800">Users Management</h1>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersManagementPage;
