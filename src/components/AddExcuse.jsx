import React, { useState } from "react";

import Modal from "./Modal";
import plus from "../assets/plus.svg";

function AddExcuse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="flex flex-col items-center mx-auto"
        onClick={handleModalOpen}
      >
        <img src={plus} alt="plus" />
      </button>
      {isModalOpen && <Modal handleModalClose={handleModalClose} />}{" "}
    </div>
  );
}

export default AddExcuse;
