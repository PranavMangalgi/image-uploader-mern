// import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShowImage from "./components/showImage/ShowImage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/image/:id" element={<ShowImage />} />
    </Routes>
  );
}

export default App;
