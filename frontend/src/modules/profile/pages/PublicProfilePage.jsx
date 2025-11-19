import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import PortfolioGrid from "../components/PortfolioGrid.jsx";

// TODO: Replace with API call
const dummyProfiles = [
  {
    id: "1",
    name: "Alumni A",
    role: "ALUMNI",
    department: "Computer Science",
    bio: "Full-stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
    projects: [
      { title: "Portfolio Website", link: "#", image: "/placeholder.png" },
      { title: "React App", link: "#", image: "/placeholder.png" },
    ],
  },
  {
    id: "2",
    name: "Student B",
    role: "STUDENT",
    department: "Electronics",
    skills: ["Python", "DSA"],
    projects: [],
  },
];

const PublicProfilePage = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // TODO: Fetch public profile via API
    const found = dummyProfiles.find((p) => p.id === userId);
    setProfile(found || null);
  }, [userId]);

  if (!profile) return <p className="text-slate-500">Profile not found</p>;

  return (
    <div className="space-y-4">
      <ProfileHeader user={profile} />
      <SkillsSection skills={profile.skills} />
      <PortfolioGrid projects={profile.projects} />
    </div>
  );
};

export default PublicProfilePage;
