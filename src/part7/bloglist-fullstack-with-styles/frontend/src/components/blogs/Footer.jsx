import React, { useEffect } from 'react';

export const Footer = () => {
  useEffect(() => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
    // Establecer el año en el elemento con el ID 'year'
    document.getElementById('year').textContent = currentYear;
  }, []); 

  return (
    <div className='footer'>
        <div className="col-footer">
            <p>© <span id="year"></span> Made by Renzo Barcos.</p>
            <p>renzoespinosa.b@gmail.com</p>
        </div>
            <a href="https://fullstackopen.com/" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/university-logo.png" className="helsinki-icon" alt="cover" />
            </a>
            <img src="/public/images/r-clara.png" className="r-icon" alt="cover" />
    </div>
  );
};