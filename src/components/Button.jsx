import React from "react";
import image from "../assets/botton.svg";

function Button({ onClick }) {
  return (
    <div className="flex flex-col  items-center my-6 mx-auto">
      <button
        className="flex flex-col  items-center my-4 mx-auto"
        onClick={onClick}
      >
        <img src={image} alt="" />
      </button>
    </div>
  );
}

export default Button;
