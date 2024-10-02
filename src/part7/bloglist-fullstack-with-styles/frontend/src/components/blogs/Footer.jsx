import React, { useEffect } from 'react';

export const Footer = () => {
  useEffect(() => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
    // Establecer el año en el elemento con el ID 'year'
    document.getElementById('year').textContent = currentYear;
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className='footer'>
        <div className="col-footer">
            <p>© <span id="year"></span> Made by Renzo Barcos.</p>
            <p>renzoespinosa.b@gmail.com</p>
        </div>
      <img src="/public/images/university-logo.png" className="helsinki-icon" alt="cover" />
      <img src="/public/images/r-clara.png" className="r-icon" alt="cover" />
      <p>MIT License</p>
    </div>
  );
};
