// src/layouts/AuthLayout.jsx
import React from "react";

// AuthLayout: Used for Login/Register pages
// Provides centered card layout
const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
