import { useDispatch, useSelector } from "react-redux";
import { likeABlog, deleteBlog, dislikeABlog } from "../../reducers/blogReducer";
import { Link, Navigate, useParams } from "react-router-dom";
import Togglable from "../Togglable";
import { CommentForm } from "./CommentForm";
import Button from 'react-bootstrap/Button';
import './blog.css'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DisplayComments } from "./DisplayComments";
import Swal from 'sweetalert2';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs?.find(blog => blog.id === id));
  const user = useSelector(state => state.user);

  const [showComments, setShowComments] = useState(false);
  const [likeIcon, setLikeIcon] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const commentsRef = useRef(null);

  useEffect(() => {
    gsap.from(".description", {
      opacity: 0, 
      duration: 1.5, 
      y: 50, 
      ease: "power2.out", 
      scrollTrigger: {
        trigger: ".description", 
        start: "top 80%", 
        end: "top 50%", 
        toggleActions: "play none none none", 
      },
    });
  }, []);

  useEffect(() => {
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];
    if (likedBlogs.includes(blog?.id)) {
      setLikeIcon(true);
    }
  }, [blog]);

  const toggleLike = () => {
    const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];
    if (likeIcon) {
      dispatch(dislikeABlog(blog, blog.id));
      setLikeIcon(false);
      localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs.filter(id => id !== blog.id)));
    } else {
      dispatch(likeABlog(blog, blog.id));
      setLikeIcon(true);
      localStorage.setItem('likedBlogs', JSON.stringify([...likedBlogs, blog.id]));
    }
  };

  const removeBlog = () => {
    if (!user || !blog) {
      Swal.fire({
        title: "Error",
        text: "Datos no disponibles para eliminar el blog.",
        icon: "error",
        background: '#11192A',
        color: '#fff',
        confirmButtonColor: '#0D1322',
      });
      return;
    }

    if (user.username !== blog.user.username) {
      Swal.fire({
        title: "No tienes permiso para eliminar este blog",
        text: "Solo el autor puede eliminar este blog.",
        icon: "error",
        background: '#11192A',
        iconColor: '#973535',
        color: '#fff',
        confirmButtonColor: '#0D1322',
      });
      return;
    }

    Swal.fire({
      title: "Estas seguro?",
      text: `No vas a poder revertirlo!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Remover Blog",
      cancelButtonText: "Cancelar",
      background: '#253559',
      iconColor: '#973535',
      color: '#fff',
      confirmButtonColor: '#0D1322',
      cancelButtonColor: '#0D1322',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBlog(blog.id));
        Swal.fire({
          title: "Deleted!",
          text: "El blog ha sido eliminado.",
          icon: "success",
          color:"#fff",
          background: '#11192A',
          iconColor: '#96E0FF',
          confirmButtonColor: '#0D1322',
          confirmButtonText: 'Aceptar', 
        });
        setRedirect(true);
      }
    });
  };

  useEffect(() => {
    if (showComments) {
      commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showComments]);

  if (redirect) {
    return <Navigate to='/' />;
  }

  if (!blog) return <Navigate to='/' />;

  return (
    <div className="bg-blogs newblog">
      <div className="blog-content">
        <div className="col-blog1">
          <h2>{blog.title}</h2>
          <footer className="blockquote-footer cite-blog">BY {blog.author.toUpperCase()}</footer>
          <div className="description">
            <p>{blog.description}</p>
          </div>
          {showComments && (
            <div ref={commentsRef}>
              <DisplayComments blog={blog} />
              <Togglable firstButtonLabel="Comment" secondButtonLabel="Cancel">
                <CommentForm id={blog.id} />
              </Togglable>
            </div>
          )}
        </div>
        <div className="col-blog2">
          <Link to={`/`}>
            <img src="/images/cerrar.png" className="cerrar" alt="cerrar" />
          </Link>
          <div className="fijo">
            <div className="content">
              <div className="likeAndComments">
                <div className="blog-icon" onClick={toggleLike}>
                  <img src={`/images/${likeIcon ? 'con-like' : 'sin-like'}.png`} className="like-in-blog" alt="like" />
                  <div className='number-icon'>{blog.likes}</div>
                </div>
                <div className="blog-icon bgc-comment" onClick={() => setShowComments(!showComments)}>
                  <img src="/images/comment-icon.png" className="like-in-blog" alt="comment" />
                  <div className='number-icon'>{blog.comments.length}</div>
                </div>
              </div>
              <Button className='remove-btn' variant='outline-primary' type="button" onClick={removeBlog}>REMOVER BLOG</Button>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">Ir al Sitio <img src="/images/enlace-externo.png" className="enlace-externo" alt="enlace-externo-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
