import React from "react";
import { Taskcard1 } from "../Components";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="p-8">
        <div className="grid grid-cols-3 gap-4">

          <Taskcard1 /><Taskcard1 /><Taskcard1 />
        </div>
      </section>
    </div>
  );
};

export default Home;
