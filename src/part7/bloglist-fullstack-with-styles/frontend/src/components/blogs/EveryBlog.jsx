import { Button, Card } from 'react-bootstrap';
import { dislikeABlog, likeABlog } from '../../reducers/blogReducer';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export const EveryBlog = ({ blog }) => {
    const dispatch = useDispatch()
    const [likeIcon, setLikeIcon] = useState(false)

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
            <Card key={blog.id} className='blog'>
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
                  ? <img src="/public/images/con-like.png" className="like" alt="cover" />
                  : <img src="/public/images/sin-like.png" className="like" alt="cover" />
                 }
                 <div className='number-icon'>{blog.likes}</div>
                 </div>

                 <div className="iconAndImage">
                 <img src="/public/images/comment-icon.png" className="like" alt="cover" /> <div className='number-icon'>{blog.comments.length}</div>
                 </div>

                </div>
              </Card.Body>
            </Card>
  )
}
