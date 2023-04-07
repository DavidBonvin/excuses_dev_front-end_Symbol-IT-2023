import React from 'react'
import { useParams } from 'react-router-dom';

function ExcuseCode() {
 const { Code } = useParams();
 console.log(Code); // El valor de httpCode debe mostrarse correctamente en la consola
 return (
  <div>code:{Code}</div>
 )
}

export default ExcuseCode