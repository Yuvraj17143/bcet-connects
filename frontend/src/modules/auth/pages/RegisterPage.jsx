import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";

const RegisterPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/feed", { replace: true });
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-sm text-slate-500">Sign up for BCET Connect</p>
        </div>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default RegisterPage;
