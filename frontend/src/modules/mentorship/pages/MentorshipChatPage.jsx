import React from "react";
import { useParams } from "react-router-dom";
import ChatWindow from "../components/ChatWindow.jsx";

// TODO: Fetch mentor info from API
const dummyMentor = { id: 1, name: "Dr. Sharma" };

const MentorshipChatPage = () => {
  const { mentorId } = useParams();
  // TODO: Fetch mentor by mentorId
  const mentor = dummyMentor;

  return (
    <div className="h-[calc(100vh-3.5rem)]"> {/* 100% height minus navbar */}
      <ChatWindow mentor={mentor} />
    </div>
  );
};

export default MentorshipChatPage;
