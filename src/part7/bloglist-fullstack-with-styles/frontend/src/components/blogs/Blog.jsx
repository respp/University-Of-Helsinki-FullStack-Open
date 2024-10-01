// import { useDispatch, useSelector } from "react-redux";
// import { likeABlog, deleteBlog } from "../../reducers/blogReducer";
// import { useParams } from "react-router-dom";
// import Togglable from "../Togglable";
// import { CommentForm } from "./CommentForm";
// import { Button } from 'react-bootstrap';
// import './blog.css'

// const Blog = () => {
//   const { id } = useParams();
//   const blog = useSelector((state) =>
//     state.blogs.find(blog => blog.id === id)
//   )
//   const dispatch = useDispatch()
//   // const commentRef = useRef()

//   console.log(blog)
//   if (!blog) return <div>Blog not found</div>

//   const like = blog => dispatch(likeABlog(blog, blog.id))

//   const removeBlog = blog => {
//     const confirm = window.confirm(`Remove ${blog.title} by ${blog.author}?`);
//     if (confirm) {
//       dispatch(deleteBlog(blog.id))
//     }
//   }  

//   console.log(blog.comments)
//   return (
//     <div className="specific-blog">
//       <div className="blog-content">
//       <h1>&quot;{blog.title}&quot; by {blog.author}</h1>
//           Url: <a href={blog.url} className="custom-link">{blog.url}</a> <br />
//           Likes: {blog.likes}
//           <Button variant="outline-light" onClick={()=>like(blog)} className="btn-like">Like</Button>{' '}<br />
//           <Button variant="outline-danger" onClick={()=>removeBlog(blog)} className="btn-remove">
//             remove
//           </Button>{' '}
//           <p>added by {blog.user.name}</p>

//           <h3>Comments</h3>

//           <ul>
//             {blog.comments.map((comment, i)=>
//               <li key={i}>{comment}</li>
//           )}
//           </ul>
//           <Togglable
//           firstButtonLabel="Comment"
//           secondButtonLabel="Cancel"
//           // ref={commentRef}
//         >
//           <div>
//           <CommentForm id={blog.id}/>

//           </div>
//         </Togglable>
//       </div>

//     </div>
//   );
// };

// export default Blog;


import { useDispatch, useSelector } from "react-redux";
import { likeABlog, deleteBlog } from "../../reducers/blogReducer";
import { useParams } from "react-router-dom";
import Togglable from "../Togglable";
import { CommentForm } from "./CommentForm";
import { Button } from 'react-bootstrap';
import './blog.css'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find(blog => blog.id === id)
)
const dispatch = useDispatch()


useEffect(() => {
  // Seleccionar el texto con la clase "description" para la animación
  gsap.from(".description", {
    opacity: 0,         // Comienza invisible
    duration: 1.5,      // Duración de la animación (1.5 segundos)
    y: 50,              // Se desplaza 50px desde abajo
    ease: "power2.out", // Tipo de easing (suavidad de la animación)
    scrollTrigger: {
      trigger: ".description",   // El texto "description" activa la animación
      start: "top 80%",          // Empieza cuando el 80% del elemento es visible
      end: "top 50%",            // Termina cuando el 50% es visible
      toggleActions: "play none none none",  // Solo se reproduce una vez
    },
  });
}, []);

  console.log(blog)
  if (!blog) return <div>Blog not found</div>

  const like = blog => dispatch(likeABlog(blog, blog.id))

  const removeBlog = blog => {
    const confirm = window.confirm(`Remove ${blog.title} by ${blog.author}?`);
    if (confirm) {
      dispatch(deleteBlog(blog.id))
    }
  }  

  console.log(blog.comments)
  return (
    <div className="bg-blogs newblog">
      <div className="blog-content">
        <div className="col-blog1">
          <h2>{blog.title}</h2>

          <footer className="blockquote-footer cite-blog" >
          BY {blog.author.toUpperCase()}  
          </footer>
          <div className="description">
            <p>
            {blog.description}
            </p>
          </div>

        </div>


        <div className="col-blog2">
          <div className="fijo">
          <img src="/public/images/cerrar.png" className="cerrar" alt="cerrar" />
          

          <div className="content">
            <div className="likeAndComments">
              <div className="blog-icon"><img src="/public/images/sin-like.png" className="like" alt="like" /><div className='number-icon'>{blog.likes}</div></div>
              <div className="blog-icon  bgc-comment"><img src="/public/images/comment-icon.png" className="like" alt="comment" /><div className='number-icon'>{blog.comments.length}</div></div>
            </div>
            <Button className='remove-btn' variant='outline-primary' type="button">REMOVER BLOG</Button>{''}
            <a href={blog.url}>{blog.url}</a>

          </div>

          </div>



        </div>
         </div>
    </div>
  );
};

export default Blog;
