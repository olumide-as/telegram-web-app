import React from "react";
import { Taskcard1 } from "../Components";
import { game, schedule, trophy } from "../Assets";

const Home = () => {
  return (
    <div className="h-screen">
      {/* Section 1 */}
      <section className="p-8">
        <div className="grid grid-cols-3 gap-4">
          <Taskcard1 image={schedule} text="Daily Check-in" points='+15000 $AIDOGS' btext="claim"  />
          <Taskcard1 image={trophy} text="Special Task" points='+21000 $AIDOGS' btext="claim"  />
          <Taskcard1 image={game} text="Play Mini Games"  btext="claim"  />
        </div>
      </section>
    </div>
  );
};

export default Home;
