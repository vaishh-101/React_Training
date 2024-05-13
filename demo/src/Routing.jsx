import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task1 from './Task/Task1/Task1'
import Task2 from './Task/Task2/Task2'


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Task1" element={<Task1 />} />
        <Route path="/" element={<Task2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
