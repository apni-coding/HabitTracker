git commit -m "first commit"import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WeekView from "./components/WeekView";

const App = () => {
  return (
    <>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
    </>
  );
};

export default App;
