import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Movie from "./Components/MovieList";

const App1 = () => {
  return (
    <div className="app">
      <Navbar />
      <Movie />
    </div>
  );
};

export default App1;
