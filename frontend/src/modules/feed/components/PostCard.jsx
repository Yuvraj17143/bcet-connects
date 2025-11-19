import React from "react";

// TODO: Add media, tags, comments integration
const PostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3">
      <header className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-xs">
          {post.author[0]}
        </div>
        <div>
          <div className="text-sm font-semibold">{post.author}</div>
          <div className="text-[11px] text-slate-500">{post.role}</div>
        </div>
      </header>
      <div className="text-sm text-slate-800 mb-3">{post.content}</div>
      <footer className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex gap-4">
          <button>👍 Like</button>
          <button>💬 Comment</button>
          <button>🔗 Share</button>
          <button>🔖 Save</button>
        </div>
        <div>{post.likes || 0} likes</div>
      </footer>
    </article>
  );
};

export default PostCard;
