import React, { useState } from "react";
import "./Task2.css";

const Task2 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //as we not called the below function the page will reload to avoid it we call this function
    e.preventDefault();
    if (inputValue === "") {
      alert("Please Enter Something");
      return;
    }
    console.log("You Entered a Value");
    alert("The Value You Entered Is: " + inputValue);
  };

  return (
    <div className="container">
      <h2>Task2</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Task2;
