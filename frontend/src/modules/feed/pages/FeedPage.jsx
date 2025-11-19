import React, { useState, useEffect } from "react";
import CreatePostBox from "../components/CreatePostBox.jsx";
import FeedFilters from "../components/FeedFilters.jsx";
import PostCard from "../components/PostCard.jsx";

// TODO: Replace with real API hook
const dummyPosts = [
  { id: 1, author: "Alumni A", role: "ALUMNI", content: "Welcome to BCET Connect!", likes: 12 },
  { id: 2, author: "Student B", role: "STUDENT", content: "Looking for React internship", likes: 5 },
];

const FeedPage = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // TODO: Fetch posts from API based on filter
    console.log("Fetching posts for filter:", filter);
    // setPosts(filteredPostsFromAPI)
  }, [filter]);

  return (
    <div className="space-y-4">
      <CreatePostBox />
      <FeedFilters onChange={setFilter} />
      <div className="space-y-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {posts.length === 0 && (
          <div className="text-center text-slate-500 py-4">
            No posts to show. Start by creating one!
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
