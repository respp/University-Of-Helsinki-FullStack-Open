import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const UserBlogs = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find(user => user.id === id)
  );

  if (!user) return <div>User not found</div>

  if(user.blogs.length === 0) return (
    <div className="bg-blogs">
      <div className="display-blogs no-blogs">
        <div className="col-user1">
          <h2>{user.name}</h2>
          <p>This user has no blogs</p>
        </div>
        <div className="col-user2">
          <Link to={`/users`}>
            <img src="/public/images/cerrar.png" className="cerrar" alt="cerrar" />
          </Link>
        </div>
        

      </div>
    </div>
  )

  return (
    <div className="bg-blogs">
      <div className="display-blogs">
        <div className="col-user1">
          <h2>{user.name}</h2>
          <h3>added blogs</h3>
          <ul className="custom-list">
            {user.blogs.map((blog) => (
              <li key={blog.id}>{blog.title}</li>
            ))}
          </ul>
        </div>
        <div className="col-user2">
          <Link to={`/users`}>
            <img src="/public/images/cerrar.png" className="cerrar" alt="cerrar" />
          </Link>
        </div>
        

      </div>
    </div>
  );
}
