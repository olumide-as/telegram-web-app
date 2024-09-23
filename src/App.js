import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BackTop } from "antd";
import { Footer, Navbar } from "./Components";
import { Home, NoPage } from "./Pages";


function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    // Ensure the Telegram Web App object is available
    const tg = window.Telegram.WebApp;

    // Initialize Web App with data from Telegram
    setUser(tg.initDataUnsafe?.user || {});

    // Expand the Web App to full screen inside Telegram
    tg.expand();
}, []);
  
  return (
    <div className="App scroll-smooth bg-fuchsia-950">
              <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Telegram Web App</h1>
            {user?.username ? (
                <p>Hello, {user.first_name} (@{user.username})!</p>
            ) : (
                <p>Welcome, guest!</p>
            )}
            <button onClick={() => window.Telegram.WebApp.close()}>Close App</button>
        </div>
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
