import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AuthLayout from "../layouts/AuthLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

// Auth Pages
import LoginPage from "../modules/auth/pages/LoginPage.jsx";
import RegisterPage from "../modules/auth/pages/RegisterPage.jsx";

// Feed Module
import FeedPage from "../modules/feed/pages/FeedPage.jsx";

// Jobs Module
import JobsListPage from "../modules/jobs/pages/JobsListPage.jsx";
import JobDetailPage from "../modules/jobs/pages/JobDetailPage.jsx";
import JobCreatePage from "../modules/jobs/pages/JobCreatePage.jsx";

// Mentorship Module
import MentorsPage from "../modules/mentorship/pages/MentorsPage.jsx";
import MentorshipChatPage from "../modules/mentorship/pages/MentorshipChatPage.jsx";

// Events Module
import EventsListPage from "../modules/events/pages/EventsListPage.jsx";
import EventDetailPage from "../modules/events/pages/EventDetailPage.jsx";

// Communities Module
import CommunitiesListPage from "../modules/communities/pages/CommunitiesListPage.jsx";
import CommunityDetailPage from "../modules/communities/pages/CommunityDetailPage.jsx";

// Learning Hub Module
import LearningHubPage from "../modules/learning/pages/LearningHubPage.jsx";

// Directory Module
import DirectoryPage from "../modules/directory/pages/DirectoryPage.jsx";

// Profile Module
import MyProfilePage from "../modules/profile/pages/MyProfilePage.jsx";
import PublicProfilePage from "../modules/profile/pages/PublicProfilePage.jsx";

// Admin Module
import AdminDashboardPage from "../modules/admin/pages/AdminDashboardPage.jsx";
import UsersManagementPage from "../modules/admin/pages/UsersManagementPage.jsx";
import JobsApprovalPage from "../modules/admin/pages/JobsApprovalPage.jsx";

// Common Components
import ProtectedRoute from "../components/common/ProtectedRoute.jsx";
import NotFound from "../components/common/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* AUTH ROUTES */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* MAIN DASHBOARD */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Default redirect */}
        <Route index element={<Navigate to="/feed" replace />} />

        {/* COMMON MODULES */}
        <Route path="feed" element={<FeedPage />} />

        <Route path="jobs" element={<JobsListPage />} />
        <Route path="jobs/:jobId" element={<JobDetailPage />} />
        <Route
          path="jobs/new"
          element={
            <ProtectedRoute allowedRoles={["ALUMNI", "FACULTY", "ADMIN"]}>
              <JobCreatePage />
            </ProtectedRoute>
          }
        />

        <Route path="mentors" element={<MentorsPage />} />
        <Route path="mentorship/:mentorId" element={<MentorshipChatPage />} />

        <Route path="events" element={<EventsListPage />} />
        <Route path="events/:eventId" element={<EventDetailPage />} />

        <Route path="communities" element={<CommunitiesListPage />} />
        <Route path="communities/:communityId" element={<CommunityDetailPage />} />

        <Route path="learning" element={<LearningHubPage />} />
        <Route path="directory" element={<DirectoryPage />} />

        <Route path="profile/me" element={<MyProfilePage />} />
        <Route path="profile/:userId" element={<PublicProfilePage />} />

        {/* ADMIN MODULE */}
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/users"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <UsersManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/jobs"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <JobsApprovalPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
