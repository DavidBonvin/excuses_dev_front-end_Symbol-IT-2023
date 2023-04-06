import React from 'react'

function Excuse({ excuse }) {
  return (
   <div className='flex flex-col justify-between items-center my-4' style={{ height: '100px' }}>
      <p className='text-center w-full'>{/* Estilo para centrar y ocupar el ancho completo */}Ma super application</p>
      <p className='italic'>{/* Estilo para letra cursiva */}{excuse}</p>
    </div>
 );
}

export default Excuse