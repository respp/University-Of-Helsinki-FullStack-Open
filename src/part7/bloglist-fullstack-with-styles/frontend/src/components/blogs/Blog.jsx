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
import Swal from 'sweetalert2';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs ? state.blogs.find(blog => blog.id === id) : null
  );

  
  const user = useSelector(state => state.user)

  console.log(user.username)
  console.log(blog.user.username)
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

  if (!blog) return <div>Blog not found</div>

  useEffect(() => {
    if (blog?.id) {
      const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];
      if (likedBlogs.includes(blog.id)) {
        setLikeIcon(true);
      }
    }
  }, [blog]);
  

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
    console.log(blog)

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
        // Verificar si el usuario actual es el creador del blog
  if (user.username !== blog.user.username) {
    // Mostrar una alerta indicando que no tiene permisos para borrar el blog
    Swal.fire({
      title: "No tienes permiso para eliminar este blog",
      text: "Solo el autor puede eliminar este blog.",
      icon: "error",
      background: '#11192A',
      iconColor: '#973535',
      color: '#fff',
      confirmButtonColor: '#0D1322',
    });
    return; // Salir de la función si no tiene permisos
  }

  // Si es el autor del blog, proceder con la eliminación
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
      // Llamar a la acción para eliminar el blog
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

      // Redirigir después de la eliminación
      setRedirect(true);
    }
  });
  };
    // Desplazarse solo si se muestran los comentarios
    useEffect(() => {
      if (showComments) {
        commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, [showComments]); // Este efecto se ejecuta cada vez que cambia showComments


  if (redirect) {
    return <Navigate to='/' />;
  }

  if (!blog) return <Navigate to='/' />;


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
