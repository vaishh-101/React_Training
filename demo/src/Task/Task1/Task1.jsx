import React, { useState } from "react";
import "./Task1.css";

function Task1() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([
    "Attend Centralogic Training",
    "Do Task Given as Assignment",
  ]);

  const handleInput = () => {
    if (inputText !== "") {
      setTodos([...todos, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdate = (index, updatedText) => {
    if (updatedText !== "") {
      const newTodos = [...todos];
      newTodos[index] = updatedText;
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your To Do Task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleInput}>Add</button>
      </div>
      <div className="table-container">
        <table className="task-table">
          <thead>
            <tr>
              <th>TO DO LIST</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button
                    onClick={() => {
                      const updatedText = prompt(
                        "Enter updated Task TO DO:",
                        todos[index]
                      );
                      handleUpdate(index, updatedText);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task1;
