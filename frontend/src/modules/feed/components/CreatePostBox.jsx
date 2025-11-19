import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext.jsx";
// TODO: import feedApi when backend ready

const CreatePostBox = () => {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      // TODO: await feedApi.createPost({ content, authorId: user.id });
      console.log("Post submitted:", content);
      setContent("");
    } catch (err) {
      console.error("Error creating post:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3 items-start">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs">
            {user?.name?.[0] || "U"}
          </div>
          <div className="flex-1">
            <textarea
              rows={2}
              placeholder="Share something with your campus community..."
              className="w-full text-sm border-none outline-none resize-none bg-transparent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex gap-2 text-xs text-slate-500">
                <button type="button">🖼 Image</button>
                <button type="button">🎥 Video</button>
                <button type="button">📊 Poll</button>
                <button type="button">🤖 AI Assist</button>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-1.5 text-xs rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                {loading ? "Posting..." : "Post"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostBox;
