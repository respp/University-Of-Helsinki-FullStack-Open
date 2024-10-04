import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import './login.css'
import Loading from "../blogs/Loading";

gsap.registerPlugin(ScrollTrigger);

export const LoginScreen = () => {

    // Puedes usar useRef para obtener una referencia al DOM directamente
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const form = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isRegistering, setIsRegistering] = useState(false)

    useEffect(() => {
      // Para simular una carga inicial (podría ser el fetch de datos, etc.)
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false); // Quitamos el "loading" una vez que se monta
      }, 1000); // Simulamos un retraso de carga de 1 segundo
  
      return () => clearTimeout(loadingTimeout); // Limpiar el timeout al desmontar
    }, []);

  // Hook useEffect para ejecutar la animación cuando el componente se monta
  useEffect(() => {
    if (!isLoading) {
      // Animaciones solo si isLoading es falso
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
          start: "top 80%",
        },
      });

      gsap.from(form.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
        },
      });
    }
  }, [isLoading]); // Solo cuando isLoading es false 

  if (isLoading) {
    return <Loading></Loading>; // Mensaje de carga
  }

  return (
    <div className="log">
    <div className="login-screen"> 
    <div className="flower"></div>
      <div className="title-subtitle">
        <h2 ref={titleRef}>BlogNest</h2>
        <h6 ref={subtitleRef}>BlogNest facilita la gestión y el intercambio de ideas y experiencias en línea.</h6>
      </div>
      <div className="form" ref={form}>
          { 
            isRegistering
              ? <RegisterForm setIsRegistering={ setIsRegistering } isRegistering={ isRegistering } />
              : <LoginForm setIsRegistering={ setIsRegistering } isRegistering={ isRegistering } />
          }
      </div>
    </div>
    </div>

  );
}