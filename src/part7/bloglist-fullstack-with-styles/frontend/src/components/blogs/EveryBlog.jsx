import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { dislikeABlog, likeABlog } from '../../reducers/blogReducer';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import gsap from 'gsap';

export const EveryBlog = ({ blog }) => {
    const dispatch = useDispatch();
    const [likeIcon, setLikeIcon] = useState(false);
    const blogRef = useRef(null); 

    // Animación con GSAP
    useEffect(() => {
        gsap.from(blogRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: blogRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
            }
        });
    }, []);

    useEffect(() => {
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];
        setLikeIcon(likedBlogs.includes(blog.id));
    }, [blog.id]);

    const toggleLike = () => {
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs')) || [];
        const updatedLikedBlogs = likeIcon 
            ? likedBlogs.filter(id => id !== blog.id) 
            : [...likedBlogs, blog.id];

        setLikeIcon(!likeIcon);
        localStorage.setItem('likedBlogs', JSON.stringify(updatedLikedBlogs));
        dispatch(likeIcon ? dislikeABlog(blog, blog.id) : likeABlog(blog, blog.id));
    };

    return (
        <Card key={blog.id} className='blog' ref={blogRef}>
            <Card.Body className='blog-body'>
                <div className="blog-textos">
                    <blockquote className="blockquote mb-0">
                        <p>
                            "{`${blog.title.substring(0, 82)}${blog.title.length > 82 ? '...' : ''}`}"
                        </p>
                        <footer className="blockquote-footer" style={{ color: '#A8E0FF' }}>
                            <cite title="Source Title cite">BY {blog.author.toUpperCase()}</cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="blog-icons">
                    <Link to={`/blogs/${blog.id}`}>
                        <Button className='read-btn' variant='outline-primary' type="button">LEER BLOG</Button>
                    </Link>
                    <div className="iconAndImage" onClick={toggleLike}>
                        <img src={likeIcon ? "/images/con-like.png" : "/images/sin-like.png"} className="like" alt="like-icon" />
                        <div className='number-icon'>{blog.likes}</div>
                    </div>
                    <div className="iconAndImage">
                        <img src="/images/comment-icon.png" className="like" alt="comment-icon" />
                        <div className='number-icon'>{blog.comments.length}</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};
