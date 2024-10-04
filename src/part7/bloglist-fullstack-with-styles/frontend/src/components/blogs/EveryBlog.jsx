import { Button, Card } from 'react-bootstrap';
import { dislikeABlog, likeABlog } from '../../reducers/blogReducer';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import gsap from 'gsap';


export const EveryBlog = ({ blog }) => {
    const dispatch = useDispatch()
    const [likeIcon, setLikeIcon] = useState(false)
    const blogRef = useRef(null); // Referencia para GSAP

    // Animación con GSAP cuando el blog entra en vista
    useEffect(() => {
      gsap.from(blogRef.current, {
          opacity: 0,
          y: 50, // Aparece desde abajo
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
              trigger: blogRef.current,
              start: "top 90%", // Se anima cuando está al 80% en la pantalla
              toggleActions: "play none none none",
          }
      });
  }, []);

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


    return (
            <Card key={blog.id} className='blog' ref={blogRef}>
              <Card.Body className='blog-body'>
                <div className="blog-textos">
                    <blockquote className="blockquote mb-0">
                    {/* <Link to={`/blogs/${blog.id}`}> */}
                    <p>
                    {' '}"{`${blog.title.substring(0, 82)}${blog.title.length > 82 ? '...' : ''}`}"{' '} 
                    </p>

                    {/* </Link> */}
                      <footer className="blockquote-footer" style={{ color: '#A8E0FF' }}>
                        <cite title="Source Title cite">BY {blog.author.toUpperCase()}</cite>
                      </footer>
                    </blockquote>
                </div>
                <div className="blog-icons">
                <Link to={`/blogs/${blog.id}`}>
                 <Button className='read-btn' variant='outline-primary' type="button">LEER BLOG</Button>{''}
                </Link>
                 <div className="iconAndImage" onClick={()=>like(blog)}>
                  
                 {
                  likeIcon
                  ? <img src="/images/con-like.png" className="like" alt="cover" />
                  : <img src="/images/sin-like.png" className="like" alt="cover" />
                 }
                 <div className='number-icon'>{blog.likes}</div>
                 </div>

                 <div className="iconAndImage">
                 <img src="/images/comment-icon.png" className="like" alt="cover" /> <div className='number-icon'>{blog.comments.length}</div>
                 </div>

                </div>
              </Card.Body>
            </Card>
  )
}
