import React, { useEffect, useState } from "react";
import axios from 'axios'; // Import axios to fetch user data
import {
  Button1,
  DailyTask,
  ImageCard1,
  Taskcard1,
  Taskcard2,
  UserList,
} from "../Components";
import {
  dog,
  game,
  logo,
  schedule,
  telegram,
  trophy,
  xtwitter,
  youtube,
} from "../Assets";

const Home = () => {
  const [user, setUser] = useState({});
  const [userPoints, setUserPoints] = useState(0); // New state for user's points

  useEffect(() => {
    // Ensure the Telegram Web App object is available
    const tg = window.Telegram.WebApp;

    // Log the raw Telegram user data
    console.log('Telegram user data:', tg.initDataUnsafe?.user); 

    // Initialize Web App with data from Telegram
    const telegramUser = tg.initDataUnsafe?.user || {};

    // Set user from Telegram WebApp
    setUser(telegramUser);

    // Fetch user data from backend by telegramId
    if (telegramUser.id) {
      fetchUserData(telegramUser.id); // Fetch user data if Telegram ID is available
    }

    // Expand the Web App to full screen inside Telegram
    tg.expand();
  }, []);

// Function to fetch user data from the backend
const fetchUserData = async (telegramId) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/users/${telegramId}`); // Use your actual backend URL

    // Log the entire response for debugging
    console.log('User data response:', response.data);

    // Directly destructure properties from the response data
    const { points, firstName, lastName, username } = response.data;

    // Update state with user information
    setUser({
      first_name: firstName,
      last_name: lastName,
      username: username,
      telegramId: telegramId
    });

    setUserPoints(points); // Update user's points from backend
    console.log('Updated user points:', points); // Log points after update
  } catch (error) {
    console.error('Error fetching user data:', error); // Log any errors
  }
};

  return (
    <div className="h-full py-8">
      {/* Section Header */}
      <section>
        <div className="py-4 flex justify-around">
          <div>
            <img src={logo} alt="AIDOGS Logo" />
          </div>

          <button className="bg-[#3F015F] text-white px-8 py-2 h-8 rounded-lg">
            Connect Wallet
          </button>
        </div>

        <div className="text-white">
          <p>Welcome </p>
          {user?.username ? (
            <p>
              Hello, {user.first_name} (@{user.username})!
            </p>
          ) : (
            <p>Welcome, guest!</p>
          )}
          <p className="text-2xl">
            {userPoints} <span className="text-[#FEC95E]">$AIDOGS</span> {/* Display user's points */}
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="p-4 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Taskcard1
            image={schedule}
            text="Daily Check-in"
            points="+15000 $AIDOGS"
            btext="Claim"
          />
          <Taskcard1
            image={trophy}
            text="Special Task"
            points="+21000 $AIDOGS"
            btext="Start"
          />
          <Taskcard1 image={game} text="Play Mini Games" btext="Play" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Button1 image={telegram} text="Join Telegram" />
          <Button1 image={xtwitter} text="Follow X" />
          <Button1 image={youtube} text="Follow Youtube" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="p-4 bg-[#160023] m-2 rounded-2xl">
        <div>
          <ImageCard1
            image={dog}
            title="$AIDOGS Mission"
            text="Complete the task to claim 7k $AIDOGS. Earn 2.8k $AIDOGS whenever your key is used."
          />
        </div>

        <div>
          <Taskcard2 logo={xtwitter} text="RT & Tag 3 Frens" buttontext="Do" />
          <Taskcard2
            logo={xtwitter}
            text="Tweet your Boost Key"
            buttontext="Do"
          />
          <Taskcard2
            logo={xtwitter}
            text="Post an Instagram Story"
            buttontext="Do"
          />
        </div>

        <div>
          <div className="flex space-x-4 w-full">
            {/* First button - Inactive with transparent background and white border */}
            <button className="flex items-center justify-center px-4 py-2 border border-white text-white rounded-lg">
              1,092,393 Participants
            </button>

            {/* Second button - Participate with white background and custom text color */}
            <button className="flex-grow bg-white text-[#160023] px-6 py-2 rounded-lg">
              Participate
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="p-4">
        <p className="text-white text-sm text-left p-4 ">Daily Tasks</p>
        <DailyTask
          logo={youtube}
          title="Watch video on Youtube"
          text="+1,000 $AIDOGS"
          buttontext="Start"
        />
        <DailyTask
          logo={telegram}
          title="Post on Telegram status"
          text="+1,000 $AIDOGS"
          buttontext="Start"
          shareUrl="https://t.me/share/url?url=https://res.cloudinary.com/dz2fc3ioz/video/upload/v1708265446/Blastarians_nr0sus.mp4&text=Check%20out%20this%20cool%20video%20and%20share%20it%20to%20your%20Telegram%20status!"
        />
        <DailyTask
          logo={youtube}
          title="Watch video on Youtube"
          text="+1,000 $AIDOGS"
          buttontext="Start"
        />
        <DailyTask
          logo={youtube}
          title="Watch video on Youtube"
          text="+1,000 $AIDOGS"
          buttontext="Start"
        />
        <DailyTask
          logo={youtube}
          title="Watch video on Youtube"
          text="+1,000 $AIDOGS"
          buttontext="Start"
        />
      </section>

      <UserList />
    </div>
  );
};

export default Home;