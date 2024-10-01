import React, { useEffect, useState } from 'react'
import { Notification } from "../Notification";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error } from '../ErrorMessage';
import { Nav } from 'react-bootstrap';
import Loading from './Loading'
import './blog.css'
import { EveryBlog } from './EveryBlog';


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
        } catch (error) {
        } finally {
          setLoading(false); // Finaliza el estado de carga
        }
      };

      fetchBlogs();
    }, []); // Ejecuta el efecto solo una vez al montar el componente

    if (loading) {
      return <Loading></Loading>; // Mensaje de carga
    }

    // console.log(blogs)


  return (
    <div data-testid="logged" className='bg-blogs'>
    <img src="/public/images/cover.png" className="cover" alt="cover" />
    <div className="question">
      <p className='text1'>Hola {user.name},</p>
      <p className='text2'>¿QUÉ TIENES GANAS DE CONTAR HOY?</p>
      <Nav.Link as={Link} className=' escribir-btn' variant='outline-primary' type="button" to="/users/new-blog">ESCRIBIR NUEVO BLOG</Nav.Link>
    </div>
      <Notification  />

      <Error />
      <div data-testid="blogs">
        {blogs.map((blog) => 
            <EveryBlog blog={blog} key={blog.id} />
        )}
      </div>
    </div>
  )
}
