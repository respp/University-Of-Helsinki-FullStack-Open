import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const UserBlogs = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find(user => user.id === id)
  );

  if (!user) return <div>User not found</div>

  if(user.blogs.length === 0) return (
    <div className="bg-blogs">
    <div className="display-blogs">
      <h2>{user.name}</h2>
    <h5>This user has no blogs</h5>
      </div>
    </div>
  )

  return (
    <div className="bg-blogs">
      <div className="display-blogs">
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul className="custom-list">
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>

      </div>
    </div>
  );
}
