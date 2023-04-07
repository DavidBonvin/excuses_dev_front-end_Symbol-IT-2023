import React, { useEffect, useState } from "react";

import img_error from "../assets/error.png";
import { useNavigate } from "react-router-dom";

/**
 * Component RouteError404
 * Cette page d'erreur importe une image d'erreur explicite 
 * et dispose d'une fonction permettant de revenir à la page 
 * d'accueil après 5 secondes.
 *
 * @author David Cordoba
 */

function Error404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={img_error} alt="error 404" />
      <p className="text-xl ">sorry, your page was not found.</p>
    </div>
  );
}

export default Error404;
