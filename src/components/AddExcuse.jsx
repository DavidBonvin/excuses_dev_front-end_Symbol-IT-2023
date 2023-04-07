import React from 'react'
import plus from '../assets/plus.svg'

function AddExcuse() {
  return (
    <button type ="button" className='flex flex-col  items-center mx-auto'>
     <img src={plus} alt="plus" />
    </button>
  )
}

export default AddExcuse