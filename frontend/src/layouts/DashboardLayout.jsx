import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        {/* Logo / Tagline */}
        <div className="text-2xl font-bold text-center mb-4">
          BCET Connect
        </div>
        <div className="text-xs text-center text-slate-500 mb-6">
          Campus & Alumni Engagement Platform
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
