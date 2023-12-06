import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import CreateEvent from "./components/CreateEvent.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
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
