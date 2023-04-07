import AddExcuse from "../components/AddExcuse";
import Card from "../components/card";
import React from "react";
import { useParams } from "react-router-dom";

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
