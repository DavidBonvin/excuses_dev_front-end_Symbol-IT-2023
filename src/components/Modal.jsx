import React, { useState } from "react";

function Modal({ handleModalClose }) {
  const [formData, setFormData] = useState({
    http_code: "",
    tag: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8010/api/newexcuse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          handleModalClose();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleModalCancel = () => {
   handleModalClose();
 };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex flex-col items-center min-w-[300px] max-w-[300px] "
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between w-full">
          <label className="" htmlFor="http_code">httpCode</label>
          <input
            type="number"
            name="http_code"
            value={formData.http_code}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="tag">tag</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="message">message</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-evenly w-full"><button className="border-slate-700" type="submit">Submit</button>
        <button className="border-slate-700"  type="button" onClick={handleModalCancel}>
            Cancel
          </button>
        
        </div>
        
      </form>
      
    </div>
  );
}

export default Modal;
