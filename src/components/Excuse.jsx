import React from "react";

function Excuse({ excuse }) {
  return (
    <div
      className="flex flex-col justify-center items-center mt-4"
      style={{ height: "70px" }}
    >
      
      <p className="italic">{excuse}</p>
    </div>
  );
}

export default Excuse;
