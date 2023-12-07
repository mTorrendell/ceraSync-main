import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "./components/About.jsx"
import Home from "./components/home/Home.jsx"
import CreateEvent from "./components/CreateEvent.jsx"
import Header from "./components/common/Header.jsx"
import Footer from "./components/common/Footer.jsx"
import Event from "./components/Event.jsx"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/create" element={<CreateEvent />}></Route>
        <Route path="/event/:id" element={<Event />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
