import React from "react";

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl border overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b hover:bg-slate-50">
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.role}</td>
              <td className="px-4 py-2">{u.active ? "Active" : "Inactive"}</td>
              <td className="px-4 py-2 flex gap-2">
                <button className="text-xs px-2 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700">
                  Edit
                </button>
                <button className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
