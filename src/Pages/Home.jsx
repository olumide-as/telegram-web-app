import React from "react";
import { Button1, Taskcard1 } from "../Components";
import { game, schedule, telegram, trophy, xtwitter, youtube } from "../Assets";

const Home = () => {
  return (
    <div className="h-screen">
      {/* Section 1 */}
      <section className="p-8">
        <div className="grid grid-cols-3 gap-4">
          <Taskcard1 image={schedule} text="Daily Check-in" points='+15000 $AIDOGS' btext="Claim"  />
          <Taskcard1 image={trophy} text="Special Task" points='+21000 $AIDOGS' btext="Start"  />
          <Taskcard1 image={game} text="Play Mini Games"  btext="Play"  />
        </div>
        \
        <div className="grid grid-cols-3 gap-4">
          <Button1 image={telegram} text="Join Telegram" />
          <Button1 image={xtwitter} text="Follow X" />
          <Button1 image={youtube} text="Follow Youtube" />
        </div>
      </section>
    </div>
  );
};

export default Home;
