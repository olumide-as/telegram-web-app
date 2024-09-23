import React from 'react'
import { schedule } from '../Assets'

const Taskcard1 = () => {
  return (
    <div className='border border-amber-400 rounded-xl text-white'>
      <div className='p-2'>
        <img src={schedule} alt="card image" className='m-auto w-8'/>
      <p className='text-sm'>Daily Check-in</p>
      <p className='text-amber-400 text-sm'>+15000 $AIDOGS</p>
      </div>
    <button className='bg-amber-400 w-full rounded-b-xl'>claim</button>

    </div>
  )
}

export default Taskcard1