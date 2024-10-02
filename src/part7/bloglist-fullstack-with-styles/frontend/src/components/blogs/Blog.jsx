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
import { likeABlog, deleteBlog, dislikeABlog } from "../../reducers/blogReducer";
import { Link, Navigate, useParams } from "react-router-dom";
import Togglable from "../Togglable";
import { CommentForm } from "./CommentForm";
import { Button } from 'react-bootstrap';
import './blog.css'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DisplayComments } from "./DisplayComments";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find(blog => blog.id === id)
  )
  // const user = useSelector(state => state.users)

  // console.log(user)
const dispatch = useDispatch()

const [showComments, setShowComments] = useState(false)
const [likeIcon, setLikeIcon] = useState(false)
const [redirect, setRedirect] = useState(false);

const commentsRef = useRef(null);

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

  useEffect(() => {
    // Comprobar si el blog ya tiene un like guardado en localStorage
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];
    if (likedBlogs.includes(blog.id)) {
        setLikeIcon(true);
    }
}, [blog.id]);

  const like = blog => {
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];

    if (likeIcon){
        dispatch(dislikeABlog(blog, blog.id))
        setLikeIcon(false)
        const updatedLikedBlogs = likedBlogs.filter(id => id !== blog.id);
        localStorage.setItem('likedBlogs', JSON.stringify(updatedLikedBlogs));
    }
    if (!likeIcon){
        dispatch(likeABlog(blog, blog.id))
        setLikeIcon(true)
        localStorage.setItem('likedBlogs', JSON.stringify([...likedBlogs, blog.id]));
    } 
  }

  const removeBlog = blog => {
    const confirm = window.confirm(`Remove ${blog.title} by ${blog.author}?`);
    if (confirm) {
      dispatch(deleteBlog(blog.id))
      setRedirect(true)
    }
  }  
    // Desplazarse solo si se muestran los comentarios
    useEffect(() => {
      if (showComments) {
        commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, [showComments]); // Este efecto se ejecuta cada vez que cambia showComments

  console.log(blog.comments)

  if (redirect) {
    return <Navigate to='/' />;
  }

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

          {showComments && (
            <div ref={commentsRef}>
              <DisplayComments blog={blog} />

              <Togglable
              firstButtonLabel="Comment"
              secondButtonLabel="Cancel"
              >
              <div>
              <CommentForm id={blog.id}/>

              </div>
            </Togglable>
            </div>
          )}
        </div>
        <div className="col-blog2">

        <Link to={`/`}>
        <img src="/public/images/cerrar.png" className="cerrar" alt="cerrar" />
        </Link>

          <div className="fijo">
          

          <div className="content">
            <div className="likeAndComments">
              <div className="blog-icon" onClick={()=>like(blog)} >
              {
                  likeIcon
                  ? <img src="/public/images/con-like.png" className="like-in-blog" alt="like"/>
                  : <img src="/public/images/sin-like.png" className="like-in-blog" alt="like"/>
              }
              
              <div className='number-icon'>{blog.likes}</div></div>
              <div className="blog-icon  bgc-comment"><img src="/public/images/comment-icon.png" className="like-in-blog" alt="comment" onClick={()=>setShowComments( !showComments )} /><div className='number-icon'>{blog.comments.length}</div></div>
            </div>
            <Button className='remove-btn' variant='outline-primary' type="button" onClick={()=>removeBlog(blog)}>REMOVER BLOG</Button>{''}
            <a href={blog.url} target="_blank">Ir al Sitio <img src="/public/images/enlace-externo.png" className="enlace-externo" alt="enlace-externo-icon" /></a>

          </div>

          </div>



        </div>
         </div>
    </div>
  );
};

export default Blog;
