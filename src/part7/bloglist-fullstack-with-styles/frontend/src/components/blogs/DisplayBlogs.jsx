import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Loading from './Loading'
import './blog.css'
import { EveryBlog } from './EveryBlog';
import { Footer } from './Footer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const DisplayBlogs = () => {
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.user)

    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
      const fetchBlogs = async () => {
          setLoading(true); // Inicia el estado de carga
          try {
              // Simulación de carga real, puedes obtener blogs aquí
              // const response = await fetch('/api/blogs');
              // const data = await response.json();
              // setBlogs(data);
          } catch (error) {
              console.error("Error fetching blogs:", error);
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
    <img src="/images/cover.jpg" className="cover" alt="cover" />
    <div className="question">
      <p className='text1'>Hola {user.name},</p>
      <p className='text2'>¿QUÉ TIENES GANAS DE CONTAR HOY?</p>
      <Nav.Link as={Link} className=' escribir-btn' variant='outline-primary' type="button" to="/users/new-blog">ESCRIBIR NUEVO BLOG</Nav.Link>
    </div>

      <div data-testid="blogs">
        {blogs.map((blog) => 
            <EveryBlog blog={blog} key={blog.id} />
        )}
      </div>
      <Footer />
    </div>
  )
}
