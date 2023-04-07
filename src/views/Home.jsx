import AddExcuse from "../components/AddExcuse";
import Card from "../components/card";
import React from "react";
import { useParams } from "react-router-dom";

/**
 * Component RouteHome
 * Ce composant est utilisé pour ajouter la frase d'excuse et la fenêtre modale,
 * il sert également de page d'affichage principale où il sera redirigé à chaque fois qu'un problème survient.
 *
 * @author David Cordoba
 */

function Home() {
  const { Code } = useParams();

  return (
    <div className=" ">
      <Card httpCode={Code} />
      <AddExcuse />
    </div>
  );
}

export default Home;
