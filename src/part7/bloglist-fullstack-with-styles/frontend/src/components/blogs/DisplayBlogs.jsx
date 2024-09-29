import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Togglable from "../Togglable";
import { Notification } from "../Notification";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error } from '../ErrorMessage';
import { Button, Card, Nav } from 'react-bootstrap';
import Loading from './Loading'
import './blog.css'


export const DisplayBlogs = () => {
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.user)

    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
      const fetchBlogs = async () => {
        setLoading(true); // Inicia el estado de carga
        // Simula un retraso de 1 segundo para simular la carga de CSS
        const delay = new Promise(resolve => setTimeout(resolve, 500));

        try {
          await delay; // Espera el retraso
          // const fetchedBlogs = await blogService.getAll();
          // Aquí podrías ordenar los blogs si es necesario
          // dispatch(setBlogs(sortedBlogs));
        } catch (error) {
          // console.error('Error fetching blogs:', error);
        } finally {
          setLoading(false); // Finaliza el estado de carga
        }
      };

      fetchBlogs();
    }, []); // Ejecuta el efecto solo una vez al montar el componente

    if (loading) {
      return <Loading></Loading>; // Mensaje de carga
    }

    console.log(blogs)

  return (
    <div data-testid="logged" className='bg-blogs'>
    <img src="/public/images/cover.webp" className="cover" alt="cover" />
    <div className="question">
      <p className='text1'>Hola {user.name},</p>
      <p className='text2'>¿QUÉ TIENES GANAS DE CONTAR HOY?</p>
      <Nav.Link as={Link} className='btn escribir-btn' variant='outline-primary' type="button" to="/users/new-blog">ESCRIBIR NUEVO BLOG</Nav.Link>
    </div>
      <Notification  />

      <Error />
      <div data-testid="blogs">
        {blogs.map((blog) => (
            <Card key={blog.id} className='blog'>
              <Card.Body className='blog-body'>
                <div className="blog-textos">
                    <blockquote className="blockquote mb-0">
                    <Link to={`/blogs/${blog.id}`}>
                      <p>
                        {' '}{blog.title}{' '}
                      </p>
                    </Link>
                      <footer className="blockquote-footer" style={{ color: '#A8E0FF' }}>
                        <cite title="Source Title">By {blog.author}</cite>
                      </footer>
                    </blockquote>
                </div>
                <div className="blog-icons">
                 <Button className='btn read-btn' variant='outline-primary' type="button">LEER BLOG</Button>{''}
                    
                </div>
              </Card.Body>
            </Card>
        ))}
      </div>
    </div>
  )
}
