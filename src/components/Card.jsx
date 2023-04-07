import * as URL from  "../constants/urlBackEnd";

import React , { useEffect, useState } from 'react'

import AddExcuse from "./AddExcuse";
import Button from "./Button";
import Excuse from "./Excuse";
import axios from 'axios';

function Card({ httpCode }) {

 console.log(httpCode);
 
 const URL_BACK_EXCUSE_RANDOM = 'http://127.0.0.1:8010/api/random';
 const URL_EXCUSE_CODE = 'http://127.0.0.1:8010/api/'
 

 const [excuse, setExcuse] = useState('');

 


  useEffect(() => {
    if (httpCode) {
      getExcuseByCode(httpCode);
    } else {
      getExcuseRandom();
    }
  }, [httpCode]);

   

  const getExcuseByCode = async (code) => {
   
   try {
     const response = await axios.get(URL_EXCUSE_CODE + code);
     setExcuse(response.data['message ']);
   } catch (error) {
     console.error(error);
   }
 };

 const getExcuseRandom = async () => {
   try {
     const response = await axios.get(URL_BACK_EXCUSE_RANDOM);
     setExcuse(response.data.excuse['message ']);
   } catch (error) {
     console.error(error);
   }
 };
 
  return (
    <div className="cardbg">
     <Excuse excuse={excuse} />
      <Button onClick={getExcuseRandom} />
      <AddExcuse/>
    </div>
  )
}

export default Card