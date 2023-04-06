import * as URL from  "../constants/urlBackEnd";

import React , { useEffect, useState } from 'react'

import Button from "./Button";
import Excuse from "./Excuse";
import axios from 'axios';
import { useParams } from "react-router";

function Card() {
 const URL_BACK_EXCUSE_RANDOM = 'http://127.0.0.1:8010/api/random';
 const URL_EXCUSE_CODE = 'http://127.0.0.1:8010/api/'

 const [excuse, setExcuse] = useState('');
 const { httpCode } = useParams();
 
 
 useEffect(() => {
   getExcuseRandom();
 }, []);

 const getExcuseRandom = async () => {
   try {
     const response = await axios.get(URL_BACK_EXCUSE_RANDOM);
     setExcuse(response.data.excuse['message ']);
     console.log("excusa" ,response.data.excuse);
     console.log(response.data.excuse['message ']);
   } catch (error) {
     console.error(error);
   }
 };
 
 const getExcuseByHttpCode = async (httpCode) => {
  try {
    const response = await axios.get(`${URL_EXCUSE_CODE}${httpCode}`); // Modifica la URL de la petición para incluir el código HTTP
    setExcuse(response.data.message); // Actualiza el estado con el mensaje de la excusa recibida del backend
    console.log("excusa", response.data);
  } catch (error) {
    console.error(error);
  }
};
  
  return (
    <div className="cardbg">
     <Excuse excuse={excuse} />
      <Button onClick={getExcuseRandom} />
    </div>
  )
}

export default Card