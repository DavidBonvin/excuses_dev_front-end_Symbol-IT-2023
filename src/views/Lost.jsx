import React, { useEffect, useState } from 'react';

import gif from "../assets/5LSi.gif"
import { useNavigate } from 'react-router-dom';

function Lost() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirigir después de 5 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p className='text-xl '>I'm lost</p>
      <img src={gif} alt='Gif' />
    </div>
  );
}

export default Lost;

