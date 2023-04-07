import * as URL from "../constants/urlBackEnd";
import * as URLF from "../constants/urlFrontEnd";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";
import Excuse from "./Excuse";
import axios from "axios";

function Card({ httpCode }) {
  const URL_BACK_EXCUSE_RANDOM = "http://127.0.0.1:8010/api/random";
  const URL_EXCUSE_CODE = "http://127.0.0.1:8010/api/";

  const [excuse, setExcuse] = useState("");
  const navigate = useNavigate();

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
      const message = response.data["message "];

      if (!message || message.trim() === "") {
        navigate(URLF.URL_ERROR);
      } else {
        setExcuse(message);
      }
    } catch (error) {
      navigate(URLF.URL_ERROR);
    }
  };

  const getExcuseRandom = async () => {
    try {
      const response = await axios.get(URL_BACK_EXCUSE_RANDOM);
      setExcuse(response.data.excuse["message "]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cardbg">
      <Excuse excuse={excuse} />
      <Button onClick={getExcuseRandom} />
    </div>
  );
}

export default Card;
