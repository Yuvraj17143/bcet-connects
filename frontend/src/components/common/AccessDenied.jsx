import React from "react";
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">Access Denied</h1>
      <p className="mt-2 text-slate-600">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default AccessDenied;
