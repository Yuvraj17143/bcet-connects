import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext.jsx";
import ProfileHeader from "../components/ProfileHeader.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";

const MyProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // TODO: Fetch profile from API
    setProfile(user); // temp placeholder
  }, [user]);

  if (!profile) return <p className="text-slate-500">Loading profile...</p>;

  return (
    <div className="space-y-4">
      <ProfileHeader user={profile} />
      <SkillsSection skills={profile.skills} />
      <PortfolioGrid projects={profile.projects} />
    </div>
  );
};

export default MyProfilePage;
