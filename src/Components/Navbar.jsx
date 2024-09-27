import React from 'react'
import { handshake, home, mission, podium } from '../Assets'


const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#160023] shadow-md border-t border-gray-200 text-white z-30">
      <div className="flex justify-around items-center p-2">
        <div className="flex flex-col items-center">
          <img src={home} alt="Home" className="w-8 h-8" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={podium} alt="Leaderboard" className="w-8 h-8" />
          <span className="text-xs">Leaderboard</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={mission} alt="Missions" className="w-8 h-8" />
          <span className="text-xs">Missions</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={handshake} alt="Friends" className="w-8 h-8" />
          <span className="text-xs">Friends</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar