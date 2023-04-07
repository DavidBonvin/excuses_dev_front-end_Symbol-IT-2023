import * as URL from "../constants/urlBackEnd";
import * as URLF from "../constants/urlFrontEnd";

import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

import Button from "./Button";
import Excuse from "./Excuse";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Component RouteCard
 * Ce composant Carte est l'endroit où les excuses sont affichées,
 * il comporte plusieurs fonctions qui interrogent le backend et quelques animations.
 *
 * @author David Cordoba
 */

function Card({ httpCode }) {
  const URL_BACK_EXCUSE_RANDOM = "http://127.0.0.1:8010/api/random";
  const URL_EXCUSE_CODE = "http://127.0.0.1:8010/api/";

  const [excuse, setExcuse] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
 

  const titleAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    top: 0,
    from: { opacity: 0, top: 100 },
    delay: 2000,
    config: { duration: 1000 },
  });

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
      setLoading(true); // Activa el loader

      const delay = Math.floor(Math.random() * 1000) + 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      const response = await axios.get(URL_BACK_EXCUSE_RANDOM);
      setExcuse(response.data.excuse["message "]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cardbg">
      <animated.h6 style={titleAnimation} className="flex justify-center my-4">
        Ma super application
      </animated.h6>
      {loading ? <Loader /> : <Excuse excuse={excuse} />}

      <animated.div style={buttonAnimation}>
        <Button onClick={getExcuseRandom} />
      </animated.div>
    </div>
  );
}

export default Card;
