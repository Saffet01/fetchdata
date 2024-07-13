import React from "react";
import "./Post.css";

export const Post = ({ post, onDelete }) => {
  return (
    <div className="post-card">
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <button
        className="delete-button"
        onClick={(event) => {
          event.stopPropagation();
          onDelete(post.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
