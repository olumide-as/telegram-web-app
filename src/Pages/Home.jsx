import React from "react";
import { Button1, ImageCard1, Taskcard1, Taskcard2 } from "../Components";
import {
  dog,
  game,
  schedule,
  telegram,
  trophy,
  xtwitter,
  youtube,
} from "../Assets";

const Home = () => {
  return (
    <div className="h-full">
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
      <section>

      </section>
    </div>
  );
};

export default Home;
