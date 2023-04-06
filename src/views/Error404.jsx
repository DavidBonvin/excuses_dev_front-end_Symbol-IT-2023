import React from 'react'
import img_error from '../assets/error.png'

function Error404() {
  return (
   <div className='flex flex-col justify-center items-center h-screen'>
      
      <img src={img_error} alt='error 404' />
      <p className='text-xl '>sorry, your page was not found.</p>
    </div>
  )
}

export default Error404