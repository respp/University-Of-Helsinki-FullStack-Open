import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Error } from "../ErrorMessage";
import { LoginForm } from "./LoginForm";
import './login.css'


gsap.registerPlugin(ScrollTrigger);

export const LoginScreen = () => {

    // Puedes usar useRef para obtener una referencia al DOM directamente
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const flower = useRef(null);

  // Hook useEffect para ejecutar la animación cuando el componente se monta
  useEffect(() => {
    // Ejemplo básico de animación
    gsap.from(titleRef.current, {
      x: -70,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%", // Comienza la animación cuando el subtitle esté 80% visible
      },
    });

    gsap.from(flower.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: flower.current,
        start: "top 80%", // Comienza la animación cuando el subtitle esté 80% visible
      },
    });
  }, []); 

  return (
    <div className="log">
    <div className="login-screen"> 
      <div className="flower"><img src="frontend/public/images/flor.webp" alt="" /></div>

      {/conjunto de textos/}
      <div className="title-subtitle">
        <h2 ref={titleRef}>BlogNest</h2>
        <h6 ref={subtitleRef}>BlogNest facilita la gestión y el intercambio de ideas y experiencias en línea.</h6>
      </div>

      {/* formulario*/}
      <div className="form">
          <LoginForm />
      </div>

    </div>
    <Error />
    </div>

  );
}