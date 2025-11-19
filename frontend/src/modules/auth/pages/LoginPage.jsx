import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";

const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/feed";

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-slate-500">Login to your BCET Connect account</p>
        </div>
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default LoginPage;
