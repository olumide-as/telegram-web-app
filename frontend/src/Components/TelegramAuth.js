import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TelegramAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Telegram WebApp API provides user info
    const tg = window.Telegram.WebApp;

    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      // Extract user data from Telegram WebApp API
      const telegramUser = tg.initDataUnsafe.user;
      setUser(telegramUser);

      // Automatically send user info to the backend for registration
      registerUser(telegramUser);
    }

    // Closing the web app button
    tg.MainButton.text = "Close Web App";
    tg.MainButton.show();
    tg.MainButton.onClick(() => tg.close());
  }, []);

  // Function to send user data to the backend
  const registerUser = async (telegramUser) => {
    try {
      await axios.post('/api/users/register', {
        telegramId: telegramUser.id,
        firstName: telegramUser.first_name,
        lastName: telegramUser.last_name,
        username: telegramUser.username,
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="p-4">
      {user ? (
        <div>
          <h1>Welcome, {user.first_name}!</h1>
          <p>Your Telegram ID: {user.id}</p>
          <p>Username: @{user.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TelegramAuth;