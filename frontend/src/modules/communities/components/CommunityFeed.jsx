import React from "react";

// TODO: Replace with API
const dummyPosts = [
  { id: 1, author: "Alumni A", content: "Welcome to our community!", likes: 12 },
  { id: 2, author: "Student B", content: "Looking for project partners", likes: 5 },
];

const CommunityFeed = () => {
  return (
    <div className="space-y-4">
      {dummyPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs">
              {post.author[0]}
            </div>
            <span className="text-sm font-semibold text-slate-800">{post.author}</span>
          </div>
          <p className="text-sm text-slate-700 mb-2">{post.content}</p>
          <div className="flex gap-4 text-xs text-slate-500">
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔗 Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityFeed;
