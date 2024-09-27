import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BackTop } from "antd";
import { Footer, Navbar } from "./Components";
import { Home, NoPage } from "./Pages";


function App() {

  
  return (
    <div className="App scroll-smooth bg-[#210133] text-xs">

        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <BackTop />
    </div>
  );
}

export default App;
