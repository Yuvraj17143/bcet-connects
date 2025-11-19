export const ROLES = {
  STUDENT: "STUDENT",
  ALUMNI: "ALUMNI",
  FACULTY: "FACULTY",
  ADMIN: "ADMIN",
};

// Sidebar links per role
export const sidebarLinksByRole = {
  [ROLES.STUDENT]: [
    { to: "/feed", label: "Feed", icon: "📰" },
    { to: "/jobs", label: "Jobs", icon: "💼" },
    { to: "/mentors", label: "Mentors", icon: "🤝" },
    { to: "/events", label: "Events", icon: "📅" },
    { to: "/communities", label: "Communities", icon: "👥" },
    { to: "/learning", label: "Learning Hub", icon: "📚" },
    { to: "/directory", label: "Directory", icon: "🔍" },
    { to: "/profile/me", label: "Profile", icon: "👤" },
  ],
  [ROLES.ALUMNI]: [
    { to: "/feed", label: "Feed", icon: "📰" },
    { to: "/jobs", label: "Jobs", icon: "💼" },
    { to: "/events", label: "Events", icon: "📅" },
    { to: "/communities", label: "Communities", icon: "👥" },
    { to: "/learning", label: "Learning Hub", icon: "📚" },
    { to: "/directory", label: "Directory", icon: "🔍" },
    { to: "/profile/me", label: "Profile", icon: "👤" },
  ],
  [ROLES.FACULTY]: [
    { to: "/feed", label: "Feed", icon: "📰" },
    { to: "/jobs", label: "Opportunities", icon: "📝" },
    { to: "/events", label: "Events", icon: "📅" },
    { to: "/communities", label: "Communities", icon: "👥" },
    { to: "/directory", label: "Directory", icon: "🔍" },
    { to: "/profile/me", label: "Profile", icon: "👤" },
  ],
  [ROLES.ADMIN]: [
    { to: "/admin", label: "Dashboard", icon: "📊" },
    { to: "/admin/users", label: "Users", icon: "👥" },
    { to: "/admin/jobs", label: "Jobs Approval", icon: "✅" },
    { to: "/events", label: "Events", icon: "📅" },
    { to: "/communities", label: "Communities", icon: "👥" },
    { to: "/directory", label: "Directory", icon: "🔍" },
  ],
};
